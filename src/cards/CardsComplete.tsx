
import { Card } from "./Card";
import  projects  from "./Projects";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';


library.add(fas, far, fab);


export function CardsCompletes() {
  return (
    <div className="card-container">

      {projects.map((project) => (
        <Card
          key={project.id}
          project={project}
        />
      ))}

    </div>
  );
}