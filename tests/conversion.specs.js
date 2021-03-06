const {createStateMachine} = require('kingly');
const assert = require('assert');
const prettyFormat = require('pretty-format');
const {fakeConsole, cartesian} = require('../src/helpers');
const {computeTransitionsAndStatesFromXmlString} = require('../src/yed2kingly');
const graphs = require('./fixtures/');

/**
 * Test strategy
 * We take a graphml file, convert it to the Kingly format,
 * create a machine from it, and test that the machine behaves
 * as expected from the graph specifications.
 *
 * Three key cases have to be dedicated some attention:
 * - standard syntax
 * - compound guards and actions
 *   - e.g., [guard1, guard2] and / action1, action2
 * - compound edges
 * @param updates
 * @returns {*}
 */

/////
// Test setup

// Use a simple merge to update extended state, that's enough for tests
// but then updates must be an object, not an array
const updateState = (extendedState, updates) => Object.assign({}, extendedState, updates);
const traceTransition = str => ({outputs: [str], updates: {}});

// cf. tests/graphs/test-yed-conversion.graphml
const {
  test_yed_conversion_no_compound_actions_guards,
  counter_inc_dec,
  top_level_conditional_init,
  deep_hierarchy_conditional_automatic_init_event_eventless,
  deep_hierarchy_history_H_star,
  hierarchy_conditional_init,
  hierarchy_history_H,
  hierarchy_history_H_star,
  no_hierarchy_eventful_eventless_guards,
  no_hierarchy_events_eventless,
  top_level_conditional_init_with_hierarchy,
  deep_hierarchy_history_H,
} = require('./fixtures');

//////
// Test execution

