const experiences = [
 "Full Stack Development",
  "React Development",
  "PHP Development",
  "REST API Integration",
  "Database Management",
  "Docker Containers",
  "Linux Environment",
  "Git Version Control",
];

export function ExperienceCard() {
  return (
    <div className="extra-card">

      <h3>Experience</h3>

      <div className="extra-content">

        <div className="experience-slider">

          {[...experiences, ...experiences].map((experience, index) => (
            <div
              key={index}
              className="experience-item"
            >
              {experience}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}