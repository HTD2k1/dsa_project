import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartConfig } from "../config/ChartConfig";
import { chartData } from "../config/dataset/chartData";

import './index.css'

const MixedChart = (props) => {
  return (
    <div className="chart-container">
      <h2 className="chart-header">Mixed data Example</h2>
      <div className="chart-container--chart">
        <Bar
          data={chartData}
          options={ChartConfig}
          height={50000}
          width={60000}
          // plugins={plugins}
        />
      </div>
    </div>
  );
};

export default MixedChart;