describe('Conversion yed to kingly - testing conversion semantics', function () {
  const {
    top_level_conditional_init,
    deep_hierarchy_conditional_automatic_init_event_eventless,
    deep_hierarchy_history_H_star,
    hierarchy_conditional_init,
    hierarchy_history_H,
    hierarchy_history_H_star,
    no_hierarchy_eventful_eventless_guards,
    no_hierarchy_events_eventless,
    top_level_conditional_init_with_hierarchy,
    deep_hierarchy_history_H,
    test_yed_conversion,
  } = graphs;
  const settings = {debug: {fakeConsole}};
  const event1 = {event1: void 0};
  const event2 = {event2: void 0};
  const event3 = {event3: void 0};
  const unknownEvent = {event3: void 0};

  describe('top_level_conditional_init', function () {
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(top_level_conditional_init);
    const guards = {
      // we test on extended state, so we test also the guard parameters
      // are as expected
      'not(isNumber)': (s, e, stg) => typeof s.n !== 'number',
      isNumber: (s, e, stg) => typeof s.n === 'number',
    };
    const actionFactories = {
      logOther: (s, e, stg) => ({outputs: [`logOther run on ${s.n}`], updates: {}}),
      logNumber: (s, e, stg) => ({outputs: [`logNumber run on ${s.n}`], updates: {}}),
    };

    const fsmDef1 = {
      updateState,
      initialExtendedState: {n: 0},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const fsm1 = createStateMachine(fsmDef1, settings);
    const fsmDef2 = {
      updateState,
      initialExtendedState: {n: ''},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const fsm2 = createStateMachine(fsmDef2, settings);

    const outputs1 = [{[events[0] + 'X']: void 0}, {[events[0]]: void 0}, {[events[0]]: void 0}].map(fsm1);
    const expected1 = [null, ['logNumber run on 0'], null];
    const outputs2 = [{[events[0] + 'X']: void 0}, {[events[0]]: void 0}, {[events[0]]: void 0}].map(fsm2);
    const expected2 = [null, ['logOther run on '], null];
    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
      assert.deepEqual(outputs2, expected2, `Branch machine initialized with string ok`);
    });
  });

  describe('no-hierarchy-events-eventless', function () {
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(no_hierarchy_events_eventless);
    const eventSpace = [event1, event2, unknownEvent];
    const guards = {
      shouldReturnToA: (s, e, stg) => s.shouldReturnToA,
    };
    const actionFactories = {
      logAtoB: (s, e, stg) => traceTransition('A -> B'),
      logAtoC: (s, e, stg) => traceTransition('A -> C'),
      logBtoD: (s, e, stg) => traceTransition('B -> D'),
      logCtoD: (s, e, stg) => traceTransition('C -> D'),
      logDtoA: (s, e, stg) => traceTransition('D -> A'),
    };

    // Two machines to test the guard and achieve all-transition coverage
    const fsmDef1 = {
      updateState,
      initialExtendedState: {shouldReturnToA: false},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const outputs1 = cases.map(scenario => {
      const fsm1 = createStateMachine(fsmDef1, settings);
      return scenario.map(fsm1);
    });
    const expected1 = [
      // [event1, event1, event1]
      [['A -> B'], null, null],
      [['A -> B'], null, ['B -> D', null]],
      [['A -> B'], null, null],
      // [event1, event2, event1]
      [['A -> B'], ['B -> D', null], null],
      [['A -> B'], ['B -> D', null], null],
      [['A -> B'], ['B -> D', null], null],
      // [event1, event3, event1]
      [['A -> B'], null, null],
      [['A -> B'], null, ['B -> D', null]],
      [['A -> B'], null, null],
      // [event2, event1, event1]
      [['A -> C'], ['C -> D', null], null],
      [['A -> C'], ['C -> D', null], null],
      [['A -> C'], ['C -> D', null], null],
      // [event2, event2, event1]
      [['A -> C'], null, ['C -> D', null]],
      [['A -> C'], null, null],
      [['A -> C'], null, null],
      // [event2, event3, event1]
      [['A -> C'], null, ['C -> D', null]],
      [['A -> C'], null, null],
      [['A -> C'], null, null],
      // [event3, event1, event1]
      [null, ['A -> B'], null],
      [null, ['A -> B'], ['B -> D', null]],
      [null, ['A -> B'], null],
      // [event3, event2, event1]
      [null, ['A -> C'], ['C -> D', null]],
      [null, ['A -> C'], null],
      [null, ['A -> C'], null],
      // [event3, event3, event1]
      [null, null, ['A -> B']],
      [null, null, ['A -> C']],
      [null, null, null],
    ];

    const fsmDef2 = {
      updateState,
      initialExtendedState: {shouldReturnToA: true},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const fsm2 = createStateMachine(fsmDef2, settings);
    const outputs2 = cases.map(scenario => {
      const fsm2 = createStateMachine(fsmDef2, settings);
      return scenario.map(fsm2);
    });
    const expected2 = [
      // [event1, event1, event1]
      [['A -> B'], null, null],
      [['A -> B'], null, ['B -> D', 'D -> A']],
      [['A -> B'], null, null],
      // [event1, event2, event1]
      [['A -> B'], ['B -> D', 'D -> A'], ['A -> B']],
      [['A -> B'], ['B -> D', 'D -> A'], ['A -> C']],
      [['A -> B'], ['B -> D', 'D -> A'], null],
      // [event1, event3, event1]
      [['A -> B'], null, null],
      [['A -> B'], null, ['B -> D', 'D -> A']],
      [['A -> B'], null, null],
      // [event2, event1, event1]
      [['A -> C'], ['C -> D', 'D -> A'], ['A -> B']],
      [['A -> C'], ['C -> D', 'D -> A'], ['A -> C']],
      [['A -> C'], ['C -> D', 'D -> A'], null],
      // [event2, event2, event1]
      [['A -> C'], null, ['C -> D', 'D -> A']],
      [['A -> C'], null, null],
      [['A -> C'], null, null],
      // [event2, event3, event1]
      [['A -> C'], null, ['C -> D', 'D -> A']],
      [['A -> C'], null, null],
      [['A -> C'], null, null],
      // [event3, event1, event1]
      [null, ['A -> B'], null],
      [null, ['A -> B'], ['B -> D', 'D -> A']],
      [null, ['A -> B'], null],
      // [event3, event2, event1]
      [null, ['A -> C'], ['C -> D', 'D -> A']],
      [null, ['A -> C'], null],
      [null, ['A -> C'], null],
      // [event3, event3, event1]
      [null, null, ['A -> B']],
      [null, null, ['A -> C']],
      [null, null, null],
    ];

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event1', 'event2'], `The list of events is correctly parsed`);
      assert.deepEqual(
        states,
        {
          A???n1: '',
          B???n2: '',
          C???n3: '',
          D???n4: '',
        },
        `The hierarchy of states is correctly parsed`
      );
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
      assert.deepEqual(outputs2, expected2, `Branch machine initialized with string ok`);
    });
  });

  describe('no_hierarchy_eventful_eventless_guards', function () {
    // tests with:
    // - condition1 fulfilled
    // - condition2 fulfilled
    // - condition3 fulfilled
    // - both cond1 and cond2 fulfilled
    // - both cond2 and cond3 fulfilled
    // - none fulfilled
    // [condx, condy]
    // use power of 2 (bit position)
    // Achtung!!!! For the tests, the order of guards in the guards array matters!!!
    // I made it the transitions in same order as the condition so easier to reason about
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(no_hierarchy_eventful_eventless_guards);
    const eventSpace = [{event: 1}, {event: 2}, {event: 4}, {event: 3}, {event: 6}, {event: 0}];
    const guards = {
      shouldReturnToA: (s, e, stg) => Boolean(s.shouldReturnToA),
      // This time we test on event data, so we test also the guard parameters
      // are as expected
      condition1: (s, e, stg) => Boolean(e & 1),
      condition2: (s, e, stg) => Boolean(e & 2),
      condition3: (s, e, stg) => Boolean(e & 4),
    };
    const actionFactories = {
      logAtoTemp1: (s, e, stg) => traceTransition('A -> Temp1'),
      logTemp1toA: (s, e, stg) => traceTransition('Temp1 -> A'),
      logAtoTemp2: (s, e, stg) => traceTransition('A -> Temp2'),
      logTemp2toA: (s, e, stg) => traceTransition('Temp2 -> A'),
      logAtoDone: (s, e, stg) => traceTransition('A -> Done'),
    };

    // console.log(`transitions: `, displayTransitionJSON(getKinglyTransitions({ actionFactories, guards }).transitions))

    // Two machines to test the guard and achieve all-transition coverage
    const fsmDef1 = {
      updateState,
      initialExtendedState: {shouldReturnToA: false},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const inputSpace = cartesian([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]]];
    });
    const expected1 = [
      // [cond1, cond1]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      // [cond1, cond2]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      // [cond1, cond3]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Done', null]],
      // [cond1, cond12]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      // [cond1, cond23]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      // [cond1, !cond]
      [['A -> Temp1', 'Temp1 -> A'], [null]],
      // [cond2, x]
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Done', null]],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], [null]],
      // [cond3, x]
      [['A -> Done', null], null],
      [['A -> Done', null], null],
      [['A -> Done', null], null],
      [['A -> Done', null], null],
      [['A -> Done', null], null],
      [['A -> Done', null], null],
      // [cond12, x]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Done', null]],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], [null]],
      // [cond23, x]
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Done', null]],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], [null]],
      // [!cond, x]
      [[null], ['A -> Temp1', 'Temp1 -> A']],
      [[null], ['A -> Temp2', 'Temp2 -> A']],
      [[null], ['A -> Done', null]],
      [[null], ['A -> Temp1', 'Temp1 -> A']],
      [[null], ['A -> Temp2', 'Temp2 -> A']],
      [[null], [null]],
    ];

    const fsmDef2 = {
      updateState,
      initialExtendedState: {shouldReturnToA: true},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const expected2 = [
      // [cond1, cond1]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      // [cond1, cond2]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      // [cond1, cond3]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Done']],
      // [cond1, cond12]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      // [cond1, cond23]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      // [cond1, !cond]
      [['A -> Temp1', 'Temp1 -> A'], [null]],
      // [cond2, x]
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Done']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], [null]],
      // [cond3, x]
      [['A -> Done'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Done'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Done'], ['A -> Done']],
      [['A -> Done'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Done'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Done'], [null]],
      // [cond12, x]
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Done']],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp1', 'Temp1 -> A'], [null]],
      // [cond23, x]
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Done']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp1', 'Temp1 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], ['A -> Temp2', 'Temp2 -> A']],
      [['A -> Temp2', 'Temp2 -> A'], [null]],
      // [!cond, x]
      [[null], ['A -> Temp1', 'Temp1 -> A']],
      [[null], ['A -> Temp2', 'Temp2 -> A']],
      [[null], ['A -> Done']],
      [[null], ['A -> Temp1', 'Temp1 -> A']],
      [[null], ['A -> Temp2', 'Temp2 -> A']],
      [[null], [null]],
    ];

    it('runs the machine as per the graph', function () {
      cases.forEach((scenario, index) => {
        if (index > 35) return
        const fsm1 = createStateMachine(fsmDef1, settings);
        const outputs = scenario.map(fsm1);
        assert.deepEqual(outputs, expected1[index], JSON.stringify(scenario).replace(/(\r\n\t|\n|\r\t)/gm, ""));
        return outputs;
      });
    });

    it('runs the machine as per the graph', function () {
      cases.forEach((scenario, index) => {
        if (index > 999995) return
        const fsm2 = createStateMachine(fsmDef2, settings);
        const outputs = scenario.map(fsm2);
        assert.deepEqual(outputs, expected2[index], JSON.stringify(scenario).replace(/(\r\n\t|\n|\r\t)/gm, ""));
        return outputs;
      });
    });

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event'], `The list of events is correctly parsed`);
      assert.deepEqual(
        states,
        {
          A???n1: '',
          Temp1???n2: '',
          Temp2???n3: '',
          Done???n4: '',
        },
        `The hierarchy of states is correctly parsed`
      );
    });
  });

  describe('top_level_conditional_init_with_hierarchy', function () {
    // should be exact same tests than top_level_conditional_init
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(top_level_conditional_init_with_hierarchy)
    const guards = {
      // we test on extended state, so we test also the guard parameters
      // are as expected
      'not(isNumber)': (s, e, stg) => typeof s.n !== 'number',
      isNumber: (s, e, stg) => typeof s.n === 'number',
    };
    const actionFactories = {
      logOther: (s, e, stg) => ({outputs: [`logOther run on ${s.n}`], updates: {}}),
      logNumber: (s, e, stg) => ({outputs: [`logNumber run on ${s.n}`], updates: {}}),
    };

    const fsmDef1 = {
      updateState,
      initialExtendedState: {n: 0},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const fsm1 = createStateMachine(fsmDef1, {debug: {console: fakeConsole}});
    const fsmDef2 = {
      updateState,
      initialExtendedState: {n: ''},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions
    };
    const fsm2 = createStateMachine(fsmDef2, {debug: {console: fakeConsole}});

    const outputs1 = [{[events[0] + 'X']: void 0}, {[events[0]]: void 0}, {[events[0]]: void 0}].map(fsm1);
    const expected1 = [null, ['logNumber run on 0'], null];
    const outputs2 = [{[events[0] + 'X']: void 0}, {[events[0]]: void 0}, {[events[0]]: void 0}].map(fsm2);
    const expected2 = [null, ['logOther run on '], null];

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['continue'], `events correctly parsed`);
      assert.deepEqual(
        states,
        {
          'Group 1???n1': {'Number???n1::n0': '', 'Other???n1::n2': '', 'Done???n1::n3': ''}
        },
        `state hierarchy correctly parsed`
      );
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
      assert.deepEqual(outputs2, expected2, `Branch machine initialized with string ok`);
    });
  });

  describe('hierarchy_conditional_init', function () {
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(hierarchy_conditional_init);
    const settings1 = {n: 0};
    const settings2 = {n: ''};
    // We do the branching on `settings` so we tests also the signature of the guards
    // in passing
    const guards = {
      'not(isNumber)': (s, e, stg) => typeof stg.n !== 'number',
      isNumber: (s, e, stg) => typeof stg.n === 'number',
    };
    const actionFactories = {
      logAtoB: (s, e, stg) => traceTransition('A -> B'),
      logAtoC: (s, e, stg) => traceTransition('A -> C'),
    };

    // Two machines to test the guard and achieve all-transition coverage
    const fsmDef1 = {
      updateState,
      initialExtendedState: void 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const fsm1 = createStateMachine(fsmDef1, settings1);
    const outputs1 = [unknownEvent, {event1: void 0}].map(fsm1);
    const expected1 = [null, ['A -> B']];

    const fsmDef2 = {
      updateState,
      initialExtendedState: void 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions
    };
    const fsm2 = createStateMachine(fsmDef2, settings2);
    const outputs2 = [unknownEvent, {event1: void 0}].map(fsm2);
    const expected2 = [null, ['A -> C']];

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event1'], `The list of events is correctly parsed`);
      assert.deepEqual(
        states,
        {
          A???n1: '',
          'Group 1???n2': {
            'B???n2::n0': '',
            'C???n2::n2': '',
          },
        },
        `The hierarchy of states is correctly parsed`
      );
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
      assert.deepEqual(outputs2, expected2, `Branch machine initialized with string ok`);
    });
  });

  describe('deep_hierarchy_conditional_automatic_init_event_eventless', function () {
    // should be exact same tests than top_level_conditional_init
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(deep_hierarchy_conditional_automatic_init_event_eventless);
    const guards = {
      // we test on extended state, so we test also the guard parameters
      // are as expected
      'not(isNumber)': (s, e, stg) => typeof e.n !== 'number',
      isNumber: (s, e, stg) => typeof e.n === 'number',
      shouldReturnToA: (s, e, stg) => e.shouldReturnToA,
    };
    const actionFactories = {
      logAtoGroup1: (s, e, stg) => traceTransition('A -> Group1'),
      logGroup1toGroup2: (s, e, stg) => traceTransition('Group1 -> B'),
      logGroup2toGroup3: (s, e, stg) => traceTransition('Group2 -> Group3'),
      logGroup3BtoGroup4: (s, e, stg) => traceTransition('Group3 -> Group4'),
      logGroup3toB: (s, e, stg) => traceTransition('Group3 -> B'),
      logGroup3toC: (s, e, stg) => traceTransition('Group3 -> C'),
      logAtoB: (s, e, stg) => traceTransition('A -> B'),
      logAtoC: (s, e, stg) => traceTransition('A -> C'),
      logBtoD: (s, e, stg) => traceTransition('B -> D'),
      logDtoA: (s, e, stg) => traceTransition('D -> A'),
      logCtoD: (s, e, stg) => traceTransition('C -> D'),
    };
    const fsmDef = {
      updateState,
      initialExtendedState: void 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const outputs1 = [
      {event1: {n: 0}},
      {event1: void 0},
      {event1: void 0},
      {event2: {shouldReturnToA: false}},
      {event2: {shouldReturnToA: false}},
    ].map(createStateMachine(fsmDef, settings));
    const outputs2 = [
      {event1: {n: 0}},
      {event1: void 0},
      {event2: void 0},
      {event1: {shouldReturnToA: false}},
      {event1: {shouldReturnToA: false}},
    ].map(createStateMachine(fsmDef, settings));
    const outputs3 = [
      {event1: {n: 0}},
      {event1: void 0},
      {event1: void 0},
      {event2: {shouldReturnToA: true}},
      {event2: {shouldReturnToA: false}},
    ].map(createStateMachine(fsmDef, settings));
    const outputs4 = [
      {event1: {n: 0}},
      {event1: void 0},
      {event2: void 0},
      {event1: {shouldReturnToA: true}},
      {event1: {shouldReturnToA: false}},
    ].map(createStateMachine(fsmDef, settings));
    const outputs5 = [
      {event1: {n: ''}},
      {event1: void 0},
      {event2: void 0},
      {event1: {shouldReturnToA: true}},
      {event1: {shouldReturnToA: false}},
    ].map(createStateMachine(fsmDef, settings));

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event1', 'event2'], `events correctly parsed`);
      assert.deepEqual(
        states, {
          "A???n1": "",
          "Group 1???n2": {
            "B???n2::n0": "",
            "Group 2???n2::n2": {
              "Group 3???n2::n2::n1": {
                "B???n2::n2::n1::n0": "",
                "C???n2::n2::n1::n2": "",
                "Group 4???n2::n2::n1::n3": {
                  "A???n2::n2::n1::n3::n0": "",
                  "B???n2::n2::n1::n3::n1": "",
                  "C???n2::n2::n1::n3::n2": "",
                  "D???n2::n2::n1::n3::n3": ""

                }
              }
            }
          }
        },
        `state hierarchy correctly parsed`
      );
      // !!! mocha diff shows `null` as [null]!!!
      assert.deepEqual(
        outputs1,
        [
          ['A -> Group1', 'Group1 -> B', 'Group2 -> Group3', 'Group3 -> B'],
          ['Group3 -> Group4'],
          ['A -> B'],
          ['B -> D', null],
          null,
        ],
        `ok`
      );
      assert.deepEqual(
        outputs2,
        [
          ['A -> Group1', 'Group1 -> B', 'Group2 -> Group3', 'Group3 -> B'],
          ['Group3 -> Group4'],
          ['A -> C'],
          ['C -> D', null],
          null,
        ],
        `ok`
      );
      assert.deepEqual(
        outputs3,
        [
          ['A -> Group1', 'Group1 -> B', 'Group2 -> Group3', 'Group3 -> B'],
          ['Group3 -> Group4'],
          ['A -> B'],
          ['B -> D', 'D -> A'],
          ['A -> C'],
        ],
        `ok`
      );
      assert.deepEqual(
        outputs4,
        [
          ['A -> Group1', 'Group1 -> B', 'Group2 -> Group3', 'Group3 -> B'],
          ['Group3 -> Group4'],
          ['A -> C'],
          ['C -> D', 'D -> A'],
          ['A -> B'],
        ],
        `ok`
      );
      assert.deepEqual(
        outputs5,
        [
          ['A -> Group1', 'Group1 -> B', 'Group2 -> Group3', 'Group3 -> C'],
          null, null, null, null
        ],
        `ok`
      );
    });
  });

  describe('hierarchy_history_H', function () {
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(hierarchy_history_H);
    const eventSpace = [event1, event2, event3];
    const guards = {};
    const actionFactories = {
      logGroup1toC: (s, e, stg) => traceTransition('Group1 -> C'),
      logBtoC: (s, e, stg) => traceTransition('B -> C'),
      logBtoD: (s, e, stg) => traceTransition('B -> D'),
      logCtoD: (s, e, stg) => traceTransition('C -> D'),
      logDtoGroup1H: (s, e, stg) => traceTransition('D -> Group1H'),
    };

    // Two machines to test the guard and achieve all-transition coverage
    const fsmDef1 = {
      updateState,
      initialExtendedState: {},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const outputs1 = cases.map(scenario => {
      const fsm1 = createStateMachine(fsmDef1, settings);
      return scenario.map(fsm1);
    });
    const expected1 = [
      // [event1, event1, event1]
      [['B -> D'], null, null],
      [['B -> D'], null, null],
      [['B -> D'], null, ['D -> Group1H']],
      // [event1, event2, event1]
      [['B -> D'], null, null],
      [['B -> D'], null, null],
      [['B -> D'], null, ['D -> Group1H']],
      // [event1, event3, event1]
      [['B -> D'], ['D -> Group1H'], null],
      [['B -> D'], ['D -> Group1H'], null],
      [['B -> D'], ['D -> Group1H'], ['D -> Group1H']],
      // [event2, event1, event1]
      [['B -> C'], ['C -> D'], null],
      [['B -> C'], ['C -> D'], null],
      [['B -> C'], ['C -> D'], ['D -> Group1H']],
      // [event2, event2, event1]
      [['B -> C'], null, ['C -> D']],
      [['B -> C'], null, null],
      [['B -> C'], null, ['D -> Group1H']],
      // [event2, event3, event1]
      [['B -> C'], ['D -> Group1H'], ['C -> D']],
      [['B -> C'], ['D -> Group1H'], null],
      [['B -> C'], ['D -> Group1H'], ['D -> Group1H']],
      // [event3, event1, event1]
      [['D -> Group1H'], ['B -> D'], null],
      [['D -> Group1H'], ['B -> D'], null],
      [['D -> Group1H'], ['B -> D'], ['D -> Group1H']],
      // [event3, event2, event1]
      [['D -> Group1H'], ['B -> C'], ['C -> D']],
      [['D -> Group1H'], ['B -> C'], null],
      [['D -> Group1H'], ['B -> C'], ['D -> Group1H']],
      // [event3, event3, event1]
      [['D -> Group1H'], ['D -> Group1H'], ['B -> D']],
      [['D -> Group1H'], ['D -> Group1H'], ['B -> C']],
      [['D -> Group1H'], ['D -> Group1H'], ['D -> Group1H']],
    ];

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event3', 'event1', 'event2'], `The list of events is correctly parsed`);
      assert.deepEqual(
        states,
        {
          D???n1: '',
          'Group 1???n2': {
            'B???n2::n0': '',
            'C???n2::n1': '',
            'D???n2::n2': '',
          },
        },
        `The hierarchy of states is correctly parsed`
      );
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
    });
  });

  describe('hierarchy_history_H_star', function () {
    // Should be exactly the same as the hierarchy_history_H case
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(hierarchy_history_H_star);
    const eventSpace = [event1, event2, event3];
    const guards = {};
    const actionFactories = {
      logGroup1toC: (s, e, stg) => traceTransition('Group1 -> C'),
      logBtoC: (s, e, stg) => traceTransition('B -> C'),
      logBtoD: (s, e, stg) => traceTransition('B -> D'),
      logCtoD: (s, e, stg) => traceTransition('C -> D'),
      'logDtoGroup1H*': (s, e, stg) => traceTransition('D -> Group1H*'),
    };

    // Two machines to test the guard and achieve all-transition coverage
    const fsmDef1 = {
      updateState,
      initialExtendedState: {},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const outputs1 = cases.map(scenario => {
      const fsm1 = createStateMachine(fsmDef1, settings);
      return scenario.map(fsm1);
    });
    const expected1 = [
      // [event1, event1, event1]
      [['B -> D'], null, null],
      [['B -> D'], null, null],
      [['B -> D'], null, ['D -> Group1H*']],
      // [event1, event2, event1]
      [['B -> D'], null, null],
      [['B -> D'], null, null],
      [['B -> D'], null, ['D -> Group1H*']],
      // [event1, event3, event1]
      [['B -> D'], ['D -> Group1H*'], null],
      [['B -> D'], ['D -> Group1H*'], null],
      [['B -> D'], ['D -> Group1H*'], ['D -> Group1H*']],
      // [event2, event1, event1]
      [['B -> C'], ['C -> D'], null],
      [['B -> C'], ['C -> D'], null],
      [['B -> C'], ['C -> D'], ['D -> Group1H*']],
      // [event2, event2, event1]
      [['B -> C'], null, ['C -> D']],
      [['B -> C'], null, null],
      [['B -> C'], null, ['D -> Group1H*']],
      // [event2, event3, event1]
      [['B -> C'], ['D -> Group1H*'], ['C -> D']],
      [['B -> C'], ['D -> Group1H*'], null],
      [['B -> C'], ['D -> Group1H*'], ['D -> Group1H*']],
      // [event3, event1, event1]
      [['D -> Group1H*'], ['B -> D'], null],
      [['D -> Group1H*'], ['B -> D'], null],
      [['D -> Group1H*'], ['B -> D'], ['D -> Group1H*']],
      // [event3, event2, event1]
      [['D -> Group1H*'], ['B -> C'], ['C -> D']],
      [['D -> Group1H*'], ['B -> C'], null],
      [['D -> Group1H*'], ['B -> C'], ['D -> Group1H*']],
      // [event3, event3, event1]
      [['D -> Group1H*'], ['D -> Group1H*'], ['B -> D']],
      [['D -> Group1H*'], ['D -> Group1H*'], ['B -> C']],
      [['D -> Group1H*'], ['D -> Group1H*'], ['D -> Group1H*']],
    ];

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event3', 'event1', 'event2'], `The list of events is correctly parsed`);
      assert.deepEqual(
        states,
        {
          D???n1: '',
          'Group 1???n2': {
            'B???n2::n0': '',
            'C???n2::n1': '',
            'D???n2::n2': '',
          },
        },
        `The hierarchy of states is correctly parsed`
      );
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
    });
  });

  describe('deep_hierarchy_history_H_star', function () {
    // Should be exactly the same as the hierarchy_history_H case
    const {getKinglyTransitions, states, events, errors} = computeTransitionsAndStatesFromXmlString(
      deep_hierarchy_history_H_star
    );
    const eventSpace = [event1, event2, event3];
    const guards = {};
    const actionFactories = {
      logGroup1toC: (s, e, stg) => traceTransition('Group1 -> C'),
      logGroup1toD: (s, e, stg) => traceTransition('Group1 -> D'),
      logGroup1toE: (s, e, stg) => traceTransition('Group1 -> E'),
      logBtoC: (s, e, stg) => traceTransition('B -> C'),
      logBtoD: (s, e, stg) => traceTransition('B -> D'),
      logCtoD: (s, e, stg) => traceTransition('C -> D'),
      logDtoD: (s, e, stg) => traceTransition('D -> D'),
      'logGroup1toH*': (s, e, stg) => traceTransition('Group1 -> Group1H*'),
    };

    // Two machines to test the guard and achieve all-transition coverage
    const fsmDef1 = {
      updateState,
      initialExtendedState: {},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions
    };
    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const outputs1 = cases.map(scenario => {
      const fsm1 = createStateMachine(fsmDef1, settings);
      return scenario.map(fsm1);
    });
    const expected1 = [
      // [event1, event1, event1]
      [['B -> D'], ['D -> D'], null],
      [['B -> D'], ['D -> D'], null],
      [['B -> D'], ['D -> D'], ['Group1 -> Group1H*']],
      // [event1, event2, event1]
      [['B -> D'], null, ['D -> D']],
      [['B -> D'], null, null],
      [['B -> D'], null, ['Group1 -> Group1H*']],
      // [event1, event3, event1]
      [['B -> D'], ['Group1 -> Group1H*'], ['D -> D']],
      [['B -> D'], ['Group1 -> Group1H*'], null],
      [['B -> D'], ['Group1 -> Group1H*'], ['Group1 -> Group1H*']],
      // [event2, event1, event1]
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, ['Group1 -> Group1H*']],
      // [event2, event2, event1]
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, ['Group1 -> Group1H*']],
      // [event2, event3, event1]
      [['B -> C', 'C -> D'], ['Group1 -> Group1H*'], null],
      [['B -> C', 'C -> D'], ['Group1 -> Group1H*'], null],
      [['B -> C', 'C -> D'], ['Group1 -> Group1H*'], ['Group1 -> Group1H*']],
      // [event3, event1, event1]
      [['Group1 -> Group1H*'], ['B -> D'], ['D -> D']],
      [['Group1 -> Group1H*'], ['B -> D'], null],
      [['Group1 -> Group1H*'], ['B -> D'], ['Group1 -> Group1H*']],
      // [event3, event2, event1]
      [['Group1 -> Group1H*'], ['B -> C', 'C -> D'], null],
      [['Group1 -> Group1H*'], ['B -> C', 'C -> D'], null],
      [['Group1 -> Group1H*'], ['B -> C', 'C -> D'], ['Group1 -> Group1H*']],
      // [event3, event3, event1]
      [['Group1 -> Group1H*'], ['Group1 -> Group1H*'], ['B -> D']],
      [['Group1 -> Group1H*'], ['Group1 -> Group1H*'], ['B -> C', 'C -> D']],
      [['Group1 -> Group1H*'], ['Group1 -> Group1H*'], ['Group1 -> Group1H*']],
    ];

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event3', 'event2', 'event1'], `The list of events is correctly parsed`);
      assert.deepEqual(
        states,
        {
          'E???n1': '',
          'Group 1???n2': {
            'B???n2::n0': '',
            'C???n2::n1': '',
            'Group 1???n2::n2': {
              'D???n2::n2::n0': '',
              'D???n2::n2::n2': '',
            },
          },
        },
        `The hierarchy of states is correctly parsed`
      );
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
    });
  });

  describe('deep_hierarchy_history_H', function () {
    // Should be exactly the same as the hierarchy_history_H case
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(deep_hierarchy_history_H);
    const eventSpace = [event1, event2, event3];
    const guards = {};
    const actionFactories = {
      logGroup1toC: (s, e, stg) => traceTransition('Group1 -> C'),
      logGroup1toD: (s, e, stg) => traceTransition('Group1 -> D'),
      logGroup1toE: (s, e, stg) => traceTransition('Group1 -> E'),
      logBtoC: (s, e, stg) => traceTransition('B -> C'),
      logBtoD: (s, e, stg) => traceTransition('B -> D'),
      logCtoD: (s, e, stg) => traceTransition('C -> D'),
      logDtoD: (s, e, stg) => traceTransition('D -> D'),
      logGroup1toH: (s, e, stg) => traceTransition('Group1 -> Group1H'),
    };

    // Two machines to test the guard and achieve all-transition coverage
    const fsmDef1 = {
      updateState,
      initialExtendedState: {},
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };
    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const outputs1 = cases.map(scenario => {
      const fsm1 = createStateMachine(fsmDef1, settings);
      return scenario.map(fsm1);
    });
    const expected1 = [
      // [event1, event1, event1]
      [['B -> D'], ['D -> D'], null],
      [['B -> D'], ['D -> D'], null],
      [['B -> D'], ['D -> D'], ['Group1 -> Group1H', 'Group1 -> D']],
      // [event1, event2, event1]
      [['B -> D'], null, ['D -> D']],
      [['B -> D'], null, null],
      [['B -> D'], null, ['Group1 -> Group1H', 'Group1 -> D']],
      // [event1, event3, event1]
      [['B -> D'], ['Group1 -> Group1H', 'Group1 -> D'], null],
      [['B -> D'], ['Group1 -> Group1H', 'Group1 -> D'], null],
      [['B -> D'], ['Group1 -> Group1H', 'Group1 -> D'], ['Group1 -> Group1H', 'Group1 -> D']],
      // // [event2, event1, event1]
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, ['Group1 -> Group1H', 'Group1 -> D']],
      // // [event2, event2, event1]
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, null],
      [['B -> C', 'C -> D'], null, ['Group1 -> Group1H', 'Group1 -> D']],
      // // [event2, event3, event1]
      [['B -> C', 'C -> D'], ['Group1 -> Group1H', 'Group1 -> D'], null],
      [['B -> C', 'C -> D'], ['Group1 -> Group1H', 'Group1 -> D'], null],
      [['B -> C', 'C -> D'], ['Group1 -> Group1H', 'Group1 -> D'], ['Group1 -> Group1H', 'Group1 -> D']],
      // // [event3, event1, event1]
      [['Group1 -> Group1H'], ['B -> D'], ['D -> D']],
      [['Group1 -> Group1H'], ['B -> D'], null],
      [['Group1 -> Group1H'], ['B -> D'], ['Group1 -> Group1H', 'Group1 -> D']],
      // // [event3, event2, event1]
      [['Group1 -> Group1H'], ['B -> C', 'C -> D'], null],
      [['Group1 -> Group1H'], ['B -> C', 'C -> D'], null],
      [['Group1 -> Group1H'], ['B -> C', 'C -> D'], ['Group1 -> Group1H', 'Group1 -> D']],
      // // [event3, event3, event1]
      [['Group1 -> Group1H'], ['Group1 -> Group1H'], ['B -> D']],
      [['Group1 -> Group1H'], ['Group1 -> Group1H'], ['B -> C', 'C -> D']],
      [['Group1 -> Group1H'], ['Group1 -> Group1H'], ['Group1 -> Group1H']],
    ];

    it('runs the machine as per the graph', function () {
      assert.deepEqual(errors, [], `graphml string is correctly parsed`);
      assert.deepEqual(events, ['event3', 'event2', 'event1'], `The list of events is correctly parsed`);
      assert.deepEqual(
        states,
        {
          E???n1: '',
          'Group 1???n2': {
            'B???n2::n0': '',
            'C???n2::n1': '',
            'Group 1???n2::n2': {
              'D???n2::n2::n0': '',
              'D???n2::n2::n2': '',
            },
          },
        },
        `The hierarchy of states is correctly parsed`
      );
      assert.deepEqual(outputs1, expected1, `Branch machine initialized with number ok`);
    });
  });
});

