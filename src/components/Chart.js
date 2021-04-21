import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const Chart = () => {
  return (
    <div className="chart">
      Line Chart
      <Line
        data={{
          labels: ["Phong", "Dat", "Quang", "Khanh"],
          datasets: [
            {
              label: "Exam Score",
              data: [100, 0, 10, 50, 70],
              backgroundColor: "white",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default Chart;
