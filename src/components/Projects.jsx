import { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import checklistapp from '../assets/projects/checklistapp.png';
import checklistVideo from '../assets/projects/checklistVideo.mp4';
import ticketproject from '../assets/projects/ticketproject.png';
import ticketVideo from '../assets/projects/ticketVideo.mp4';
import worksafe from '../assets/projects/worksafetag.png';
import worksafeVideo from '../assets/projects/worksafeVideo.mp4';
import DFBan from '../assets/projects/DFBanModel.png';
import DFBanVideo from '../assets/projects/DFBanModelVideo.mp4';
import bubbleT from '../assets/projects/bubbletea.jpg';
import bubbleTVideo from '../assets/projects/bubbleteaVideo.mp4';
import ingrRecipe from '../assets/projects/foodgen.png';
import ingRecipeVideo from '../assets/projects/foodgenVideo.mp4';
import randomimage from '../assets/projects/Screenshot 2025-01-12 145204.png';

const projects = [
  {
    title: 'Maintenance Checklist App',
    description:
      'Built a scalable digital maintenance checklist system that replaced paper forms, reduced human error, centralized all records in SharePoint, and delivered insights via Power BI dashboards for trend analysis.',
    href: '#',
    image:
      checklistapp,
    video: checklistVideo,
    alt: 'Maintenance Checklist App preview',
  },
  {
    title: 'Fruit Classifier',
    description:
      'Developed a dragonfruit vs banana fruit classifier model',
    href: '#',
    image:
      DFBan,
    video: DFBanVideo,
    alt: 'Fruit Classifier preview',
  },
  {
    title: 'WorkSafe Tag',
    description:
      'Developed an Arduino-based wearable safety device that monitors lone workers for fall events, manual SOS triggers, and geofence breaches.',
    href: '#',
    image:
      worksafe,
    video: worksafeVideo,
    alt: 'WorkSafe Tag preview',
  },
  {
    title: 'Ingredient-Based Recipe App',
    description:
      'Developed a Ingredient-Based Recipe App that helps users generate recipes from ingredients they already have. Users take a photo of ingredients, the AI detects them, and the app suggests recipes with calories, preparation time, and instructions. It also includes a recipe history and a community forum for sharing dishes.',
    href: '#',
    image:
      ingrRecipe,
    video: ingRecipeVideo,
    alt: 'WorkSafe Tag preview',
  },
  {
    title: 'Bubble Tea Dispenser',
    description:
      'Bubble Tea Dispenser is an automated embedded system that prepares customised bubble tea based on user selections. The system uses a keypad interface, LCD display, stepper motor mixing mechanism, and microcontroller control written in C to manage ingredient dispensing, temperature control, and drink preparation',
    href: '#',
    image:
      bubbleT,
    video: bubbleTVideo,
    alt: 'Bubble Tea preview',
  },
  {
    title: 'Helpdesk Triage Assistant',
    description:
      'Developed an AI-driven ticketing assistant that automates ticket categorization, routes issues instantly to the correct team, accelerates replies with AI suggestions, and delivers performance insights through analytics.',
    href: '#',
    image:
      ticketproject,
    video: ticketVideo,
    alt: 'Helpdesk Triage Assistant preview',
  },  
  
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const previewVideoRefs = useRef({});
  const modalVideoRef = useRef(null);

  useEffect(() => {
    const { body, documentElement } = document;

    if (!activeProject) return;

    const scrollY = window.scrollY;

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';

    body.classList.add('modal-open');
    documentElement.classList.add('modal-open');

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';

      body.classList.remove('modal-open');
      documentElement.classList.remove('modal-open');

      window.scrollTo(0, scrollY);
    };
  }, [activeProject]);

  useEffect(() => {
    Object.values(previewVideoRefs.current).forEach((video) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });
  }, [activeProject]);

  useEffect(() => {
    const modalVideo = modalVideoRef.current;
    if (!activeProject?.video || !modalVideo) return;

    modalVideo.currentTime = 0;
    const playPromise = modalVideo.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }

    return () => {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    };
  }, [activeProject]);

  const handleCardKeyDown = useCallback((event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveProject(project);
    }
  }, [setActiveProject]);

  const handlePreviewStart = useCallback((projectTitle) => {
    const video = previewVideoRefs.current[projectTitle];
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  }, []);

  const handlePreviewStop = useCallback((projectTitle) => {
    const video = previewVideoRefs.current[projectTitle];
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }, []);

  const modal = activeProject ? (
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
        {activeProject.video ? (
          <video
            ref={modalVideoRef}
            src={activeProject.video}
            className="modal-image modal-video"
            muted
            playsInline
            autoPlay
            loop
            controls
            preload="metadata"
            poster={activeProject.image}
          />
        ) : (
          <img src={activeProject.image} alt={activeProject.alt} className="modal-image" />
        )}
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
  ) : null;

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
              onMouseEnter={project.video ? () => handlePreviewStart(project.title) : undefined}
              onMouseLeave={project.video ? () => handlePreviewStop(project.title) : undefined}
            >
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="project-image"
                />

                {project.video && (
                  <video
                    ref={(node) => {
                      previewVideoRefs.current[project.title] = node;
                    }}
                    src={project.video}
                    className="project-video"
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    poster={project.image}
                    aria-label={`${project.title} video preview`}
                  />
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {typeof document !== 'undefined' ? createPortal(modal, document.body) : null}
    </section>
  );
};

export default Projects;
