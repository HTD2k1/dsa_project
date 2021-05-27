export const ChartConfig = {
  responsive: true,
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  tooltips: {
    mode: "label",
  },
  elements: {
    line: {
      fill: false,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        gridLines: {
          display: false,
        },
        // labels: {
        //   show: true,
        // },
      },
    ],
    yAxes: [
      {
        type: "linear",
        display: true,
        position: "left",
        id: "y-axis-1",
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
      {
        type: "linear",
        display: true,
        position: "right",
        id: "y-axis-2",
        gridLines: {
          display: false,
        },
        labels: {
          show: true,
        },
      },
    ],
  },
};
