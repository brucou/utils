const test_yed_conversion_no_compound_actions_guards = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="216.25" y="146.5"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="441.2529296875" width="533.5" x="0.0" y="272.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="533.5" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="1" leftF="1.0" right="1" rightF="1.0" top="0" topF="0.0"/>
            </y:GroupNode>
            <y:GenericGroupNode configuration="PanelNode">
              <y:Geometry height="50.0" width="50.0" x="163.40238095238095" y="451.701171875"/>
              <y:Fill color="#68B0E3" transparent="false"/>
              <y:BorderStyle hasColor="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" borderDistance="0.0" fontFamily="Dialog" fontSize="16" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="23.6015625" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#FFFFFF" verticalTextPosition="bottom" visible="true" width="62.6953125" x="-6.34765625" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:StyleProperties>
                <y:Property class="java.awt.Color" name="headerBackground" value="#68b0e3"/>
              </y:StyleProperties>
              <y:State autoResize="true" closed="true" closedHeight="50.0" closedWidth="50.0"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GenericGroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n1:">
        <node id="n1::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="16.0" y="456.7529296875"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="53.9921875" x="5.00390625" xml:space="preserve" y="13.798828125">Showing
mini UI</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="33.0" y="309.37646484375"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="140.0" y="637.7529296875"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="17.3359375" x="6.33203125" xml:space="preserve" y="5.6494140625">H*</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n3" yfiles.foldertype="group">
          <data key="d4" xml:space="preserve"/>
          <data key="d6">
            <y:ProxyAutoBoundsNode>
              <y:Realizers active="0">
                <y:GroupNode>
                  <y:Geometry height="263.37646484375" width="287.5" x="230.0" y="434.87646484375"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="287.5" x="0.0" xml:space="preserve" y="0.0">big UI collapsed</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="41" leftF="41.0" right="9" rightF="8.5" top="0" topF="0.0"/>
                </y:GroupNode>
                <y:GenericGroupNode configuration="PanelNode">
                  <y:Geometry height="50.0" width="50.0" x="230.0" y="434.87646484375"/>
                  <y:Fill color="#68B0E3" transparent="false"/>
                  <y:BorderStyle hasColor="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" borderDistance="0.0" fontFamily="Dialog" fontSize="16" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="23.6015625" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#FFFFFF" verticalTextPosition="bottom" visible="true" width="117.84375" x="-33.921875" xml:space="preserve" y="0.0">big UI collapsed</y:NodeLabel>
                  <y:StyleProperties>
                    <y:Property class="java.awt.Color" name="headerBackground" value="#68b0e3"/>
                  </y:StyleProperties>
                  <y:State autoResize="true" closed="true" closedHeight="50.0" closedWidth="50.0"/>
                  <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
                </y:GenericGroupNode>
              </y:Realizers>
            </y:ProxyAutoBoundsNode>
          </data>
          <graph edgedefault="directed" id="n1::n3:">
            <node id="n1::n3::n0">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="286.0" y="622.2529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="11.330078125" x="26.3349609375" xml:space="preserve" y="21.1494140625">If</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n1::n3::n1">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="30.0" width="30.0" x="303.0" y="472.2529296875"/>
                  <y:Fill color="#FF6600" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
                  <y:Shape type="ellipse"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n1::n3::n2">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="430.0" y="622.2529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="56.01953125" x="3.990234375" xml:space="preserve" y="21.1494140625">then else</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
          </graph>
        </node>
        <node id="n1::n4">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="16.0" y="622.2529296875"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="46.673828125" x="8.6630859375" xml:space="preserve" y="21.1494140625">dummy</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <node id="n2">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="60.0" width="60.0" x="140.0" y="806.6552734375"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" textColor="#000000" verticalTextPosition="bottom" visible="true" width="50.04296875" x="4.978515625" xml:space="preserve" y="20.6494140625">updating<y:LabelModel><y:SmartNodeLabelModel distance="4.0"/></y:LabelModel><y:ModelParameter><y:SmartNodeLabelModelParameter labelRatioX="0.0" labelRatioY="0.0" nodeRatioX="0.0" nodeRatioY="0.0" offsetX="0.0" offsetY="0.0" upX="0.0" upY="-1.0"/></y:ModelParameter></y:NodeLabel>
          <y:Shape type="diamond"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n3" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="554.62939453125" width="177.0" x="593.5" y="-37.37646484375"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="177.0" x="0.0" xml:space="preserve" y="0.0">Group 3</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="82" leftF="82.0" right="1" rightF="1.0" top="0" topF="0.0"/>
            </y:GroupNode>
            <y:GenericGroupNode configuration="PanelNode">
              <y:Geometry height="50.0" width="50.0" x="-25.0" y="-25.0"/>
              <y:Fill color="#68B0E3" transparent="false"/>
              <y:BorderStyle hasColor="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" borderDistance="0.0" fontFamily="Dialog" fontSize="16" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="23.6015625" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#FFFFFF" verticalTextPosition="bottom" visible="true" width="61.8125" x="-5.90625" xml:space="preserve" y="0.0">Group 3</y:NodeLabel>
              <y:StyleProperties>
                <y:Property class="java.awt.Color" name="headerBackground" value="#68b0e3"/>
              </y:StyleProperties>
              <y:State autoResize="true" closed="true" closedHeight="50.0" closedWidth="50.0"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GenericGroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n3:">
        <node id="n3::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="690.5" y="131.0"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="50.01953125" x="6.990234375" xml:space="preserve" y="13.798828125">ran kan 
kan</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n3::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="707.5" y="0.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n3::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="690.5" y="293.87646484375"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="46.01171875" x="8.994140625" xml:space="preserve" y="13.798828125">pa dam
dam</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n3::n3">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="707.5" y="472.2529296875"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="8.6669921875" xml:space="preserve" y="5.6494140625">H</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="-35.5" ty="-220.62646484375"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="52.0234375" x="-54.0234375" xml:space="preserve" y="10.125">
/ activate<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-81.75" sy="220.62646484375" tx="15.0" ty="-14.96875"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="107.39453125" x="-109.39453125" xml:space="preserve" y="10.125">trace sent
/ update trace store<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e0" source="n3::n1" target="n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="-6.0" y="10.125">
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e1" source="n3::n0" target="n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="-15.25" tx="-16.0" ty="-30.5">
            <y:Point x="650.0" y="146.25"/>
            <y:Point x="650.0" y="90.5"/>
            <y:Point x="706.5" y="90.5"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="60.009765625" x="-54.77783203125" xml:space="preserve" y="-20.701171875">stay [isOk]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e2" source="n3::n0" target="n3::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="left" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="285.232421875" x="-65.921875" xml:space="preserve" y="2.7744140625">| stay [not(isOk, shown)] / deactivate, restore session
