import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Users Info"
      }
    }
  };
  
  const labels = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React"
  ];
  
  const data = {
    labels,
    datasets: [
      {
        label:
          "Total Developer",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor:
          "rgba(255, 99, 132, 0.5)"
      }
    ]
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
