import FloatingChat from "./chat/FloatingChat";

import { Header, Footer } from "./header/headerFooter";

import { Biography, Subtittle } from "./Biography";

import { CardsCompletes } from "./cards/CardsComplete";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { TechStackCard } from "./sections/techStackCards";
import { ExperienceCard } from "./sections/experienceCards";


import pcImage from "./assets/icon/orbit-pc.png";

library.add(fas, far, fab);

export default function App() {
  return (
    <>
      <Header tittle="EJ" />

      <main className="main-layout">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <Biography
              tittle="TURNING IDEAS INTO SOFTWARE"
              name="EDWIN JIMENEZ"
              role="SOFTWARE ANALYSIS AND DEVELOPMENT "
              description="Software developer passionate about creating modern digital solutions 
            and currently specializing in Artificial Intelligence through 
            Machine Learning and Deep Learning. Combining software engineering, 
            data-driven thinking, and creative problem-solving to build intelligent 
            applications that deliver real value and meaningful user experiences."
            />

            {/* ORBIT SECTION */}

            <div className="orbit-container">
              <div className="orbit-glow"></div>
               <div className="orbit-ring"></div>
              <div className="orbit-center">
                <img src={pcImage} alt="computer" className="pc-image" />
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section">
          <Subtittle tittle="PROJECTS" />

          <CardsCompletes />
        </section>
        <section className="extras-section">
          <div className="container">
            <div className="extras-grid">
              <TechStackCard />

              <ExperienceCard />
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING CHAT */}
      <FloatingChat />

      <Footer description="© 2026 Edwin Jiménez · Full Stack Developer">
        <a
          href="https://github.com/kri6beats"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={["fab", "square-github"]} className="icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/edwin-jim%C3%A9nez-8147a32a5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
        </a>

        <a
          href="https://wa.me/573176771634?text=Hello%20I%20saw%20your%20portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={["fab", "whatsapp"]} className="icon" />
        </a>
      </Footer>
    </>
  );
}
