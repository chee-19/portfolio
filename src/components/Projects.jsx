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
