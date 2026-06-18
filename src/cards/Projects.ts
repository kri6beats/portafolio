import mapImage from "../assets/map.png";
import linkerImage from "../assets/linker.png";
import irregular from "../assets/irregularG.png";



const linker = "https://kri6beats.github.io/linker_gamer/";
const mapa = "https://kri6beats.github.io/mapa_myvirtual/";
const game = "https://irregular-verbs-iota.vercel.app/";

const projects = [
  {
    id: 0,

    name: "My Virtual Map",

    description:
      "Application for retrieving real-time weather data using APIs such as OpenWeatherMap and Leaflet.",

    img: mapImage,

    demo: mapa,

    code: "https://github.com/kri6beats/mapa_myvirtual",

   technologies: [
      "html",
      "css",
      "javascript",
    ],
  },

  {
    id: 1,

    name: "Linker Gamer",

    description:
      "Platform designed to centralize social media links and player content. Ideal for creating personalized gamer profiles.",

    img: linkerImage,

    demo: linker,

    code: "https://github.com/kri6beats/linker_gamer",

    technologies: [
      "html",
      "css",
      "javascript",
    ],
  },

  {
    id: 2,

    name: "Game Irregular Verbs",

    description:
      "Interactive educational game developed with React and Tailwind CSS to practice irregular English verbs.",

    img: irregular,

    demo: game,

    code: "https://github.com/kri6beats/irregularVerbs",

   technologies: [
      "react",
      "tailwind",
      "javascript",
    ],
  },
];

export default projects;