describe('Conversion yed to kingly - testing conversion syntax: simple syntax with no compound actions or guards', function () {
  const {getKinglyTransitions, stateYed2KinglyMap, states, events} = computeTransitionsAndStatesFromXmlString(test_yed_conversion_no_compound_actions_guards);

  describe('stateYed2KinglyMap', function () {
    it('Internal labels given to nodes as per XML file are correctly mapped to user-given names of nodes/control states', function () {
      assert.deepEqual(stateYed2KinglyMap, {
        "n0": "init",
        "n1::n0": `Showing mini UI`,
        "n1::n1": "init",
        "n1::n2": "H*",
        "n1::n3": "big UI collapsed",
        "n1::n3::n0": "If",
        "n1::n3::n1": "init",
        "n1::n3::n2": "then else",
        "n1::n4": "dummy",
        "n1": "Group 1",
        "n2": "updating",
        "n3::n0": "ran kan kan",
        "n3::n1": "init",
        "n3::n2": "pa dam dam",
        "n3::n3": "H",
        "n3": "Group 3",
      });
    });
  });

  describe('states', function () {
    it(`The state hierarchy of the yed graph is correctly converted to a Kingly states configuration property`, function () {
      assert.deepEqual(states, {
        "updating???n2": "",
        "Group 1???n1": {
          "Showing mini UI???n1::n0": "",
          "big UI collapsed???n1::n3": {
            "If???n1::n3::n0": "",
            "then else???n1::n3::n2": "",
          },
          "dummy???n1::n4": "",
        },
        "Group 3???n3": {
          "ran kan kan???n3::n0": "",
          "pa dam dam???n3::n2": "",
        },
      });
    });
  });

  describe('events', function () {
    it(`The events used in the yed graph are correctly converted to a Kingly events configuration property`, function () {
      assert.deepEqual(events, [
          "trace sent",
          "stay",
          "minimize clicked"
        ],
      );
    });
  });

  // DEPRECATED
  // With the addition of comma-separated composites guards and actions,
  // there is no longer a convenient way to get the transitions in a
  // way that is easy to test against expected values.
  // Guards and actions use higher-order functions which always have
  // the same name, so it is not possible to discriminate what is inside.
  // We keep the test here for the record of the decision
  // describe.skip('getKinglyTransitions', function () {
  //   it(`The transitions for the yed graph are correctly reflected in a Kingly transitions configuration property`, function () {
  //     const actionFactories = {
  //       activate: "-activate",
  //       "update trace store": "-update trace store",
  //       "deactivate": "-deactivate",
  //       "expand clicked": "-expand clicked",
  //       "restore session": "-restore session",
  //     };
  //     const guards = {
  //       isOk: "-isOk",
  //       "not(isOk)": "-not(isOk)",
  //       "shown": "-shown",
  //       "only guard": "-only guard",
  //       "another only guard": "-another only guard"
  //
  //     };
  //     const formattedTransitions = getKinglyTransitions({actionFactories, guards}).transitions
  //       .map(formatResult);
  //
  //     assert.deepEqual(formattedTransitions, [
  //         // NOTE: top-level initial transition (simulates initialControlState)
  //         // so no event is allowed by the user on such pseudo-states
  //         {
  //           "action": "-activate",
  //           "event": INIT_EVENT,
  //           "from": INIT_STATE,
  //           "to": "n1???Group 1",
  //         },
  //         {
  //           "action": "-update trace store",
  //           "event": "trace sent",
  //           "from": "n1???Group 1",
  //           "to": "n2???updating",
  //         },
  //         {
  //           "action": "ACTION_IDENTITY",
  //           "event": INIT_EVENT,
  //           "from": "n3???Group 3",
  //           "to": "n3::n0???ran kan \nkan",
  //         },
  //         {
  //           "event": "stay",
  //           "from": "n3::n0???ran kan \nkan",
  //           "guards": [
  //             {
  //               "action": "ACTION_IDENTITY",
  //               "predicate": "-isOk",
  //               "to": "n3::n0???ran kan \nkan",
  //             },
  //             {
  //               "action": "-deactivate",
  //               "predicate": "-not(isOk)",
  //               "to": "n3::n2???pa dam\ndam",
  //             }
  //           ]
  //         },
  //         {
  //           "event": "",
  //           "from": "n3::n2???pa dam\ndam",
  //           "guards": [
  //             {
  //               "action": "ACTION_IDENTITY",
  //               "predicate": "T",
  //               "to": {
  //                 "shallow": "n3???Group 3"
  //               }
  //             },
  //             {
  //               "action": "ACTION_IDENTITY",
  //               "predicate": "T",
  //               "to": "n1::n3???big UI collapsed"
  //             }
  //           ]
  //         },
  //         {
  //           "action": "ACTION_IDENTITY",
  //           "event": "",
  //           "from": "n3::n0???ran kan \nkan",
  //           "to": "n1::n3::n2???then else"
  //         },
  //         {
  //           "action": "ACTION_IDENTITY",
  //           "event": "",
  //           "from": "n2???updating",
  //           "to": {
  //             "deep": "n1???Group 1"
  //           }
  //         },
  //         {
  //           "event": "",
  //           "from": "n1::n0???Showing\nmini UI",
  //           "guards": [
  //             {
  //               "action": "-expand clicked",
  //               "predicate": "-shown",
  //               "to": "n1::n3::n0???If",
  //             },
  //             {
  //               "action": "ACTION_IDENTITY",
  //               "predicate": "T",
  //               "to": "n1::n4???dummy",
  //             }
  //           ]
  //         },
  //         {
  //           "action": "-restore session",
  //           "event": INIT_EVENT,
  //           "from": "n1???Group 1",
  //           "to": "n1::n0???Showing\nmini UI",
  //         },
  //         {
  //           "action": "ACTION_IDENTITY",
  //           "event": "minimize clicked",
  //           "from": "n1::n3::n0???If",
  //           "to": "n1::n0???Showing\nmini UI"
  //         },
  //         {
  //           "event": INIT_EVENT,
  //           "from": "n1::n3???big UI collapsed",
  //           "guards": [
  //             {
  //               "action": "ACTION_IDENTITY",
  //               "predicate": "-only guard",
  //               "to": "n1::n3::n0???If"
  //             },
  //             {
  //               "action": "ACTION_IDENTITY",
  //               "predicate": "-another only guard",
  //               "to": "n1::n3::n2???then else"
  //             }
  //           ]
  //         }
  //       ]
  //     );
  //   });
  // });

});