| trace sent<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e3" source="n3::n2" target="n3::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-15.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="-6.0" y="10.125">
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n3::n0" target="n1::n3::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="15.25" tx="0.0" ty="-30.5">
            <y:Point x="609.5" y="176.75"/>
            <y:Point x="609.5" y="232.0"/>
            <y:Point x="462.0" y="232.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="7.333984375" x="-17.41943359375" xml:space="preserve" y="2.0">/<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e3" source="n3::n2" target="n1::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="0.0" tx="128.25" ty="-131.688232421875">
            <y:Point x="609.5" y="324.37646484375"/>
            <y:Point x="609.5" y="394.87646484375"/>
            <y:Point x="502.0" y="394.87646484375"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="10.66796875" x="-20.75341796875" xml:space="preserve" y="-20.701171875">[]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e4" source="n2" target="n1::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-15.0" sy="-14.96875" tx="0.0" ty="15.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="28.0" y="-89.94482421875">
            <y:LabelModel>
              <y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/>
            </y:LabelModel>
            <y:ModelParameter>
              <y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/>
            </y:ModelParameter>
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e0" source="n1::n0" target="n1::n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="21.333333333333332" sy="30.5" tx="-32.0" ty="0.0">
            <y:Point x="69.33333333333333" y="582.2529296875"/>
            <y:Point x="246.0" y="582.2529296875"/>
            <y:Point x="246.0" y="652.7529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="134.740234375" x="-136.74023691813153" xml:space="preserve" y="10.125">[shown] / expand clicked<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e1" source="n1::n0" target="n1::n4">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="17.3359375" x="-19.3359375" xml:space="preserve" y="42.8994140625">[] /<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="2.0" distanceToCenter="false" position="right" ratio="0.5" segment="-1"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e2" source="n1::n1" target="n1::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.037109375" x="-94.037109375" xml:space="preserve" y="10.125">/ restore session<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e3" source="n1::n3::n0" target="n1::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-21.333333333333332" sy="-30.5" tx="32.0" ty="0.0">
            <y:Point x="296.6666666666667" y="542.2529296875"/>
            <y:Point x="215.0" y="542.2529296875"/>
            <y:Point x="215.0" y="487.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="91.3515625" x="2.0000101725260038" xml:space="preserve" y="-28.787109375">minimize clicked<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::n3::e0" source="n1::n3::n1" target="n1::n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="66.70703125" x="-68.70703125" xml:space="preserve" y="10.125">[only guard]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::n3::e1" source="n1::n3::n1" target="n1::n3::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="15.0" sy="0.0" tx="-32.0" ty="0.0">
            <y:Point x="390.0" y="487.2529296875"/>
            <y:Point x="390.0" y="652.7529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="110.740234375" x="59.0" xml:space="preserve" y="73.3994140625">[another only guard]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>

`

const counter_inc_dec = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="217.73650793650793" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="184.73650793650793" y="50.0"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="24.671875" x="19.6640625" xml:space="preserve" y="21.1494140625">idle</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="16.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="0.0" tx="-16.0" ty="-30.5">
            <y:Point x="5.500179811507934" y="80.5"/>
            <y:Point x="5.500179811507934" y="15.1494140625"/>
            <y:Point x="200.73650793650793" y="15.1494140625"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="left" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="312.583984375" x="-238.1163973369296" xml:space="preserve" y="-82.05175781249997">| click inc [is it, is it not] / increment counter, render
| click dec / decrement counter, render, render some more<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`

// Grap visualizations are as `.png` in the same directory as the `.graphml`
// Both are in the `/tests/graphs` directory
const top_level_conditional_init = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="134.0" y="123.40234375000003"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="49.33984375" x="7.330078125" xml:space="preserve" y="21.1494140625">Number</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="151.0" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="10.0" y="123.40234375000003"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="36.00390625" x="13.998046875" xml:space="preserve" y="21.1494140625">Other</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n3">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="134.0" y="263.103515625"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="34.0" x="15.0" xml:space="preserve" y="21.1494140625">Done</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <edge id="e0" source="n1" target="n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="62.013671875" x="2.0" xml:space="preserve" y="11.631870117187496">[isNumber]<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="1.9999999999999964" distanceToCenter="false" position="left" ratio="0.10249999999999994" segment="-1"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-15.0" sy="0.0" tx="0.0" ty="-30.5">
            <y:Point x="42.0" y="15.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="86.6875" x="-96.54548003845801" xml:space="preserve" y="-20.701171875">[not(isNumber)]<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="2.0" distanceToCenter="false" position="right" ratio="0.08009034581692763" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n0" target="n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="118.064453125" x="-120.064453125" xml:space="preserve" y="10.125000000000028">continue / logNumber<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="2.0000000000000036" distanceToCenter="false" position="right" ratio="0.10250000000000006" segment="-1"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e3" source="n2" target="n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-32.0" ty="0.0">
            <y:Point x="42.0" y="293.603515625"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="105.396484375" x="-107.396484375" xml:space="preserve" y="10.125000000000057">continue / logOther<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="1.9999999999999964" distanceToCenter="false" position="right" ratio="0.054032349398210604" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim()

const no_hierarchy_events_eventless = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="207.060546875" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="190.060546875" y="84.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">A</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="60.060546875" y="264.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n3">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="170.060546875" y="264.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n4">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="170.060546875" y="414.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="-4.0" y="28.0">
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-21.333333333333343" sy="30.5" tx="0.0" ty="-30.5">
            <y:Point x="200.72721354166666" y="165.0"/>
            <y:Point x="92.060546875" y="165.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.060546875" x="-200.7272186279297" xml:space="preserve" y="55.14941406250006">event1 / logAtoB<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n1" target="n3">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5">
            <y:Point x="222.060546875" y="235.0"/>
            <y:Point x="202.060546875" y="235.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-92.72265625" xml:space="preserve" y="55.14941406250003">event2 / logAtoC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e3" source="n2" target="n4">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-21.333333333333343" ty="-30.5">
            <y:Point x="92.060546875" y="385.0"/>
            <y:Point x="180.72721354166666" y="385.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-46.361328125" xml:space="preserve" y="25.1494140625">event2 / logBtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e4" source="n3" target="n4">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="93.384765625" x="-46.6923828125" xml:space="preserve" y="25.1494140625">event1 / logCtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e5" source="n4" target="n1">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="21.333333333333343" sy="-30.5" tx="21.333333333333314" ty="30.5">
            <y:Point x="223.39388020833334" y="385.0"/>
            <y:Point x="352.060546875" y="385.0"/>
            <y:Point x="352.060546875" y="165.0"/>
            <y:Point x="243.39388020833331" y="165.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="156.748046875" x="50.29264831542969" xml:space="preserve" y="-123.82177734374994">[shouldReturnToA] / logDtoA<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim()

