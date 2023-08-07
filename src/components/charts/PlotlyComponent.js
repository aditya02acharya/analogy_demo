import React from "react";
import Plot from "react-plotly.js";

var trace1 = {
  x: [0, 1, 2, 3, 4],
  y: [1, 5, 3, 7, 5],
  error_y: {
      type: 'data',
      array: [1, 1, 2, 0.5, 1.5],
      visible: true
  },
  mode: 'lines+markers',
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4, 5],
  y: [4, 0, 4, 6, 8],
  error_y: {
      type: 'data',
      array: [1, 1, 2, 0.5, 1.5],
      visible: true
  },
  mode: 'lines+markers',
  type: 'scatter'
};

//var data = [trace1, trace2];
//var layout = {title: 'OverallIncidence Plots', autosize: true};

const PlotlyComponent = (props) => {
    const {plot_data, layout} = props
    return (
        <Plot
            data={plot_data}
            layout={layout}
            config={{editable: true, displayModeBar: false, useResizeHandler:true}}
            style={{width: "90%", height:"100%"}}
        />
    );
};

export default PlotlyComponent;
