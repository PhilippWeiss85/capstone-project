import { nanoid } from "nanoid";

const examplegames = [
  {
    id: nanoid(),
    type: "Match",
    name: "Max",
    date: "2022-10-01",
    time: "19:00",
    place: "Rothof",
    court: "Carpet",
    results: {
      gameresult: undefined,
      set: [
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
      ],
    },
  },
  {
    id: nanoid(),
    type: "Training",
    name: "Sonja",
    date: "2022-15-01",
    time: "20:00",
    place: "Fidelopark",
    court: "Sand",
    results: {
      gameresult: undefined,
      set: [
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
      ],
    },
  },
  {
    id: nanoid(),
    type: "Match",
    name: "Steffi",
    date: "2022-20-01",
    time: "10:00",
    place: "Sportscheck",
    court: "Gras",
    results: {
      gameresult: undefined,
      set: [
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
      ],
    },
  },
];

export { examplegames };
