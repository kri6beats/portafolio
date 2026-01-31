import FloatingChat from "./FloatingChat";
import { Header } from "./headerFooter";
import { Biography } from "./Biography";
import { CardsCompletes } from "./CardsComplete";
import { Subtittle } from "./Biography";


export default function App() {
  return (
    <div>
      <Header tittle="PORTFOLIO"/>
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
    </div>
  );
}
