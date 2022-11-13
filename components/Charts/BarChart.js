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

  // get courtnames + number of courts as Object {gras: 1, ...}
  const numberOfCourtsPlayed = getWordCount(courts);

  const playedTimesOnCourt = Object.keys(numberOfCourtsPlayed) // returns a new array formed form numberOfCourtsPlayed Object: {"gras": 1, ...} => ["gras", ...]
    .sort() // sort the new array by courtname
    .map((court) => numberOfCourtsPlayed[court]); // map over the sorted array an give back the count from numberOfCourtsPlayed

  const labels = "Number of courts played";
  const options = {
    indexAxis: "y",
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
          color: "#4D4D4D",
        },
      },
      y: {
        grid: {
          display: false,
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
    labels: ["Carpet", "Clay", "Gras", "Hard"],
    datasets: [
      {
        label: "Times played",
        data: playedTimesOnCourt,
        backgroundColor: ["#d0e2ff", "#e8daff ", "#bae6ff", "#9ef0f0 "],
      },
    ],
  };

  return <Bar data={data} height={300} width={300} options={options} />;
}
