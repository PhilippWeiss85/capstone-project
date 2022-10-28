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
    description:
      "The forehand is struck from the dominant side of the body by swinging the racquet in the direction of where the player wants to place the shot. It is called a forehand because the racquet is held in such a way that if one were to strike the ball without the racquet, it would hit the palm of your hand. This is the opposite side from a backhand. It is considered the easiest shot to master, perhaps because it is the most natural stroke. Beginners and advanced players often have better forehands than any other shots and use it as a weapon.",
    image: "/assets/forehand_female.jpg",
    alt: "Forehand lesson",
    step1: "Continental, Eastern, Semi-Western, Western",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },

  {
    id: "2",
    name: "backhand",
    description:
      "The backhand is struck from the non-dominant side of the body by bringing the racquet across the body (showing the back of your hand to the opponent) and swinging the racquet away from one's body in the direction of where the player wants the ball to go. It is generally considered more difficult to master than the forehand. It can be executed with either one or both hands.",
    image: "/assets/backhand_female.jpg",
    alt: "Backhand lesson",
    step1: "Dominant hand continental, non dominant hand eastern",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },
  {
    id: "3",
    name: "slice",
    description:
      "A shot that imparts backspin on the ball by hitting the ball with a high-to-low motion.",
    image: "/assets/backhand_slice_male.jpg",
    alt: "Slice lesson",
    step1: "Continental",
    step2:
      "All slice backhands are hit with a closed stance, stepping in the direction of the shot or slightly across the body.",
    step3:
      "As with a topspin backhand you have to take the racquet back using the upper body and not just the arm. Your non-dominant hand should remain on the throat of the racquet. Your hitting arm should remain fairly straight and the racquet head open. As you swing forward your racquet will close and at contact it will be almost parallel to the net.  Your upper body remains sideways on this groundstroke.",
    step4: "End swing path",
  },

  {
    id: "4",
    name: "serve",
    description:
      "A serve (or, more formally, a service) in tennis is a shot to begin the point. The most common serve is used is an overhead serve. It is initiated by tossing the ball into the air over the server's head and hitting it when the arm is fully stretched out (usually near the apex of its trajectory) into the diagonally opposite service box without touching the net. The server may employ different types of serve: a flat, a kick, or a slice serve.",
    image: "/assets/serve_male.jpg",
    alt: "Serve lesson",
    step1: "Continental",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },
  {
    id: "5",
    name: "volley",
    description:
      "A volley is made in the air before the ball bounces, generally near the net or inside of the service line. Volleys consist of the forehand volley and backhand volley[2] and are usually made with a stiff-wristed motion to hit the ball into an open area of the opponent's court. The half volley is made by hitting the ball on the rise just after it has bounced, once again generally in the vicinity of the net.",
    image: "/assets/volley_male.jpg",
    alt: "Volley lesson",
    step1: "Continental",
    step2: "Unit turn",
    step3: "C Shape",
    step4: "End swing path",
  },
];

export { examplegames };

// export async function getAllLessons() {
//   return lessons;
// }

export async function getLessonByName(name) {
  return lessons.find((lesson) => {
    return lesson.name === name;
  });
}
