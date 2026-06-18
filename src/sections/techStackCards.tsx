import { Technologies } from "../technologies";

export function TechStackCard() {
  return (
    <div className="extra-card">

      <h3>Tech Stack</h3>

      <div className="tech-slider">

        {Technologies.map((tech) => (

          <img
            key={tech.id}
            src={tech.icon}
            alt={tech.name}
            className="tech-icon"
          />

        ))}

      </div>

    </div>
  );
}