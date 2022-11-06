import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import useStore from "../../store/useStore";

export default function BarChart() {
  const gameList = useStore((state) => state.games);

  const courts = gameList.map((game) => {
    return game.court;
  });

  // count the number of words in the courtArray
  function getWordCount() {
    return courts.reduce((prev, nxt) => {
      prev[nxt] = prev[nxt] + 1 || 1;
      return prev;
    }, {});
  }

  const numberOfCourtsPlayed = getWordCount(courts);
  console.log(numberOfCourtsPlayed);

  const labels = "Number of courts played";
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#4D4D4D",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
        },
      },
    },

    plugins: {
      title: {
        display: true,
        text: "Most played courts",
        color: "#4D4D4D",
      },
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
  };
  const data = {
    labels: [],
    datasets: [
      {
        label: "Times played",
        data: numberOfCourtsPlayed,
        backgroundColor: ["#d0e2ff", "#e8daff ", "#bae6ff", "#9ef0f0 "],
      },
    ],
  };

  return <Bar data={data} height={300} width={400} options={options} />;
}
