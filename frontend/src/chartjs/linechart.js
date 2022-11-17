import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "No. of Users ",
        data: [2, 6, 9, 7, 11],
        borderColor: "#C8ECCC",
        backgroundColor: "#F0FAF1",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1"
      }
    ]
  };

  /*const options = {
    title: {
      display: true,
      text: "Number of user register"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 20,
            stepSize: 3
          }
        }
      ]
    }
  };*/
  return <Line data={data} />;
};

export default LineChart;
