import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import useStore from "../../store/useStore";

export default function PieChart() {
  const gameList = useStore((state) => state.games);
  // Calculate won/lost games

  let gamesWon = 0;
  let gamesLost = 0;

  gameList.forEach((game) => {
    if (game.results.gameresult === "won") {
      gamesWon = ++gamesWon;
    }
    if (game.results.gameresult === "lost") {
      gamesLost = ++gamesLost;
    }
  });

  const gameResultStats = [gamesWon, gamesLost];
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#4D4D4D",
        },
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 10,
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
  };
  const data = {
    labels: ["Won", "Lost"],

    datasets: [
      {
        label: "Your Game Statistics",
        data: gameResultStats,
        backgroundColor: ["#bfeeff", "#005676"],
        hoverOffset: 10,
      },
    ],
  };

  return <Pie data={data} height={300} width={250} options={options} />;
}