const no_hierarchy_eventful_eventless_guards = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="504.44140625000006" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="487.44140625000006" y="84.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.666992187499943" xml:space="preserve" y="21.1494140625">A</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="167.44140625000006" y="354.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="42.677734375" x="10.6611328125" xml:space="preserve" y="21.1494140625">Temp1</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n3">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="487.44140625000006" y="354.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="42.677734375" x="10.6611328125" xml:space="preserve" y="21.1494140625">Temp2</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n4">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="697.44140625" y="354.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="34.0" x="15.0" xml:space="preserve" y="21.1494140625">Done</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="-4.0" y="28.0">
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-26.666666666666686" sy="30.5" tx="-16.0" ty="-30.5">
            <y:Point x="492.77473958333337" y="165.0"/>
            <y:Point x="179.44140625000006" y="165.0"/>
            <y:Point x="179.44140625000006" y="275.0"/>
            <y:Point x="183.44140625000006" y="275.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="179.44140625" x="-492.7747497558594" xml:space="preserve" y="95.1494140625">event [condition1] / logAtoTemp1<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n1" target="n3">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-5.333333333333371" sy="30.5" tx="-16.0" ty="-30.5">
            <y:Point x="514.1080729166667" y="205.0"/>
            <y:Point x="479.44140625000006" y="205.0"/>
            <y:Point x="479.44140625000006" y="325.0"/>
            <y:Point x="503.44140625000006" y="325.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="179.44140625" x="-214.10809326171864" xml:space="preserve" y="145.14941406250006">event [condition2] / logAtoTemp2<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e3" source="n2" target="n1">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="-30.5" tx="-16.0" ty="30.5">
            <y:Point x="215.44140625000006" y="275.0"/>
            <y:Point x="219.44140625000006" y="275.0"/>
            <y:Point x="219.44140625000006" y="185.0"/>
            <y:Point x="503.44140625000006" y="185.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="82.041015625" x="4.000000000000057" xml:space="preserve" y="-113.811767578125">/ logTemp1toA<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e4" source="n1" target="n4">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="30.5" tx="-16.0" ty="-30.5">
            <y:Point x="535.44140625" y="185.0"/>
            <y:Point x="669.44140625" y="185.0"/>
            <y:Point x="669.44140625" y="325.0"/>
            <y:Point x="713.44140625" y="325.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="170.78125" x="48.609375" xml:space="preserve" y="145.1494140625001">event [condition3] / logAtoDone<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e5" source="n3" target="n1">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="-30.5" tx="5.333333333333371" ty="30.5">
            <y:Point x="535.44140625" y="275.0"/>
            <y:Point x="549.44140625" y="275.0"/>
            <y:Point x="549.44140625" y="205.0"/>
            <y:Point x="524.7747395833335" y="205.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="82.041015625" x="-27.0205078125" xml:space="preserve" y="-113.811767578125">/ logTemp2toA<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e6" source="n4" target="n1">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="-30.5" tx="26.66666666666663" ty="30.5">
            <y:Point x="745.44140625" y="325.0"/>
            <y:Point x="789.44140625" y="325.0"/>
            <y:Point x="789.44140625" y="165.0"/>
            <y:Point x="546.1080729166667" y="165.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="104.0546875" x="-8.02734375" xml:space="preserve" y="-113.82177734375">[shouldReturnToA]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const top_level_conditional_init_with_hierarchy = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="115.0" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d5"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="480.0" width="260.0" x="0.0" y="65.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="260.0" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="5" bottomF="4.5" left="23" leftF="23.0" right="33" rightF="33.0" top="8" topF="7.62353515625"/>
            </y:GroupNode>
            <y:GroupNode>
              <y:Geometry height="50.0" width="50.0" x="283.0" y="177.62353515625"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n1:">
        <node id="n1::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="38.0" y="234.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="49.33984375" x="7.330078125" xml:space="preserve" y="21.1494140625">Number</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="115.0" y="110.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="148.0" y="234.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="36.00390625" x="13.998046875" xml:space="preserve" y="21.1494140625">Other</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n3">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="98.0" y="464.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="34.0" x="15.0" xml:space="preserve" y="21.1494140625">Done</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-240.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e0" source="n1::n0" target="n1::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-16.0" ty="-30.5">
            <y:Point x="70.0" y="315.0"/>
            <y:Point x="90.0" y="315.0"/>
            <y:Point x="90.0" y="435.0"/>
            <y:Point x="114.0" y="435.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="118.064453125" x="-39.0322265625" xml:space="preserve" y="55.1494140625">continue / logNumber<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e1" source="n1::n1" target="n1::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-7.5" sy="12.96875" tx="0.0" ty="-30.5">
            <y:Point x="122.5" y="165.0"/>
            <y:Point x="70.0" y="165.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="62.013671875" x="-83.50683593749997" xml:space="preserve" y="62.654266357421875">[isNumber]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e2" source="n1::n1" target="n1::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="7.5" sy="12.96875" tx="0.0" ty="-30.5">
            <y:Point x="137.5" y="165.0"/>
            <y:Point x="180.0" y="165.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="86.6875" x="-0.84375" xml:space="preserve" y="62.654266357421875">[not(isNumber)]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e3" source="n1::n2" target="n1::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="16.0" ty="-30.5">
            <y:Point x="180.0" y="435.0"/>
            <y:Point x="146.0" y="435.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="105.396484375" x="-52.6982421875" xml:space="preserve" y="105.1494140625">continue / logOther<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const hierarchy_conditional_init = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="90.0" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="73.0" y="54.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">A</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d5"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="280.0" width="230.0" x="15.0" y="195.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="230.0" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="5" bottomF="4.5" left="13" leftF="13.0" right="13" rightF="13.0" top="8" topF="7.62353515625"/>
            </y:GroupNode>
            <y:GroupNode>
              <y:Geometry height="50.0" width="50.0" x="283.0" y="177.62353515625"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n2:">
        <node id="n2::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="43.0" y="394.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="110.0" y="240.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="153.0" y="394.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e0" source="n2::n1" target="n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-7.5" sy="12.96875" tx="0.0" ty="-30.5">
            <y:Point x="117.5" y="295.0"/>
            <y:Point x="75.0" y="295.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="62.013671875" x="-73.5068359375" xml:space="preserve" y="55.303680419921875">[isNumber]
/ logAtoB<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e1" source="n2::n1" target="n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="7.5" sy="12.96875" tx="0.0" ty="-30.5">
            <y:Point x="132.5" y="295.0"/>
            <y:Point x="175.0" y="295.0"/>
            <y:Point x="175.0" y="365.0"/>
            <y:Point x="185.0" y="365.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="86.6875" x="-0.84375" xml:space="preserve" y="55.303680419921875">[not(isNumber)]
