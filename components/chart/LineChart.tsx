import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

function LineChart({ numbers }: { numbers: number[] }) {
  return (
    <>
      <Line
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
          labels: numbers.map((num) => num.toString()),
          datasets: [
            {
              data: numbers,
              backgroundColor: "#ffbb11",
              borderColor: "#ffzz04",
              fill: true,
              pointRadius: 5,
              pointHoverRadius: 8,
              pointBorderColor: "#ffzz04",
              pointHoverBorderColor: "#ffzz04",
              pointBorderWidth: 2,
              pointHoverBorderWidth: 4,
              tension: 0.2,
            },
          ],
        }}
      />
    </>
  );
}

export default LineChart;
