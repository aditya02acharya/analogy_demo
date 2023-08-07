import React from "react";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import { studyData } from "data/DummyData";
import "assets/css/flowchart.css";

const nodeStyle = () => {
  return [
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    { locationSpot: go.Spot.Center },
  ];
};

const textStyle = () => {
  return {
    font: "11pt Lato, Helvetica, Arial, sans-serif",
    stroke: "#000000",
  };
};

const FlowChart = (props) => {
  const $ = go.GraphObject.make;

  const diagramObj = $(go.Diagram, {
    "undoManager.isEnabled": true,
    initialAutoScale: go.Diagram.Uniform,
    model: new go.GraphLinksModel({ linkKeyProperty: "key" }),
  });

  const initDiagram = () => {
    // go.Diagram.licenseKey = '...';
    // Node Template
    diagramObj.nodeTemplate = $(
      go.Node,
      { fromSpot: go.Spot.Bottom }, // arrows always start from bottom.
      nodeStyle(),
      $(
        go.Panel,
        "Auto",
        $(go.Shape, "Rectangle", {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 3.5,
        }),
        $(
          go.TextBlock,
          textStyle(),
          {
            margin: 5,
            maxSize: new go.Size(400, 300),
            wrap: go.TextBlock.WrapFit,
            editable: true,
          },
          new go.Binding("text", "line").makeTwoWay()
        )
      )
    );

    diagramObj.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal },
      $(go.Shape, { strokeWidth: 3 }),
      $(go.Shape, { toArrow: "Standard" })
    );

    return diagramObj;
  };

  return (
        <ReactDiagram
          initDiagram={initDiagram}
          divClassName="diagram-component"
          nodeDataArray={studyData.uml_data}
          linkDataArray={studyData.uml_link}
        />
  );
};

export default FlowChart;