/ logAtoC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-25.0" ty="-140.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="40.029296875" x="-20.0146484375" xml:space="preserve" y="25.1494140625">event1<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const deep_hierarchy_conditional_automatic_init_event_eventless = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="295.5" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="278.5" y="54.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">A</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="1410.0" width="610.0" x="30.5" y="195.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="610.0" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="8" topF="7.62353515625"/>
            </y:GroupNode>
            <y:GroupNode>
              <y:Geometry height="50.0" width="50.0" x="40.0" y="220.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n2:">
        <node id="n2::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="298.5" y="334.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="315.5" y="240.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n2" yfiles.foldertype="group">
          <data key="d4" xml:space="preserve"/>
          <data key="d6">
            <y:ProxyAutoBoundsNode>
              <y:Realizers active="0">
                <y:GroupNode>
                  <y:Geometry height="1140.0" width="550.0" x="60.5" y="435.0"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="550.0" x="0.0" xml:space="preserve" y="0.0">Group 2</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                  <y:BorderInsets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="8" topF="7.62353515625"/>
                </y:GroupNode>
                <y:GroupNode>
                  <y:Geometry height="50.0" width="50.0" x="283.0" y="177.62353515625"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
                </y:GroupNode>
              </y:Realizers>
            </y:ProxyAutoBoundsNode>
          </data>
          <graph edgedefault="directed" id="n2::n2:">
            <node id="n2::n2::n0">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="30.0" width="30.0" x="315.5" y="480.0"/>
                  <y:Fill color="#FF6600" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
                  <y:Shape type="ellipse"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n2::n2::n1" yfiles.foldertype="group">
              <data key="d4" xml:space="preserve"/>
              <data key="d6">
                <y:ProxyAutoBoundsNode>
                  <y:Realizers active="0">
                    <y:GroupNode>
                      <y:Geometry height="950.0" width="490.0" x="90.5" y="595.0"/>
                      <y:Fill color="#F5F5F5" transparent="false"/>
                      <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                      <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="490.0" x="0.0" xml:space="preserve" y="0.0">Group 3</y:NodeLabel>
                      <y:Shape type="roundrectangle"/>
                      <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                      <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                      <y:BorderInsets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="8" topF="7.62353515625"/>
                    </y:GroupNode>
                    <y:GroupNode>
                      <y:Geometry height="50.0" width="50.0" x="150.0" y="495.0"/>
                      <y:Fill color="#F5F5F5" transparent="false"/>
                      <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                      <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
                      <y:Shape type="roundrectangle"/>
                      <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                      <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
                      <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
                    </y:GroupNode>
                  </y:Realizers>
                </y:ProxyAutoBoundsNode>
              </data>
              <graph edgedefault="directed" id="n2::n2::n1:">
                <node id="n2::n2::n1::n0">
                  <data key="d6">
                    <y:ShapeNode>
                      <y:Geometry height="61.0" width="64.0" x="268.5" y="784.5"/>
                      <y:Fill color="#FFCC00" transparent="false"/>
                      <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                      <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
                      <y:Shape type="roundrectangle"/>
                    </y:ShapeNode>
                  </data>
                </node>
                <node id="n2::n2::n1::n1">
                  <data key="d6">
                    <y:ShapeNode>
                      <y:Geometry height="30.0" width="30.0" x="335.5" y="640.0"/>
                      <y:Fill color="#FF6600" transparent="false"/>
                      <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                      <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
                      <y:Shape type="ellipse"/>
                    </y:ShapeNode>
                  </data>
                </node>
                <node id="n2::n2::n1::n2">
                  <data key="d6">
                    <y:ShapeNode>
                      <y:Geometry height="61.0" width="64.0" x="378.5" y="784.5"/>
                      <y:Fill color="#FFCC00" transparent="false"/>
                      <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                      <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
                      <y:Shape type="roundrectangle"/>
                    </y:ShapeNode>
                  </data>
                </node>
                <node id="n2::n2::n1::n3" yfiles.foldertype="group">
                  <data key="d4" xml:space="preserve"/>
                  <data key="d6">
                    <y:ProxyAutoBoundsNode>
                      <y:Realizers active="0">
                        <y:GroupNode>
                          <y:Geometry height="590.0" width="430.0" x="120.5" y="925.0"/>
                          <y:Fill color="#F5F5F5" transparent="false"/>
                          <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                          <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="430.0" x="0.0" xml:space="preserve" y="0.0">Group 4</y:NodeLabel>
                          <y:Shape type="roundrectangle"/>
                          <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                          <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                          <y:BorderInsets bottom="5" bottomF="4.5" left="13" leftF="13.0" right="123" rightF="123.0" top="8" topF="7.62353515625"/>
                        </y:GroupNode>
                        <y:GroupNode>
                          <y:Geometry height="50.0" width="50.0" x="0.0" y="60.0"/>
                          <y:Fill color="#F5F5F5" transparent="false"/>
                          <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                          <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
                          <y:Shape type="roundrectangle"/>
                          <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                          <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
                          <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
                        </y:GroupNode>
                      </y:Realizers>
                    </y:ProxyAutoBoundsNode>
                  </data>
                  <graph edgedefault="directed" id="n2::n2::n1::n3:">
                    <node id="n2::n2::n1::n3::n0">
                      <data key="d6">
                        <y:ShapeNode>
                          <y:Geometry height="61.0" width="64.0" x="348.5" y="1024.5"/>
                          <y:Fill color="#FFCC00" transparent="false"/>
                          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">A</y:NodeLabel>
                          <y:Shape type="roundrectangle"/>
                        </y:ShapeNode>
                      </data>
                    </node>
                    <node id="n2::n2::n1::n3::n1">
                      <data key="d6">
                        <y:ShapeNode>
                          <y:Geometry height="61.0" width="64.0" x="148.5" y="1204.5"/>
                          <y:Fill color="#FFCC00" transparent="false"/>
                          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
                          <y:Shape type="roundrectangle"/>
                        </y:ShapeNode>
                      </data>
                    </node>
                    <node id="n2::n2::n1::n3::n2">
                      <data key="d6">
                        <y:ShapeNode>
                          <y:Geometry height="61.0" width="64.0" x="258.5" y="1204.5"/>
                          <y:Fill color="#FFCC00" transparent="false"/>
                          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
                          <y:Shape type="roundrectangle"/>
                        </y:ShapeNode>
                      </data>
                    </node>
                    <node id="n2::n2::n1::n3::n3">
                      <data key="d6">
                        <y:ShapeNode>
                          <y:Geometry height="61.0" width="64.0" x="258.5" y="1434.5"/>
                          <y:Fill color="#FFCC00" transparent="false"/>
                          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
                          <y:Shape type="roundrectangle"/>
                        </y:ShapeNode>
                      </data>
                    </node>
                    <node id="n2::n2::n1::n3::n4">
                      <data key="d6">
                        <y:ShapeNode>
                          <y:Geometry height="30.0" width="30.0" x="365.5" y="970.0"/>
                          <y:Fill color="#FF6600" transparent="false"/>
                          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
                          <y:Shape type="ellipse"/>
                        </y:ShapeNode>
                      </data>
                    </node>
                  </graph>
                </node>
              </graph>
            </node>
          </graph>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-25.0" ty="-705.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="124.08203125" x="-62.041015625" xml:space="preserve" y="25.1494140625">event1 / logAtoGroup1<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e0" source="n2::n0" target="n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-5.0" ty="-570.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e1" source="n2::n1" target="n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="116.740234375" x="-58.3701171875" xml:space="preserve" y="30.6494140625">/ logGroup1toGroup2<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::e0" source="n2::n2::n0" target="n2::n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="-5.0" ty="-475.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="113.40625" x="-56.703125" xml:space="preserve" y="30.6494140625">/logGroup2toGroup3<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::e0" source="n2::n2::n1::n0" target="n2::n2::n1::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-35.0" ty="-295.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="164.107421875" x="-82.0537109375" xml:space="preserve" y="25.1494140625">event1 / logGroup3BtoGroup4<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::e1" source="n2::n2::n1::n1" target="n2::n2::n1::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-7.5" sy="12.96875" tx="0.0" ty="-30.5">
            <y:Point x="343.0" y="695.0"/>
            <y:Point x="300.5" y="695.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="84.71875" x="-84.859375" xml:space="preserve" y="65.3037109375">[isNumber]
/ logGroup3toB<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::e2" source="n2::n2::n1::n1" target="n2::n2::n1::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="7.5" sy="12.96875" tx="0.0" ty="-30.5">
            <y:Point x="358.0" y="695.0"/>
            <y:Point x="410.5" y="695.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="86.6875" x="9.15625" xml:space="preserve" y="65.3037109375">[not(isNumber)]
