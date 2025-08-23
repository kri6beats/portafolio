
import { Card } from "./Card";
import mapImage from './assets/map.png';
import linkerImage from './assets/linker.png';
import irregular from './assets/irregularG.png';
import { Header } from "./headerFooter";
import { Footer } from "./headerFooter";
import ModeloGLB from "./objects3d/Object3d";


const linker = "https://kri6beats.github.io/linker_gamer/";
const mapa = "https://kri6beats.github.io/mapa_myvirtual/";
const game = "https://irregular-verbs-iota.vercel.app/";

export default function App() {
  return (
    <div>
      <Header title="Mi Portafolio" />


      <div className="card-container">
        <Card
          link={mapa}
          name="My virtual map"
          description="Mapa para ver el clima"
          img={mapImage}
        />
        <Card
          link={linker}
          name="Linker gamer"
          description="Links Para Gamers"
          img={linkerImage}
        />
        <Card
          link={game}
          name="Game Irregular Verbs"
          description="Juego para aprender verbos irregulares en ingles"
          img={irregular}
        />
      </div>

      <Footer img={< ModeloGLB />} />

    </div>
  )
};
