import React from "react";
import { Chart as ChartJS, Title, Tooltip, Legend, Filler, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(Title, Tooltip, Legend, Filler, BarElement);

const BarChart = ({ numbers }: { numbers: { [key: number]: number } }) => {
  return (
    <Bar
      options={{
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
      }}
      data={{
        labels: Object.keys(numbers),
        datasets: [
          {
            data: Object.values(numbers),
            backgroundColor: "#ffbb11",
            borderColor: "#ffzz04",
            borderRadius: 10,
            borderWidth: 3,
          },
        ],
      }}
    />
  );
};

export default BarChart;