/ logGroup3toC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::n3::e0" source="n2::n2::n1::n3::n0" target="n2::n2::n1::n3::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-21.333333333333314" sy="30.5" tx="0.0" ty="-30.5">
            <y:Point x="359.1666666666667" y="1105.0"/>
            <y:Point x="250.5" y="1105.0"/>
            <y:Point x="250.5" y="1175.0"/>
            <y:Point x="180.5" y="1175.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.060546875" x="-201.65516281147268" xml:space="preserve" y="57.933292389496046">event1 / logAtoB<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::n3::e1" source="n2::n2::n1::n3::n0" target="n2::n2::n1::n3::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5">
            <y:Point x="380.5" y="1175.0"/>
            <y:Point x="290.5" y="1175.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-92.72265625" xml:space="preserve" y="55.1494140625">event2 / logAtoC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::n3::e2" source="n2::n2::n1::n3::n1" target="n2::n2::n1::n3::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-21.333333333333314" ty="-30.5">
            <y:Point x="180.5" y="1285.0"/>
            <y:Point x="200.5" y="1285.0"/>
            <y:Point x="200.5" y="1405.0"/>
            <y:Point x="269.1666666666667" y="1405.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-26.361328125" xml:space="preserve" y="55.1494140625">event2 / logBtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::n3::e3" source="n2::n2::n1::n3::n2" target="n2::n2::n1::n3::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="93.384765625" x="-46.6923828125" xml:space="preserve" y="105.1494140625">event1 / logCtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::n3::e4" source="n2::n2::n1::n3::n3" target="n2::n2::n1::n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="21.333333333333314" sy="-30.5" tx="21.333333333333314" ty="30.5">
            <y:Point x="311.8333333333333" y="1405.0"/>
            <y:Point x="440.5" y="1405.0"/>
            <y:Point x="440.5" y="1105.0"/>
            <y:Point x="401.8333333333333" y="1105.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="156.748046875" x="50.292633056640625" xml:space="preserve" y="-203.82177734375">[shouldReturnToA] / logDtoA<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::n1::n3::e5" source="n2::n2::n1::n3::n4" target="n2::n2::n1::n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const hierarchy_history_H_star = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="392.0" y="75.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="75.0" y="589.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="640.0" width="210.0" x="267.0" y="140.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="210.0" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="20" leftF="20.0" right="23" rightF="23.0" top="2" topF="2.12353515625"/>
            </y:GroupNode>
            <y:GroupNode>
              <y:Geometry height="50.0" width="50.0" x="192.0" y="65.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n2:">
        <node id="n2::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="375.0" y="179.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="305.0" y="359.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="325.0" y="509.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n3">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="302.0" y="735.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="17.3359375" x="6.33203125" xml:space="preserve" y="5.6494140625">H*</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n4">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="302.0" y="195.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n2" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-105.0" sy="160.0" tx="32.0" ty="0.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="46.697265625" x="-73.302734375" xml:space="preserve" y="-9.3505859375">event3 /<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-15.0">
            <y:Point x="107.0" y="710.0"/>
            <y:Point x="317.0" y="710.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="98.716796875" x="-49.3583984375" xml:space="preserve" y="25.1494140625">/ logDtoGroup1H*<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n0" target="n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e0" source="n2::n0" target="n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="30.5" tx="16.0" ty="-30.5">
            <y:Point x="423.0" y="260.0"/>
            <y:Point x="427.0" y="260.0"/>
            <y:Point x="427.0" y="480.0"/>
            <y:Point x="373.0" y="480.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-42.361328125" xml:space="preserve" y="145.1494140625">event1 / logBtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e1" source="n2::n0" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-16.0" sy="30.5" tx="16.0" ty="-30.5">
            <y:Point x="391.0" y="260.0"/>
            <y:Point x="377.0" y="260.0"/>
            <y:Point x="377.0" y="330.0"/>
            <y:Point x="353.0" y="330.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-60.361328125" xml:space="preserve" y="55.1494140625">event2 / logBtoC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e2" source="n2::n1" target="n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-16.0" ty="-30.5">
            <y:Point x="337.0" y="480.0"/>
            <y:Point x="341.0" y="480.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="93.384765625" x="-46.6923828125" xml:space="preserve" y="25.1494140625">event1 / logCtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e3" source="n2::n4" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="-16.0" ty="-30.5">
            <y:Point x="317.0" y="330.0"/>
            <y:Point x="321.0" y="330.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="85.380859375" x="-72.6904296875" xml:space="preserve" y="50.32470703125">/ logGroup1toC<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>

