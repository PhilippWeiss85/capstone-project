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

  const labels = [];
  const data = {
    labels: [],

    datasets: [
      {
        label: "Played courts",
        data: numberOfCourtsPlayed,
        backgroundColor: ["#d9fbfb", "	#9ef0f0", "#3ddbd9", "#08bdba"],
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return <Bar data={data} height={300} width={400} />;
}
