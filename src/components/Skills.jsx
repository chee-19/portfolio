const skills = [
  'HTML',
  'CSS',
  'C++',
  'Python',
  'Git',
  'JavaScript',
  'Java',
  'MySQL',
  'AWS',
  'GitHub',
  'Docker',
  'Kubernetes',
];

const Skills = () => {
  return (
    <section id="skills" className="section-card">
      <header className="section-header">
        <h2>
          <span className="fa-solid fa-screwdriver-wrench" aria-hidden="true"></span> Skills
        </h2>
      </header>
      <div className="skills-grid" role="list">
        {skills.map((skill) => (
          <span className="skill-chip" role="listitem" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