`.trim();

const deep_hierarchy_history_H_star = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="371.0" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="55.0" y="641.7529296875"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.00390625" x="25.998046875" xml:space="preserve" y="21.1494140625">E</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="495.7529296875" width="465.5" x="0.5" y="80.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="465.5" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="35" bottomF="35.0" left="73" leftF="72.5" right="1" rightF="1.0" top="0" topF="0.0"/>
            </y:GroupNode>
            <y:GroupNode>
              <y:Geometry height="50.0" width="50.0" x="192.0" y="65.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n2:">
        <node id="n2::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="354.0" y="117.37646484375"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="172.5" y="209.37646484375"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n2" yfiles.foldertype="group">
          <data key="d4" xml:space="preserve"/>
          <data key="d6">
            <y:ProxyAutoBoundsNode>
              <y:Realizers active="0">
                <y:GroupNode>
                  <y:Geometry height="205.37646484375" width="261.5" x="188.5" y="320.37646484375"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="261.5" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="70" leftF="69.5" right="1" rightF="1.0" top="0" topF="0.0"/>
                </y:GroupNode>
                <y:GroupNode>
                  <y:Geometry height="50.0" width="50.0" x="142.5" y="415.0"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
                </y:GroupNode>
              </y:Realizers>
            </y:ProxyAutoBoundsNode>
          </data>
          <graph edgedefault="directed" id="n2::n2:">
            <node id="n2::n2::n0">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="273.0" y="449.7529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n2::n2::n1">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="30.0" width="30.0" x="290.0" y="373.2529296875"/>
                  <y:Fill color="#FF6600" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
                  <y:Shape type="ellipse"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n2::n2::n2">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="370.0" y="357.7529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
          </graph>
        </node>
        <node id="n2::n3">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="173.5" y="132.87646484375"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n4">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="88.0" y="224.87646484375"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="17.3359375" x="6.33203125" xml:space="preserve" y="5.6494140625">H*</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n2" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-181.75" sy="247.87646484375" tx="-16.0" ty="-30.5">
            <y:Point x="51.5" y="626.2529296875"/>
            <y:Point x="71.0" y="626.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="129.4140625" x="-53.35644531250001" xml:space="preserve" y="15.000207713293662">event3 / logGroup1toH*<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2::n4">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="-30.5" tx="0.0" ty="15.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n0" target="n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e0" source="n2::n0" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-16.0" sy="30.5" tx="16.0" ty="-30.5">
            <y:Point x="370.0" y="193.87646484375"/>
            <y:Point x="220.5" y="193.87646484375"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-94.72265625" xml:space="preserve" y="10.125">event2 / logBtoC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e1" source="n2::n0" target="n2::n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-35.0107421875" xml:space="preserve" y="15.2119140625">event1 / logBtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e2" source="n2::n1" target="n2::n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-21.333333333333314" ty="-30.5">
            <y:Point x="204.5" y="434.2529296875"/>
            <y:Point x="283.6666666666667" y="434.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="54.021484375" x="-74.0361328125" xml:space="preserve" y="10.125">/ logCtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::e0" source="n2::n2::n1" target="n2::n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="85.380859375" x="-72.6904296875" xml:space="preserve" y="13.8994140625">/ logGroup1toD<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e3" source="n2::n3" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="-16.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="85.380859375" x="-72.6904296875" xml:space="preserve" y="13.8994140625">/ logGroup1toC<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::e1" source="n2::n2::n2" target="n2::n2::n0">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="21.333333333333336" ty="-30.5">
            <y:Point x="402.0" y="434.2529296875"/>
            <y:Point x="326.3333333333333" y="434.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="93.384765625" x="-73.66666666666669" xml:space="preserve" y="6.923676388789772">event1 / logDtoD<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="2.0" distanceToCenter="false" position="left" ratio="0.09990481629545021" segment="-1"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const deep_hierarchy_history_H = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="371.0" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="55.0" y="641.7529296875"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.00390625" x="25.998046875" xml:space="preserve" y="21.1494140625">E</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="495.7529296875" width="465.5" x="0.5" y="80.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="465.5" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="35" bottomF="35.0" left="73" leftF="72.5" right="1" rightF="1.0" top="0" topF="0.0"/>
            </y:GroupNode>
            <y:GroupNode>
              <y:Geometry height="50.0" width="50.0" x="192.0" y="65.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n2:">
        <node id="n2::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="354.0" y="117.37646484375"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="172.5" y="209.37646484375"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n2" yfiles.foldertype="group">
          <data key="d4" xml:space="preserve"/>
          <data key="d6">
            <y:ProxyAutoBoundsNode>
              <y:Realizers active="0">
                <y:GroupNode>
                  <y:Geometry height="205.37646484375" width="261.5" x="188.5" y="320.37646484375"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="261.5" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="70" leftF="69.5" right="1" rightF="1.0" top="0" topF="0.0"/>
                </y:GroupNode>
                <y:GroupNode>
                  <y:Geometry height="50.0" width="50.0" x="142.5" y="415.0"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
                </y:GroupNode>
              </y:Realizers>
            </y:ProxyAutoBoundsNode>
          </data>
          <graph edgedefault="directed" id="n2::n2:">
            <node id="n2::n2::n0">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="273.0" y="449.7529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n2::n2::n1">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="30.0" width="30.0" x="290.0" y="373.2529296875"/>
                  <y:Fill color="#FF6600" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
                  <y:Shape type="ellipse"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n2::n2::n2">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="370.0" y="357.7529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
          </graph>
        </node>
        <node id="n2::n3">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="173.5" y="132.87646484375"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n4">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="88.0" y="224.87646484375"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="8.6669921875" xml:space="preserve" y="5.6494140625">H</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n2" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-181.75" sy="247.87646484375" tx="-16.0" ty="-30.5">
            <y:Point x="51.5" y="626.2529296875"/>
            <y:Point x="71.0" y="626.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="124.744140625" x="-51.02148437500001" xml:space="preserve" y="15.000207713293662">event3 / logGroup1toH<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2::n4">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="-30.5" tx="0.0" ty="15.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n0" target="n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e0" source="n2::n0" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-16.0" sy="30.5" tx="16.0" ty="-30.5">
            <y:Point x="370.0" y="193.87646484375"/>
            <y:Point x="220.5" y="193.87646484375"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-94.72265625" xml:space="preserve" y="10.125">event2 / logBtoC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e1" source="n2::n0" target="n2::n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-35.0107421875" xml:space="preserve" y="15.2119140625">event1 / logBtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e2" source="n2::n1" target="n2::n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-21.333333333333314" ty="-30.5">
            <y:Point x="204.5" y="434.2529296875"/>
            <y:Point x="283.6666666666667" y="434.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="54.021484375" x="-74.0361328125" xml:space="preserve" y="10.125">/ logCtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::e0" source="n2::n2::n1" target="n2::n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="85.380859375" x="-72.6904296875" xml:space="preserve" y="13.8994140625">/ logGroup1toD<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e3" source="n2::n3" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="-16.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="85.380859375" x="-72.6904296875" xml:space="preserve" y="13.8994140625">/ logGroup1toC<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::n2::e1" source="n2::n2::n2" target="n2::n2::n0">
      <data key="d9"/>
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="21.333333333333336" ty="-30.5">
            <y:Point x="402.0" y="434.2529296875"/>
            <y:Point x="326.3333333333333" y="434.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="93.384765625" x="-73.66666666666669" xml:space="preserve" y="6.923676388789772">event1 / logDtoD<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="2.0" distanceToCenter="false" position="left" ratio="0.09990481629545021" segment="-1"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const hierarchy_history_H= `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="317.0" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="0.0" y="514.5"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n2" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="640.0" width="210.0" x="192.0" y="65.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="210.0" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="20" leftF="20.0" right="23" rightF="23.0" top="2" topF="2.12353515625"/>
            </y:GroupNode>
            <y:GroupNode>
              <y:Geometry height="50.0" width="50.0" x="192.0" y="65.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="59.02685546875" x="-4.513427734375" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="true" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="5" bottomF="5.0" left="5" leftF="5.0" right="5" rightF="5.0" top="5" topF="5.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n2:">
        <node id="n2::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="300.0" y="104.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">B</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="230.0" y="284.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">C</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="250.0" y="434.5"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="25.6669921875" xml:space="preserve" y="21.1494140625">D</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n3">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="227.0" y="660.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="8.6669921875" xml:space="preserve" y="5.6494140625">H</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n2::n4">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="227.0" y="120.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n2" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-105.0" sy="160.0" tx="32.0" ty="0.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="46.697265625" x="-73.302734375" xml:space="preserve" y="-9.3505859375">event3 /<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-15.0">
            <y:Point x="32.0" y="635.0"/>
            <y:Point x="242.0" y="635.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="94.046875" x="-47.0234375" xml:space="preserve" y="25.1494140625">/ logDtoGroup1H<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n0" target="n2::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e0" source="n2::n0" target="n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="16.0" sy="30.5" tx="16.0" ty="-30.5">
            <y:Point x="348.0" y="185.0"/>
            <y:Point x="352.0" y="185.0"/>
            <y:Point x="352.0" y="405.0"/>
            <y:Point x="298.0" y="405.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-42.361328125" xml:space="preserve" y="145.1494140625">event1 / logBtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e1" source="n2::n0" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-16.0" sy="30.5" tx="16.0" ty="-30.5">
            <y:Point x="316.0" y="185.0"/>
            <y:Point x="302.0" y="185.0"/>
            <y:Point x="302.0" y="255.0"/>
            <y:Point x="278.0" y="255.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.72265625" x="-60.361328125" xml:space="preserve" y="55.1494140625">event2 / logBtoC<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e2" source="n2::n1" target="n2::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="-16.0" ty="-30.5">
            <y:Point x="262.0" y="405.0"/>
            <y:Point x="266.0" y="405.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="93.384765625" x="-46.6923828125" xml:space="preserve" y="25.1494140625">event1 / logCtoD<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n2::e3" source="n2::n4" target="n2::n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="-16.0" ty="-30.5">
            <y:Point x="242.0" y="255.0"/>
            <y:Point x="246.0" y="255.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="85.380859375" x="-72.6904296875" xml:space="preserve" y="50.32470703125">/ logGroup1toC<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const test_yed_conversion = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="216.25" y="146.5"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="441.2529296875" width="533.5" x="0.0" y="272.0"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="533.5" x="0.0" xml:space="preserve" y="0.0">Group 1</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="1" leftF="1.0" right="1" rightF="1.0" top="0" topF="0.0"/>
            </y:GroupNode>
            <y:GenericGroupNode configuration="PanelNode">
              <y:Geometry height="50.0" width="50.0" x="163.40238095238095" y="451.701171875"/>
              <y:Fill color="#68B0E3" transparent="false"/>
              <y:BorderStyle hasColor="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" borderDistance="0.0" fontFamily="Dialog" fontSize="16" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="23.6015625" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#FFFFFF" verticalTextPosition="bottom" visible="true" width="62.6953125" x="-6.34765625" xml:space="preserve" y="0.0">Folder 1</y:NodeLabel>
              <y:StyleProperties>
                <y:Property class="java.awt.Color" name="headerBackground" value="#68b0e3"/>
              </y:StyleProperties>
              <y:State autoResize="true" closed="true" closedHeight="50.0" closedWidth="50.0"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GenericGroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n1:">
        <node id="n1::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="16.0" y="456.7529296875"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="53.9921875" x="5.00390625" xml:space="preserve" y="13.798828125">Showing
