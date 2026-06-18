import { Technologies } from "../technologies";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CardProps = {
  project: {
    id: number;
    name: string;
    description: string;
    img: string;
    demo: string;
    code: string;
    technologies: string[];
  };
};

export function Card({ project }: CardProps) {
  return (
    <div className="card">
      <a href={project.demo} target="_blank" rel="noopener noreferrer">
        <img src={project.img} className="card-img" alt={project.name} />
      </a>

      <h3>{project.name}</h3>

      <p className="card-description">{project.description}</p>

      <div className="card-footer">
        {/* TECHNOLOGIES */}
        <div className="tech-icons">
          {project.technologies.map((tech, index) => (
            <img
              key={index}
              src={
                Technologies.find((item) => item.name.toLowerCase() === tech)
                  ?.icon
              }
              alt={tech}
            />
          ))}
        </div>

        {/* BUTTONS */}
        <div className="project-buttons">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo"
          >
            <FontAwesomeIcon icon={["fas", "globe"]} className="icon" />
            Demo
          </a>

          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-code"
          >
            <FontAwesomeIcon icon={["fas", "laptop-code"]} className="icon" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
