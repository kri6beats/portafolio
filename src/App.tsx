import FloatingChat from "./FloatingChat";
import { Header,Footer } from "./headerFooter";
import { Biography,Subtittle } from "./Biography";
import { CardsCompletes } from "./CardsComplete";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, far, fab);



export default function App() {
  return (
    <div>
      <Header tittle="PORTFOLIO EDWIN JIMENEZ"/>
      <div>
        <Biography tittle="AM I ..." description="Software Analysis and Development Technician with experience in web and desktop application development. Participated in billing system implementation, database management, API consumption, application refactoring, and user interface creation. Skilled in CSS, HTML, JavaScript, jQuery, PHP, React, and Python. Over 10 years of experience in the graphic arts sector, which strengthened design sense, operational leadership, and attention to detail. Strong teamwork, emotional intelligence, positive attitude, and attention to detail."/>
         
      {/* Encabezado principal */}
     <Subtittle tittle="PROJECTS"/> 
       <CardsCompletes/> 
      </div>
    <div>
      {/* Chat flotante */}
      <FloatingChat />
    </div>
    
        <Footer description="© 2026 Edwin Jiménez · Full Stack Developer">
      <a
        href="https://github.com/kri6beats"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={['fab', 'square-github']} className="icon" />
      </a>

        <a
        href="https://www.linkedin.com/in/edwin-jim%C3%A9nez-8147a32a5/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
      </a>
      <a
       href="https://wa.me/573176771634?text=Hello%20I%20saw%20your%20portfolio"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="WhatsApp"
       >
       <FontAwesomeIcon icon={['fab', 'whatsapp']} className="icon" />
       </a>

    </Footer>
    </div>
    
  );
}
