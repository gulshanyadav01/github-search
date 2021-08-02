import React from 'react';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';

import ReactFC from 'react-fusioncharts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const Example = ({data}) => {

const chartConfigs = {
    type: 'bar3d',
    width:"99%",
    height:300,
    dataFormat: 'json',
    dataSource: {
        "chart": {
          "caption": "Most Forked",
          "xAxisName": "Forks",
          "xAxisNameFontSize":"16px",
          "yAxisName": "Stars",
          "yAxisNameFontSize":"16px",
          "xAxisNameColor":"orange",
          "theme": "candy",
          "bgColor":"#182037"
        },
        data:data
    }
  };
  
    return <ReactFC {...chartConfigs} />;
}

export default Example;
