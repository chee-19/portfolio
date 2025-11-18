import { useState, useCallback } from 'react';

import checklistapp from '../assets/projects/checklistapp.png';
import ticketproject from '../assets/projects/ticketproject.png';

const projects = [
  {
    title: 'Maintenance Checklist App',
    description:
      'Built a scalable digital maintenance checklist system that replaced paper forms, reduced human error, centralized all records in SharePoint, and delivered insights via Power BI dashboards for trend analysis.',
    href: '#',
    image:
      checklistapp,
    alt: 'Maintenance Checklist App preview',
  },
  {
    title: 'Helpdesk Triage Assistant',
    description:
      'Developed an AI-driven ticketing assistant that automates ticket categorization, routes issues instantly to the correct team, accelerates replies with AI suggestions, and delivers performance insights through analytics.',
    href: '#',
    image:
      ticketproject,
    alt: 'Helpdesk Triage Assistant preview',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleCardKeyDown = useCallback((event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveProject(project);
    }
  }, [setActiveProject]);

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
            <div
              className="project-link"
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => handleCardKeyDown(event, project)}
            >
              <img src={project.image} alt={project.alt} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
            <button
              className="modal-close"
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              &times;
            </button>
            <img src={activeProject.image} alt={activeProject.alt} className="modal-image" />
            <div className="modal-body">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
              <div className="modal-section">
                <h4>Tools &amp; Technologies</h4>
                <p>Details coming soon. Add the tech stack here.</p>
              </div>
              <div className="modal-section">
                <h4>Key Features</h4>
                <ul>
                  <li>Highlight the most impactful feature here.</li>
                  <li>Use this space for another detail or metric.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
