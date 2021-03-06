import { createStateMachine } from "kingly";

// Copy-paste help
// For debugging purposes, guards and actions functions should all have a name
// Using natural language sentences for labels in the graph is valid
// guard and action functions name still follow JavaScript rules though
// -----Guards------
/**
 * @param {E} extendedState
 * @param {D} eventData
 * @param {X} settings
 * @returns Boolean
 */
// const guards = {
//   "can move &amp;&amp; won": function (){},
//   "can move &amp;&amp; !won": function (){},
//   "white piece": function (){},
//   "black piece": function (){},
//   "&gt;0 moves": function (){},
// };
// -----Actions------
/**
 * @param {E} extendedState
 * @param {D} eventData
 * @param {X} settings
 * @returns {{updates: U[], outputs: O[]}}
 * (such that updateState:: E -> U[] -> E)
 */
// const actions = {
//   "update clock": function (){},
//   "cancel timer": function (){},
//   "Move": function (){},
//   "restart timer": function (){},
//   "Undo": function (){},
//   "reset and start clock": function (){},
// };
// ----------------
function contains(as, bs) {
  return as.every(function (a) {
    return bs.indexOf(a) > -1;
  });
}

function chain(arrFns, actions) {
  return function chain_(s, ed, stg) {
    return arrFns.reduce(
      function (acc, fn) {
        var r = actions[fn](s, ed, stg);

        return {
          updates: acc.updates.concat(r.updates),
          outputs: acc.outputs.concat(r.outputs),
        };
      },
      { updates: [], outputs: [] }
    );
  };
}

function every(arrFns, guards) {
  return function every_(s, ed, stg) {
    return arrFns.reduce(function (acc, fn) {
      var r = guards[fn](s, ed, stg);

      return r && acc;
    }, true);
  };
}

var NO_OUTPUT = [];
var NO_STATE_UPDATE = [];
var events = ["clock ticked", "paused", "click", "resume", "Undo"];
var states = undefined;
function getKinglyTransitions(record) {
  var aF = record.actionFactories;
  var guards = record.guards;
  var actionList = ["update clock", "cancel timer", "Move", "restart timer", "Undo", "reset and start clock"];
  var predicateList = [
    "can move &amp;&amp; won",
    "can move &amp;&amp; !won",
    "white piece",
    "black piece",
    "&gt;0 moves",
  ];
  if (!contains(actionList, Object.keys(aF))) {
    console.error(
      "Some actions are missing either in the graph, or in the action implementation object! Cf actionFactories (you passed that) vs. actionList (from the graph) below. They must have the same items!"
    );
    console.error({ actionFactories: Object.keys(aF), actionList });
    var passedAndMissingInGraph = Object.keys(aF).filter(function (k) {
      return actionList.indexOf(k) === -1;
    });
    passedAndMissingInGraph.length > 0 &&
      console.error(
        "So the following actions were passed in parameters but do not match any action in the graph! This may happen if you modified the name of an action in the graph, but kept using the older name in the implementation! Please check.",
        passedAndMissingInGraph
      );
    var inGraphButNotImplemented = actionList.filter(function (k) {
      return Object.keys(aF).indexOf(k) === -1;
    });
    inGraphButNotImplemented.length > 0 &&
      console.error(
        "So the following actions declared in the graph are not implemented! Please add the implementation. You can have a look at the comments of the generated fsm file for typing information.",
        inGraphButNotImplemented
      );
    throw new Error(
      "Some actions implementations are missing either in the graph, or in the action implementation object!"
    );
  }
  if (!contains(predicateList, Object.keys(guards))) {
    console.error(
      "Some guards are missing either in the graph, or in the action implementation object! Cf guards (you passed that) vs. predicateList (from the graph) below. They must have the same items!"
    );
    console.error({ guards: Object.keys(guards), predicateList });
    throw new Error("Some guards are missing either in the graph, or in the guard implementation object!");
  }
  const transitions = [
    { from: "n1???Init", event: "", to: "n2???Game on", action: chain([], aF) },
    { from: "n2???Game on", event: "clock ticked", to: "n3???Updating clock", action: chain(["update clock"], aF) },
    { from: "n3???Updating clock", event: "", to: { deep: "n2???Game on" }, action: chain([], aF) },
    { from: "n2???Game on", event: "paused", to: "n4???Paused clock", action: chain(["cancel timer"], aF) },
    {
      from: "n2::n1::n1???Piece selected",
      event: "click",
      guards: [
        { predicate: every(["can move &amp;&amp; won"], guards), to: "n0???Game over", action: chain([], aF) },
        {
          predicate: every(["can move &amp;&amp; !won"], guards),
          to: "n2::n0::n0???Black plays",
          action: chain(["Move"], aF),
        },
        { predicate: every(["white piece"], guards), to: "n2::n1::n1???Piece selected", action: chain([], aF) },
      ],
    },
    {
      from: "n2::n0::n1???Piece selected",
      event: "click",
      guards: [
        { predicate: every(["can move &amp;&amp; won"], guards), to: "n0???Game over", action: chain([], aF) },
        {
          predicate: every(["can move &amp;&amp; !won"], guards),
          to: "n2::n1::n0???White plays",
          action: chain(["Move"], aF),
        },
        { predicate: every(["black piece"], guards), to: "n2::n0::n1???Piece selected", action: chain([], aF) },
      ],
    },
    { from: "n4???Paused clock", event: "resume", to: { deep: "n2???Game on" }, action: chain(["restart timer"], aF) },
    {
      from: "n2::n0???Black turn",
      event: "Undo",
      guards: [
        { predicate: every(["&gt;0 moves"], guards), to: "n2::n1::n0???White plays", action: chain(["Undo"], aF) },
      ],
    },
    {
      from: "n2::n1???White turn",
      event: "Undo",
      guards: [
        { predicate: every(["&gt;0 moves"], guards), to: "n2::n0::n0???Black plays", action: chain(["Undo"], aF) },
      ],
    },
    { from: "n2::n3???Init", event: "", to: "n2::n1???White turn", action: chain(["reset and start clock"], aF) },
    {
      from: "n2::n0::n0???Black plays",
      event: "click",
      guards: [{ predicate: every(["black piece"], guards), to: "n2::n0::n1???Piece selected", action: chain([], aF) }],
    },
    {
      from: "n2::n1::n0???White plays",
      event: "click",
      guards: [{ predicate: every(["white piece"], guards), to: "n2::n1::n1???Piece selected", action: chain([], aF) }],
    },
    { from: "n2::n1::n2???Init", event: "", to: "n2::n1::n0???White plays", action: chain([], aF) },
  ];

  return transitions;
}

function createStateMachineFromGraph(fsmDefForCompile, settings) {
  var updateState = fsmDefForCompile.updateState;
  var initialExtendedState = fsmDefForCompile.initialExtendedState;

  var transitions = getKinglyTransitions({
    actionFactories: fsmDefForCompile.actionFactories,
    guards: fsmDefForCompile.guards,
  });

  var fsm = createStateMachine(
    {
      updateState,
      initialExtendedState,
      states,
      events,
      transitions,
    },
    settings
  );

  return fsm;
}

export { events, states, getKinglyTransitions, createStateMachineFromGraph };