describe('Conversion yed to kingly - testing conversion syntax - compound guards and compound actions', function () {
  // cf counter-inc-dec.graphml in tests/graphs
  describe('counter-inc-dec - guards pass', function () {
    // Should be exactly the same as the hierarchy_history_H case
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(counter_inc_dec);

    // Build the machine
    const guards = {
      "is it": (s, e, stg) => true,
      "is it not": (s, e, stg) => true,
    };
    const actionFactories = {
      "increment counter": (s, e, stg) => ({updates: [+1], outputs: [s + 1]}),
      "decrement counter": (s, e, stg) => ({updates: [-1], outputs: [s - 1]}),
      "render": (s, e, stg) => ({updates: [], outputs: [`rendered`]}),
      "render some more": (s, e, stg) => ({updates: [], outputs: []}),
    };

    const event1 = {"click inc": void 0};
    const event2 = {"click dec": void 0};
    const eventSpace = [event1, event2, {dummy: 0}];

    const fsmDef1 = {
      updateState: (s, u) => {
        return u.reduce((a, b) => a + b, s)
      },
      initialExtendedState: 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };

    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const expected1 = [
      // [event1, event1, event1]
      [[1, "rendered"], [2, "rendered"], [3, "rendered"]],
      [[1, "rendered"], [2, "rendered"], [1, "rendered"]],
      [[1, "rendered"], [2, "rendered"], null],
      // [event1, event2, event1]
      [[1, "rendered"], [0, "rendered"], [1, "rendered"]],
      [[1, "rendered"], [0, "rendered"], [-1, "rendered"]],
      [[1, "rendered"], [0, "rendered"], null],
      // // [event1, event3, event1]
      [[1, "rendered"], null, [2, "rendered"]],
      [[1, "rendered"], null, [0, "rendered"]],
      [[1, "rendered"], null, null],
      // // [event2, event1, event1]
      [[-1, "rendered"], [0, "rendered"], [1, "rendered"]],
      [[-1, "rendered"], [0, "rendered"], [-1, "rendered"]],
      [[-1, "rendered"], [0, "rendered"], null],
      // // [event2, event2, event1]
      [[-1, "rendered"], [-2, "rendered"], [-1, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], [-3, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], null],
      // // [event2, event3, event1]
      [[-1, "rendered"], null, [0, "rendered"]],
      [[-1, "rendered"], null, [-2, "rendered"]],
      [[-1, "rendered"], null, null],
      // // [event3, event1, event1]
      [null, [1, "rendered"], [2, "rendered"]],
      [null, [1, "rendered"], [0, "rendered"]],
      [null, [1, "rendered"], null],
      // // [event3, event2, event1]
      [null, [-1, "rendered"], [0, "rendered"]],
      [null, [-1, "rendered"], [-2, "rendered"]],
      [null, [-1, "rendered"], null],
      // // [event3, event3, event1]
      [null, null, [1, "rendered"]],
      [null, null, [-1, "rendered"]],
      [null, null, null],
    ];

    // it('runs the machine as per the graph', function() {
    //   cases.forEach((scenario, index) => {
    //     // Allows to pick some specific index for easier debugging
    //     // if (index > 20) return
    //     const fsm = createStateMachine(fsmDef1, settings);
    //     const outputs = scenario.map(fsm);
    //     assert.deepEqual(outputs, expected1[index], prettyFormat(scenario));
    //   });
    // });


  });

  describe('counter-inc-dec - first guard fail', function () {
    // Should be exactly the same as the hierarchy_history_H case
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(counter_inc_dec);
    // Build the machine
    const guards = {
      "is it": (s, e, stg) => false,
      "is it not": (s, e, stg) => true,
    };
    const actionFactories = {
      "increment counter": (s, e, stg) => ({updates: [+1], outputs: [s + 1]}),
      "decrement counter": (s, e, stg) => ({updates: [-1], outputs: [s - 1]}),
      "render": (s, e, stg) => ({updates: [], outputs: [`rendered`]}),
      "render some more": (s, e, stg) => ({updates: [], outputs: []}),
    };

    const event1 = {"click inc": void 0};
    const event2 = {"click dec": void 0};
    const eventSpace = [event1, event2, {dummy: 0}];

    const fsmDef1 = {
      updateState: (s, u) => {
        return u.reduce((a, b) => a + b, s)
      },
      initialExtendedState: 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };

    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const expected1 = [
      // [event1, event1, event1]
      [[null], [null], [null]],
      [[null], [null], [-1, "rendered"]],
      [[null], [null], null],
      // [event1, event2, event1]
      [[null], [-1, "rendered"], [null]],
      [[null], [-1, "rendered"], [-2, "rendered"]],
      [[null], [-1, "rendered"], null],
      // // [event1, event3, event1]
      [[null], null, [null]],
      [[null], null, [-1, "rendered"]],
      [[null], null, null],
      // // [event2, event1, event1]
      [[-1, "rendered"], [null], [null]],
      [[-1, "rendered"], [null], [-2, "rendered"]],
      [[-1, "rendered"], [null], null],
      // // [event2, event2, event1]
      [[-1, "rendered"], [-2, "rendered"], [null]],
      [[-1, "rendered"], [-2, "rendered"], [-3, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], null],
      // // [event2, event3, event1]
      [[-1, "rendered"], null, [null]],
      [[-1, "rendered"], null, [-2, "rendered"]],
      [[-1, "rendered"], null, null],
      // // [event3, event1, event1]
      [null, [null], [null]],
      [null, [null], [-1, "rendered"]],
      [null, [null], null],
      // // [event3, event2, event1]
      [null, [-1, "rendered"], [null]],
      [null, [-1, "rendered"], [-2, "rendered"]],
      [null, [-1, "rendered"], null],
      // // [event3, event3, event1]
      [null, null, [null]],
      [null, null, [-1, "rendered"]],
      [null, null, null],
    ];

    it('runs the machine as per the graph', function () {
      cases.forEach((scenario, index) => {
        // Allows to pick some specific index for easier debugging
        // if (index > 20) return
        const fsm = createStateMachine(fsmDef1, {});
        const outputs = scenario.map(fsm);
        assert.deepEqual(outputs, expected1[index], prettyFormat(scenario));
      });
    });


  });

  describe('counter-inc-dec - second guard fail', function () {
    const {getKinglyTransitions, stateYed2KinglyMap, states, events} = computeTransitionsAndStatesFromXmlString(counter_inc_dec);

    // Build the machine
    const guards = {
      "is it": function isIt(s, e, stg) {
        return true
      },
      "is it not": function isItNot(s, e, stg) {
        return false
      },
    };
    const actionFactories = {
      "increment counter": (s, e, stg) => ({updates: [+1], outputs: [s + 1]}),
      "decrement counter": (s, e, stg) => ({updates: [-1], outputs: [s - 1]}),
      "render": (s, e, stg) => ({updates: [], outputs: [`rendered`]}),
      "render some more": (s, e, stg) => ({updates: [], outputs: []}),
    };

    const event1 = {"click inc": void 0};
    const event2 = {"click dec": void 0};
    const eventSpace = [event1, event2, {dummy: 0}];
    const fsmDef1 = {
      updateState: (s, u) => {
        return u.reduce((a, b) => a + b, s)
      },
      initialExtendedState: 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };

    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const expected1 = [
      // [event1, event1, event1]
      [[null], [null], [null]],
      [[null], [null], [-1, "rendered"]],
      [[null], [null], null],
      // [event1, event2, event1]
      [[null], [-1, "rendered"], [null]],
      [[null], [-1, "rendered"], [-2, "rendered"]],
      [[null], [-1, "rendered"], null],
      // // [event1, event3, event1]
      [[null], null, [null]],
      [[null], null, [-1, "rendered"]],
      [[null], null, null],
      // // [event2, event1, event1]
      [[-1, "rendered"], [null], [null]],
      [[-1, "rendered"], [null], [-2, "rendered"]],
      [[-1, "rendered"], [null], null],
      // // [event2, event2, event1]
      [[-1, "rendered"], [-2, "rendered"], [null]],
      [[-1, "rendered"], [-2, "rendered"], [-3, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], null],
      // // [event2, event3, event1]
      [[-1, "rendered"], null, [null]],
      [[-1, "rendered"], null, [-2, "rendered"]],
      [[-1, "rendered"], null, null],
      // // [event3, event1, event1]
      [null, [null], [null]],
      [null, [null], [-1, "rendered"]],
      [null, [null], null],
      // // [event3, event2, event1]
      [null, [-1, "rendered"], [null]],
      [null, [-1, "rendered"], [-2, "rendered"]],
      [null, [-1, "rendered"], null],
      // // [event3, event3, event1]
      [null, null, [null]],
      [null, null, [-1, "rendered"]],
      [null, null, null],
    ];

    it('runs the machine as per the graph', function () {
      cases.forEach((scenario, index) => {
        // Allows to pick some specific index for easier debugging
        // if (index > 20) return
        const fsm = createStateMachine(fsmDef1, {});
        const outputs = scenario.map(fsm);
        assert.deepEqual(outputs, expected1[index], prettyFormat(scenario));
      });
    });
  })
});

