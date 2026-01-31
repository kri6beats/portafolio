
import { Card } from "./Card";



import mapImage from "./assets/map.png";
import linkerImage from "./assets/linker.png";
import irregular from "./assets/irregularG.png";

import iconhtml from "./icon/html.png";
import iconcss from "./icon/css.png";
import iconjs from "./icon/js.png";
import iconreact from "./icon/react.png";
import icontailwind from "./icon/iconTailwind.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, far, fab);

const linker = "https://kri6beats.github.io/linker_gamer/";
const mapa = "https://kri6beats.github.io/mapa_myvirtual/";
const game = "https://irregular-verbs-iota.vercel.app/";
export function CardsCompletes() {

    return (
        <div>

            {/* Contenedor de cards */}
            <div className="card-container">
                <Card
                    link={mapa}
                    name="My Virtual Map"
                    description="Application for retrieving real-time weather data using APIs such as OpenWeatherMap and Leaflet."
                    img={mapImage}
                >
                    <div className="foot-card-organize">
                        <div className="tech-icons">
                            <img src={iconhtml} alt="icon-html" />
                            <img src={iconcss} alt="icon-css" />
                            <img src={iconjs} alt="icon-js" />
                        </div>

                        <div className="project-buttons">
                            <a href={mapa} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                <FontAwesomeIcon icon={['fas', 'globe']} className="icon" />
                                Demo
                            </a>

                            <a
                                href="https://github.com/kri6beats/mapa_myvirtual"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-code"
                            >
                                <FontAwesomeIcon icon={['fas', 'laptop-code']} className="icon" />
                                Code
                            </a>
                        </div>
                    </div>
                </Card>

                <Card
                    link={linker}
                    name="Linker Gamer"
                    description="Platform designed to centralize social media links and player content. Ideal for creating personalized gamer profiles."
                    img={linkerImage}
                >
                    <div className="foot-card-organize">
                        <div className="tech-icons">
                            <img src={iconhtml} alt="icon-html" />
                            <img src={iconcss} alt="icon-css" />
                            <img src={iconjs} alt="icon-js" />
                        </div>

                        <div className="project-buttons">
                            <a href={linker} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                <FontAwesomeIcon icon={['fas', 'globe']} className="icon" />
                                Demo
                            </a>
                            <a
                                href="https://github.com/kri6beats/linker_gamer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-code"
                            >
                                <FontAwesomeIcon icon={['fas', 'laptop-code']} className="icon" />
                                Code
                            </a>
                        </div>
                    </div>

                </Card>

                <Card
                    link={game}
                    name="Game Irregular Verbs"
                    description="Interactive educational game developed with React and Tailwind CSS to practice irregular English verbs."
                    img={irregular}
                >
                <div className="foot-card-organize"></div>
                    <div className="tech-icons">
                        <img src={iconhtml} alt="icon-html" />
                        <img src={icontailwind} alt="icon-tailwind" />
                        <img src={iconreact} alt="icon-react" />
                        <img src={iconjs} alt="icon-js" />

                        <div className="project-buttons">
                            <a href={game} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                <FontAwesomeIcon icon={['fas', 'gamepad']} className="icon" />
                                Game
                            </a>
                            <a
                                href="https://github.com/kri6beats/irregularVerbs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-code"
                            >
                                <FontAwesomeIcon icon={['fas', 'laptop-code']} className="icon" />
                                Code
                            </a>
                        </div>
                    </div>

                </Card>
            </div>


        </div>
    );
}