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

const lessons = [
  {
    id: "1",
    name: "forehand",
    description: "This is a forehand tutorial",
    image: "/assets/forehand_female.jpg",
    alt: "Forehand lesson",
    step1: "Racket up",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },

  {
    id: "2",
    name: "backhand",
    description: "This is a backhand tutorial",
    image: "/assets/backhand_female.jpg",
    alt: "Backhand lesson",
    step1: "Racket up",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },
  {
    id: "3",
    name: "slice",
    description: "This is a slice tutorial",
    image: "/assets/backhand_slice_male.jpg",
    alt: "Slice lesson",
    step1: "Racket up",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },

  {
    id: "4",
    name: "serve",
    description: "This is a serve tutorial",
    image: "/assets/serve_male.jpg",
    alt: "Serve lesson",
    step1: "Racket up",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },
  {
    id: "5",
    name: "volley",
    description: "This is a volley tutorial",
    image: "/assets/volley_male.jpg",
    alt: "Volley lesson",
    step1: "Racket up",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },
];

export { examplegames };

export function getAllLessons() {
  return lessons;
}

export function getLessonByName(name) {
  return lessons.find((lesson) => {
    return lesson.name === name;
  });
}
