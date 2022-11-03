import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import useStore from "../../store/useStore";

export default function LineChart() {
  const gameList = useStore((state) => state.games);
  // Calculate won/lost games

  //   let gamesWon = 0;
  //   let gamesLost = 0;
  //   gameList.map((game) => {
  //     if (game.results.gameresult === "won") {
  //       gamesWon = ++gamesWon;
  //     }
  //     if (game.results.gameresult === "lost") {
  //       gamesLost = ++gamesLost;
  //     }
  //   });

  //   const gameResultStats = [gamesWon, gamesLost];

  const config = {
    type: "line",
    data: data,
  };

  const labels = [1, 2, 3, 4];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return <Line data={data} />;
}
