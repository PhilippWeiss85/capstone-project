import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import useStore from "../../store/useStore";

export default function PieChart() {
  const gameList = useStore((state) => state.games);
  // Calculate won/lost games

  let gamesWon = 0;
  let gamesLost = 0;
  gameList.map((game) => {
    if (game.results.gameresult === "won") {
      gamesWon = ++gamesWon;
    }
    if (game.results.gameresult === "lost") {
      gamesLost = ++gamesLost;
    }
  });

  const gameResultStats = [gamesWon, gamesLost];

  const data = {
    labels: ["Won", "Lost"],
    datasets: [
      {
        label: "Your Game Statistics",
        data: gameResultStats,
        backgroundColor: ["rgb(46, 163, 87)", "rgb(215, 65, 35)"],
        hoverOffset: 4,
      },
    ],
  };
  return <Pie data={data} height={300} />;
}