describe('Conversion yed to kingly - testing conversion syntax - several transitions per edge', function() {
  const {
    counter,
  } = graphs;
  const settings = {};
  // const settings = {debug: {fakeConsole}};

  describe('counter-inc-dec - guards pass', function() {
    // Should be exactly the same as the hierarchy_history_H case
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(counter);

    // Build the machine
    const guards = {
      "is it": (s, e, stg) => true,
      "is it not": (s, e, stg) => true,
    };
    const actionFactories = {
      "increment counter": (s, e, stg) => ({updates: [+1], outputs:[s+1]}),
      "decrement counter": (s, e, stg) => ({updates: [-1], outputs:[s-1]}),
      "render": (s, e, stg) => ({updates: [], outputs:[`rendered`]}),
      "render some more": (s, e, stg) => ({updates: [], outputs:[]}),
    };

    const event1 = {"click inc": void 0};
    const event2 = {"click dec": void 0};
    const eventSpace = [event1, event2, {dummy:0}];

    const fsmDef1 = {
      updateState: (s, u) => {
        return u.reduce((a,b) => a+b, s)
      },
      initialExtendedState: 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };

    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const expected1 = [
      // [event1, event1, event1]
      [[1, "rendered"], [2, "rendered"], [3, "rendered"]],
      [[1, "rendered"], [2, "rendered"], [1, "rendered"]],
      [[1, "rendered"], [2, "rendered"], null],
      // [event1, event2, event1]
      [[1, "rendered"], [0, "rendered"], [1, "rendered"]],
      [[1, "rendered"], [0, "rendered"], [-1, "rendered"]],
      [[1, "rendered"], [0, "rendered"], null],
      // // [event1, event3, event1]
      [[1, "rendered"], null, [2, "rendered"]],
      [[1, "rendered"], null, [0, "rendered"]],
      [[1, "rendered"], null, null],
      // // [event2, event1, event1]
      [[-1, "rendered"], [0, "rendered"], [1, "rendered"]],
      [[-1, "rendered"], [0, "rendered"], [-1, "rendered"]],
      [[-1, "rendered"], [0, "rendered"], null],
      // // [event2, event2, event1]
      [[-1, "rendered"], [-2, "rendered"], [-1, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], [-3, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], null],
      // // [event2, event3, event1]
      [[-1, "rendered"], null, [0, "rendered"]],
      [[-1, "rendered"], null, [-2, "rendered"]],
      [[-1, "rendered"], null, null],
      // // [event3, event1, event1]
      [null, [1, "rendered"], [2, "rendered"]],
      [null, [1, "rendered"], [0, "rendered"]],
      [null, [1, "rendered"], null],
      // // [event3, event2, event1]
      [null, [-1, "rendered"], [0, "rendered"]],
      [null, [-1, "rendered"], [-2, "rendered"]],
      [null, [-1, "rendered"], null],
      // // [event3, event3, event1]
      [null, null, [1, "rendered"]],
      [null, null, [-1, "rendered"]],
      [null, null, null],
    ];

    // it('runs the machine as per the graph', function() {
    //   cases.forEach((scenario, index) => {
    //     // Allows to pick some specific index for easier debugging
    //     // if (index > 20) return
    //     const fsm = createStateMachine(fsmDef1, settings);
    //     const outputs = scenario.map(fsm);
    //     assert.deepEqual(outputs, expected1[index], prettyFormat(scenario));
    //   });
    // });


  });

  describe('counter-inc-dec - first guard fail', function() {
    // Should be exactly the same as the hierarchy_history_H case
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(counter);
    // Build the machine
    const guards = {
      "is it": (s, e, stg) => false,
      "is it not": (s, e, stg) => true,
    };
    const actionFactories = {
      "increment counter": (s, e, stg) => ({updates: [+1], outputs:[s+1]}),
      "decrement counter": (s, e, stg) => ({updates: [-1], outputs:[s-1]}),
      "render": (s, e, stg) => ({updates: [], outputs:[`rendered`]}),
      "render some more": (s, e, stg) => ({updates: [], outputs:[]}),
    };

    const event1 = {"click inc": void 0};
    const event2 = {"click dec": void 0};
    const eventSpace = [event1, event2, {dummy:0}];

    const fsmDef1 = {
      updateState: (s, u) => {
        return u.reduce((a,b) => a+b, s)
      },
      initialExtendedState: 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };

    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const expected1 = [
      // [event1, event1, event1]
      [[null], [null], [null]],
      [[null], [null], [-1, "rendered"]],
      [[null], [null], null],
      // [event1, event2, event1]
      [[null], [-1, "rendered"], [null]],
      [[null], [-1, "rendered"], [-2, "rendered"]],
      [[null], [-1, "rendered"], null],
      // // [event1, event3, event1]
      [[null], null, [null]],
      [[null], null, [-1, "rendered"]],
      [[null], null, null],
      // // [event2, event1, event1]
      [[-1, "rendered"], [null], [null]],
      [[-1, "rendered"], [null], [-2, "rendered"]],
      [[-1, "rendered"], [null], null],
      // // [event2, event2, event1]
      [[-1, "rendered"], [-2, "rendered"], [null]],
      [[-1, "rendered"], [-2, "rendered"], [-3, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], null],
      // // [event2, event3, event1]
      [[-1, "rendered"], null, [null]],
      [[-1, "rendered"], null, [-2, "rendered"]],
      [[-1, "rendered"], null, null],
      // // [event3, event1, event1]
      [null, [null], [null]],
      [null, [null], [-1, "rendered"]],
      [null, [null], null],
      // // [event3, event2, event1]
      [null, [-1, "rendered"], [null]],
      [null, [-1, "rendered"], [-2, "rendered"]],
      [null, [-1, "rendered"], null],
      // // [event3, event3, event1]
      [null, null, [null]],
      [null, null, [-1, "rendered"]],
      [null, null, null],
    ];

    it('runs the machine as per the graph', function() {
      cases.forEach((scenario, index) => {
        // Allows to pick some specific index for easier debugging
        // if (index > 20) return
        const fsm = createStateMachine(fsmDef1, settings);
        const outputs = scenario.map(fsm);
        assert.deepEqual(outputs, expected1[index], prettyFormat(scenario));
      });
    });


  });

  describe('counter-inc-dec - second guard fail', function() {
    // Should be exactly the same as the hierarchy_history_H case
    const {
      getKinglyTransitions,
      stateYed2KinglyMap,
      states,
      events,
      errors,
    } = computeTransitionsAndStatesFromXmlString(counter);
    // Build the machine
    const guards = {
      "is it": (s, e, stg) => true,
      "is it not": (s, e, stg) => false,
    };
    const actionFactories = {
      "increment counter": (s, e, stg) => ({updates: [+1], outputs:[s+1]}),
      "decrement counter": (s, e, stg) => ({updates: [-1], outputs:[s-1]}),
      "render": (s, e, stg) => ({updates: [], outputs:[`rendered`]}),
      "render some more": (s, e, stg) => ({updates: [], outputs:[]}),
    };

    const event1 = {"click inc": void 0};
    const event2 = {"click dec": void 0};
    const eventSpace = [event1, event2, {dummy:0}];

    const fsmDef1 = {
      updateState: (s, u) => {
        return u.reduce((a,b) => a+b, s)
      },
      initialExtendedState: 0,
      events,
      states,
      transitions: getKinglyTransitions({actionFactories, guards}).transitions,
    };

    const inputSpace = cartesian([0, 1, 2], [0, 1, 2], [0, 1, 2]);
    const cases = inputSpace.map(scenario => {
      return [eventSpace[scenario[0]], eventSpace[scenario[1]], eventSpace[scenario[2]]];
    });
    const expected1 = [
      // [event1, event1, event1]
      [[null], [null], [null]],
      [[null], [null], [-1, "rendered"]],
      [[null], [null], null],
      // [event1, event2, event1]
      [[null], [-1, "rendered"], [null]],
      [[null], [-1, "rendered"], [-2, "rendered"]],
      [[null], [-1, "rendered"], null],
      // // [event1, event3, event1]
      [[null], null, [null]],
      [[null], null, [-1, "rendered"]],
      [[null], null, null],
      // // [event2, event1, event1]
      [[-1, "rendered"], [null], [null]],
      [[-1, "rendered"], [null], [-2, "rendered"]],
      [[-1, "rendered"], [null], null],
      // // [event2, event2, event1]
      [[-1, "rendered"], [-2, "rendered"], [null]],
      [[-1, "rendered"], [-2, "rendered"], [-3, "rendered"]],
      [[-1, "rendered"], [-2, "rendered"], null],
      // // [event2, event3, event1]
      [[-1, "rendered"], null, [null]],
      [[-1, "rendered"], null, [-2, "rendered"]],
      [[-1, "rendered"], null, null],
      // // [event3, event1, event1]
      [null, [null], [null]],
      [null, [null], [-1, "rendered"]],
      [null, [null], null],
      // // [event3, event2, event1]
      [null, [-1, "rendered"], [null]],
      [null, [-1, "rendered"], [-2, "rendered"]],
      [null, [-1, "rendered"], null],
      // // [event3, event3, event1]
      [null, null, [null]],
      [null, null, [-1, "rendered"]],
      [null, null, null],
    ];

    it('runs the machine as per the graph', function() {
      cases.forEach((scenario, index) => {
        // Allows to pick some specific index for easier debugging
        // if (index > 20) return
        const fsm = createStateMachine(fsmDef1, settings);
        const outputs = scenario.map(fsm);
        assert.deepEqual(outputs, expected1[index], prettyFormat(scenario));
      });
    });


  });
});
