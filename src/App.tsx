
import  FloatingChat  from "./floatingChat";
import { Card } from "./Card";
import { Header } from "./headerFooter";

import mapImage from "./assets/map.png";
import linkerImage from "./assets/linker.png";
import irregular from "./assets/irregularG.png";

import iconhtml from "./icon/html.png";
import iconcss from "./icon/css.png";
import iconjs from "./icon/js.png";
import iconreact from "./icon/react.png";
import icontailwind from "./icon/iconTailwind.png";

const linker = "https://kri6beats.github.io/linker_gamer/";
const mapa = "https://kri6beats.github.io/mapa_myvirtual/";
const game = "https://irregular-verbs-iota.vercel.app/";

export default function App() {
  return (
    <div>
      <Header title="Portafolio" />

      <div className="card-container">
        <Card link={mapa} name="My virtual map" description="Mapa para ver el clima" img={mapImage}>
          <img src={iconhtml} alt="icon-html" />
          <img src={iconcss} alt="icon-css" />
          <img src={iconjs} alt="icon-js" />
        </Card>

        <Card link={linker} name="Linker gamer" description="Links Para Gamers" img={linkerImage}>
          <img src={iconhtml} alt="icon-html" />
          <img src={iconcss} alt="icon-css" />
          <img src={iconjs} alt="icon-js" />
        </Card>

        <Card
          link={game}
          name="Game Irregular Verbs"
          description="Juego para aprender verbos irregulares en inglés"
          img={irregular}
        >
          <img src={iconhtml} alt="icon-html" />
          <img src={icontailwind} alt="icon-tailwind" />
          <img src={iconreact} alt="icon-react" />
          <img src={iconjs} alt="icon-js" />
        </Card>
      </div>

      {/* Chat flotante */}
      <FloatingChat />
    </div>
  );
}