mini UI</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="33.0" y="309.37646484375"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="140.0" y="637.7529296875"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="17.3359375" x="6.33203125" xml:space="preserve" y="5.6494140625">H*</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n1::n3" yfiles.foldertype="group">
          <data key="d4" xml:space="preserve"/>
          <data key="d6">
            <y:ProxyAutoBoundsNode>
              <y:Realizers active="0">
                <y:GroupNode>
                  <y:Geometry height="263.37646484375" width="287.5" x="230.0" y="434.87646484375"/>
                  <y:Fill color="#F5F5F5" transparent="false"/>
                  <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="287.5" x="0.0" xml:space="preserve" y="0.0">big UI collapsed</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                  <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
                  <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="41" leftF="41.0" right="9" rightF="8.5" top="0" topF="0.0"/>
                </y:GroupNode>
                <y:GenericGroupNode configuration="PanelNode">
                  <y:Geometry height="50.0" width="50.0" x="230.0" y="434.87646484375"/>
                  <y:Fill color="#68B0E3" transparent="false"/>
                  <y:BorderStyle hasColor="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="right" autoSizePolicy="node_width" borderDistance="0.0" fontFamily="Dialog" fontSize="16" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="23.6015625" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#FFFFFF" verticalTextPosition="bottom" visible="true" width="117.84375" x="-33.921875" xml:space="preserve" y="0.0">big UI collapsed</y:NodeLabel>
                  <y:StyleProperties>
                    <y:Property class="java.awt.Color" name="headerBackground" value="#68b0e3"/>
                  </y:StyleProperties>
                  <y:State autoResize="true" closed="true" closedHeight="50.0" closedWidth="50.0"/>
                  <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
                  <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
                </y:GenericGroupNode>
              </y:Realizers>
            </y:ProxyAutoBoundsNode>
          </data>
          <graph edgedefault="directed" id="n1::n3:">
            <node id="n1::n3::n0">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="286.0" y="622.2529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="11.330078125" x="26.3349609375" xml:space="preserve" y="21.1494140625">If</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n1::n3::n1">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="30.0" width="30.0" x="303.0" y="472.2529296875"/>
                  <y:Fill color="#FF6600" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
                  <y:Shape type="ellipse"/>
                </y:ShapeNode>
              </data>
            </node>
            <node id="n1::n3::n2">
              <data key="d6">
                <y:ShapeNode>
                  <y:Geometry height="61.0" width="64.0" x="430.0" y="622.2529296875"/>
                  <y:Fill color="#FFCC00" transparent="false"/>
                  <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
                  <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="56.01953125" x="3.990234375" xml:space="preserve" y="21.1494140625">then else</y:NodeLabel>
                  <y:Shape type="roundrectangle"/>
                </y:ShapeNode>
              </data>
            </node>
          </graph>
        </node>
        <node id="n1::n4">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="16.0" y="622.2529296875"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="46.673828125" x="8.6630859375" xml:space="preserve" y="21.1494140625">dummy</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <node id="n2">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="60.0" width="60.0" x="140.0" y="806.6552734375"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" textColor="#000000" verticalTextPosition="bottom" visible="true" width="50.04296875" x="4.978515625" xml:space="preserve" y="20.6494140625">updating<y:LabelModel><y:SmartNodeLabelModel distance="4.0"/></y:LabelModel><y:ModelParameter><y:SmartNodeLabelModelParameter labelRatioX="0.0" labelRatioY="0.0" nodeRatioX="0.0" nodeRatioY="0.0" offsetX="0.0" offsetY="0.0" upX="0.0" upY="-1.0"/></y:ModelParameter></y:NodeLabel>
          <y:Shape type="diamond"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n3" yfiles.foldertype="group">
      <data key="d4" xml:space="preserve"/>
      <data key="d6">
        <y:ProxyAutoBoundsNode>
          <y:Realizers active="0">
            <y:GroupNode>
              <y:Geometry height="554.62939453125" width="177.0" x="593.5" y="-37.37646484375"/>
              <y:Fill color="#F5F5F5" transparent="false"/>
              <y:BorderStyle color="#000000" type="dashed" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" backgroundColor="#EBEBEB" borderDistance="0.0" fontFamily="Dialog" fontSize="15" fontStyle="plain" hasLineColor="false" height="22.37646484375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#000000" verticalTextPosition="bottom" visible="true" width="177.0" x="0.0" xml:space="preserve" y="0.0">Group 3</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
              <y:State closed="false" closedHeight="50.0" closedWidth="50.0" innerGraphDisplayEnabled="false"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="82" leftF="82.0" right="1" rightF="1.0" top="0" topF="0.0"/>
            </y:GroupNode>
            <y:GenericGroupNode configuration="PanelNode">
              <y:Geometry height="50.0" width="50.0" x="-25.0" y="-25.0"/>
              <y:Fill color="#68B0E3" transparent="false"/>
              <y:BorderStyle hasColor="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="right" autoSizePolicy="node_width" borderDistance="0.0" fontFamily="Dialog" fontSize="16" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="23.6015625" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="t" textColor="#FFFFFF" verticalTextPosition="bottom" visible="true" width="61.8125" x="-5.90625" xml:space="preserve" y="0.0">Group 3</y:NodeLabel>
              <y:StyleProperties>
                <y:Property class="java.awt.Color" name="headerBackground" value="#68b0e3"/>
              </y:StyleProperties>
              <y:State autoResize="true" closed="true" closedHeight="50.0" closedWidth="50.0"/>
              <y:Insets bottom="15" bottomF="15.0" left="15" leftF="15.0" right="15" rightF="15.0" top="15" topF="15.0"/>
              <y:BorderInsets bottom="0" bottomF="0.0" left="0" leftF="0.0" right="0" rightF="0.0" top="0" topF="0.0"/>
            </y:GenericGroupNode>
          </y:Realizers>
        </y:ProxyAutoBoundsNode>
      </data>
      <graph edgedefault="directed" id="n3:">
        <node id="n3::n0">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="690.5" y="131.0"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="50.01953125" x="6.990234375" xml:space="preserve" y="13.798828125">ran kan 
kan</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n3::n1">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="707.5" y="0.0"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n3::n2">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="61.0" width="64.0" x="690.5" y="293.87646484375"/>
              <y:Fill color="#FFCC00" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="46.01171875" x="8.994140625" xml:space="preserve" y="13.798828125">pa dam
dam</y:NodeLabel>
              <y:Shape type="roundrectangle"/>
            </y:ShapeNode>
          </data>
        </node>
        <node id="n3::n3">
          <data key="d6">
            <y:ShapeNode>
              <y:Geometry height="30.0" width="30.0" x="707.5" y="472.2529296875"/>
              <y:Fill color="#FF6600" transparent="false"/>
              <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
              <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="12.666015625" x="8.6669921875" xml:space="preserve" y="5.6494140625">H</y:NodeLabel>
              <y:Shape type="ellipse"/>
            </y:ShapeNode>
          </data>
        </node>
      </graph>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="-35.5" ty="-220.62646484375"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="52.0234375" x="-54.0234375" xml:space="preserve" y="10.125">
/ activate<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-81.75" sy="220.62646484375" tx="15.0" ty="-14.96875"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="107.39453125" x="-109.39453125" xml:space="preserve" y="10.125">trace sent
/ update trace store<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e0" source="n3::n1" target="n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="-6.0" y="10.125">
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e1" source="n3::n0" target="n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="-15.25" tx="-16.0" ty="-30.5">
            <y:Point x="650.0" y="146.25"/>
            <y:Point x="650.0" y="90.5"/>
            <y:Point x="706.5" y="90.5"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="60.009765625" x="-54.77783203125" xml:space="preserve" y="-20.701171875">stay [isOk]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e2" source="n3::n0" target="n3::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="left" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="285.232421875" x="-65.921875" xml:space="preserve" y="2.7744140625">| stay [not(isOk, shown)] / deactivate, restore session
