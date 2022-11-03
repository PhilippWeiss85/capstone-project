import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import useStore from "../../store/useStore";

export default function LineChart() {
  const gameList = useStore((state) => state.games);

  // get gameDates
  const gameDates = gameList.map((game) => {
    return game.date;
  });

  // get won/lost games
  const gamesWon = gameList.map((game) => {
    return game.results.gameresult === "won";
  });
  const gamesLost = gameList.map((game) => {
    return game.results.gameresult === "lost";
  });

  const labels = gameDates;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Won",
        data: gamesWon,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
      {
        label: "Lost",
        data: gamesLost,
        fill: false,
        borderColor: "rgb(10, 19, 192)",
        tension: 0.3,
      },
    ],
  };
  return <Line data={data} />;
}
