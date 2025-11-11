const projects = [
  {
    title: 'Maintenance Checklist App (Power Apps + SharePoint)',
    description:
      'A streamlined inspection workflow that digitises data capture and reporting for facilities teams.',
    href: '#',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'><rect width='320' height='200' rx='24' fill='%2376e3c933'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='28' fill='%2376e3c9'>Preview</text></svg>",
    alt: 'Maintenance Checklist App preview',
  },
  {
    title: 'Helpdesk Triage Assistant (React + Supabase + OpenAI)',
    description:
      'An AI-assisted support dashboard that categorises and prioritises tickets to speed up resolutions.',
    href: '#',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'><rect width='320' height='200' rx='24' fill='%2376e3c933'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='28' fill='%2376e3c9'>Preview</text></svg>",
    alt: 'Helpdesk Triage Assistant preview',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-card">
      <header className="section-header">
        <h2>
          <span className="fa-solid fa-code" aria-hidden="true"></span> Projects
        </h2>
      </header>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.alt} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
