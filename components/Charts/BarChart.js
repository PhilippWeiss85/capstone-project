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

  const data = {
    labels: [],
    datasets: [
      {
        label: "Your most played courts",
        data: numberOfCourtsPlayed,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  return <Bar data={data} options={options} height={300} width={450} />;
}