| trace sent<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n3::e3" source="n3::n2" target="n3::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-15.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="-6.0" y="10.125">
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e2" source="n3::n0" target="n1::n3::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="15.25" tx="0.0" ty="-30.5">
            <y:Point x="609.5" y="176.75"/>
            <y:Point x="609.5" y="232.0"/>
            <y:Point x="462.0" y="232.0"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="7.333984375" x="-17.41943359375" xml:space="preserve" y="2.0">/<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e3" source="n3::n2" target="n1::n3">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="0.0" tx="128.25" ty="-131.688232421875">
            <y:Point x="609.5" y="324.37646484375"/>
            <y:Point x="609.5" y="394.87646484375"/>
            <y:Point x="502.0" y="394.87646484375"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="10.66796875" x="-20.75341796875" xml:space="preserve" y="-20.701171875">[]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e4" source="n2" target="n1::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-15.0" sy="-14.96875" tx="0.0" ty="15.0"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" hasText="false" height="4.0" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="4.0" x="28.0" y="-89.94482421875">
            <y:LabelModel>
              <y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/>
            </y:LabelModel>
            <y:ModelParameter>
              <y:SmartEdgeLabelModelParameter angle="0.0" distance="30.0" distanceToCenter="true" position="right" ratio="0.5" segment="0"/>
            </y:ModelParameter>
            <y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/>
          </y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e0" source="n1::n0" target="n1::n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="21.333333333333332" sy="30.5" tx="-32.0" ty="0.0">
            <y:Point x="69.33333333333333" y="582.2529296875"/>
            <y:Point x="246.0" y="582.2529296875"/>
            <y:Point x="246.0" y="652.7529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="134.740234375" x="-136.74023691813153" xml:space="preserve" y="10.125">[shown] / expand clicked<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e1" source="n1::n0" target="n1::n4">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="30.5" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="custom" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="17.3359375" x="-19.3359375" xml:space="preserve" y="42.8994140625">[] /<y:LabelModel><y:SmartEdgeLabelModel autoRotationEnabled="false" defaultAngle="0.0" defaultDistance="10.0"/></y:LabelModel><y:ModelParameter><y:SmartEdgeLabelModelParameter angle="6.283185307179586" distance="2.0" distanceToCenter="false" position="right" ratio="0.5" segment="-1"/></y:ModelParameter><y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e2" source="n1::n1" target="n1::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="92.037109375" x="-94.037109375" xml:space="preserve" y="10.125">/ restore session<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::e3" source="n1::n3::n0" target="n1::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-21.333333333333332" sy="-30.5" tx="32.0" ty="0.0">
            <y:Point x="296.6666666666667" y="542.2529296875"/>
            <y:Point x="215.0" y="542.2529296875"/>
            <y:Point x="215.0" y="487.2529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="right" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="91.3515625" x="2.0000101725260038" xml:space="preserve" y="-28.787109375">minimize clicked<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" placement="anywhere" side="right" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::n3::e0" source="n1::n3::n1" target="n1::n3::n0">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="0.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="66.70703125" x="-68.70703125" xml:space="preserve" y="10.125">[only guard]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="n1::n3::e1" source="n1::n3::n1" target="n1::n3::n2">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="15.0" sy="0.0" tx="-32.0" ty="0.0">
            <y:Point x="390.0" y="487.2529296875"/>
            <y:Point x="390.0" y="652.7529296875"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="center" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="110.740234375" x="59.0" xml:space="preserve" y="73.3994140625">[another only guard]<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

const counter = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">
  <!--Created by yEd 3.19-->
  <key attr.name="Description" attr.type="string" for="graph" id="d0"/>
  <key for="port" id="d1" yfiles.type="portgraphics"/>
  <key for="port" id="d2" yfiles.type="portgeometry"/>
  <key for="port" id="d3" yfiles.type="portuserdata"/>
  <key attr.name="url" attr.type="string" for="node" id="d4"/>
  <key attr.name="description" attr.type="string" for="node" id="d5"/>
  <key for="node" id="d6" yfiles.type="nodegraphics"/>
  <key for="graphml" id="d7" yfiles.type="resources"/>
  <key attr.name="url" attr.type="string" for="edge" id="d8"/>
  <key attr.name="description" attr.type="string" for="edge" id="d9"/>
  <key for="edge" id="d10" yfiles.type="edgegraphics"/>
  <graph edgedefault="directed" id="G">
    <data key="d0" xml:space="preserve"/>
    <node id="n0">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="30.0" width="30.0" x="217.73650793650793" y="0.0"/>
          <y:Fill color="#FF6600" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="21.994140625" x="4.0029296875" xml:space="preserve" y="5.6494140625">init</y:NodeLabel>
          <y:Shape type="ellipse"/>
        </y:ShapeNode>
      </data>
    </node>
    <node id="n1">
      <data key="d6">
        <y:ShapeNode>
          <y:Geometry height="61.0" width="64.0" x="184.73650793650793" y="50.0"/>
          <y:Fill color="#FFCC00" transparent="false"/>
          <y:BorderStyle color="#000000" raised="false" type="line" width="1.0"/>
          <y:NodeLabel alignment="center" autoSizePolicy="content" fontFamily="Dialog" fontSize="12" fontStyle="bold" hasBackgroundColor="false" hasLineColor="false" height="18.701171875" horizontalTextPosition="center" iconTextGap="4" modelName="internal" modelPosition="c" textColor="#000000" verticalTextPosition="bottom" visible="true" width="24.671875" x="19.6640625" xml:space="preserve" y="21.1494140625">idle</y:NodeLabel>
          <y:Shape type="roundrectangle"/>
        </y:ShapeNode>
      </data>
    </node>
    <edge id="e0" source="n0" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="0.0" sy="15.0" tx="16.0" ty="-30.5"/>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
    <edge id="e1" source="n1" target="n1">
      <data key="d10">
        <y:PolyLineEdge>
          <y:Path sx="-32.0" sy="0.0" tx="-16.0" ty="-30.5">
            <y:Point x="5.500179811507934" y="80.5"/>
            <y:Point x="5.500179811507934" y="15.1494140625"/>
            <y:Point x="200.73650793650793" y="15.1494140625"/>
          </y:Path>
          <y:LineStyle color="#000000" type="line" width="1.0"/>
          <y:Arrows source="none" target="standard"/>
          <y:EdgeLabel alignment="left" configuration="AutoFlippingLabel" distance="2.0" fontFamily="Dialog" fontSize="12" fontStyle="plain" hasBackgroundColor="false" hasLineColor="false" height="33.40234375" horizontalTextPosition="center" iconTextGap="4" modelName="free" modelPosition="anywhere" preferredPlacement="anywhere" ratio="0.5" textColor="#000000" verticalTextPosition="bottom" visible="true" width="312.583984375" x="-238.1163973369296" xml:space="preserve" y="-82.05175781249997">| click inc [is it, is it not] / increment counter, render
| click dec / decrement counter, render, render some more<y:PreferredPlacementDescriptor angle="0.0" angleOffsetOnRightSide="0" angleReference="absolute" angleRotationOnRightSide="co" distance="-1.0" frozen="true" placement="anywhere" side="anywhere" sideReference="relative_to_edge_flow"/></y:EdgeLabel>
          <y:BendStyle smoothed="false"/>
        </y:PolyLineEdge>
      </data>
    </edge>
  </graph>
  <data key="d7">
    <y:Resources/>
  </data>
</graphml>
`.trim();

module.exports = {
  top_level_conditional_init,
  top_level_conditional_init_with_hierarchy,
  no_hierarchy_events_eventless,
  no_hierarchy_eventful_eventless_guards,
  hierarchy_conditional_init,
  deep_hierarchy_conditional_automatic_init_event_eventless,
  hierarchy_history_H,
  hierarchy_history_H_star,
  deep_hierarchy_history_H_star,
  deep_hierarchy_history_H,
  test_yed_conversion,
  counter,
 test_yed_conversion_no_compound_actions_guards,
  counter_inc_dec
};

