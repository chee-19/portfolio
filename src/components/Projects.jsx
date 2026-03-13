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
    tools: [
      'Power Apps',
      'SharePoint Lists',
      'Power BI',
      'Power Automate'
    ],
    features: [
      'Replaced paper-based maintenance checklists with a digital workflow',
      'Stored and centralized records using SharePoint Lists',
      'Reduced manual entry errors and improved data consistency',
      'Displayed trends and insights through Power BI dashboards',
      'Supported scalable checklist submission across multiple equipment types'
    ]
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
    tools: [
      'Python',
      'TensorFlow',
      'Keras',
      'NumPy',
      'Matplotlib'

    ],
    features: [
      'Trained a CNN model to classify banana, dragon fruit, and unknown fruit images',
      'Implemented data augmentation to improve model generalisation',
      'Built a preprocessing pipeline for dataset splitting and image normalization',
      'Evaluated model performance using training and validation metrics'
    ]
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
    tools: [
      'Arduino',
      'ESP8266 (ESP-01)',
      'ADXL345 Accelerometer',
      'GPS Module',
      'ThingSpeak',
      'Embedded C',
      'Android Studio'
    ],
    features: [
      'Implemented fall detection using accelerometer motion data',
      'Integrated GPS module to capture and transmit worker location',
      'Developed SOS alert function for emergency assistance',
      'Transmitted sensor data to cloud dashboard using IoT connectivity',
      'Designed a wearable prototype for monitoring worker safety in real environments',
      'Developed mobile application to get data from ThinkSpeak to alert supervisors if aa incident happens'
    ]
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
    tools: [
    'Mendix',
    'Node-RED',
    'SQL',
    'OpenAI API',
    'CodeProjectAI'
    ],
    features: [
      'Allows users to input available ingredients to generate recipe suggestions either via camera or images from gallery',
      'Used CodeProject AI to identify the different ingredients shown on the image',
      'Integrates AI to generate 3 to 5 recipes with preparation steps and calorie estimates',
      'Uses Node-RED to orchestrate API calls and workflow automation',
      'Stores ingredient data and generated recipes in a SQL database',
      'Displays generated recipes in a user-friendly list interface'
    ]
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
    tools: [
    'C Programming',
    'Embedded Systems',
    'Stepper Motor Control',
    'LCD Display (4-bit Interface)',
    'Keypad Interface',
    'GPIO Hardware Control'
    ],
    features: [
      'Implemented keypad-based user interface for selecting drink options',
      'Controlled ingredient mixing mechanism using a stepper motor',
      'Displayed system status and instructions on a 4-bit LCD display',
      'Developed embedded C logic to coordinate input, processing, and hardware output',
      'Built an automated drink preparation workflow based on user selections'
    ]
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
    tools: [
    'Bolt',
    'n8n workflow',
    'Gemini API',
    'Supabase'
    ],
    features: [
      'Automatically classifies helpdesk tickets based on issue descriptions',
      'Routes tickets to the appropriate support category or team',
      'Reduces manual triage workload for support staff',
      'Processes user input using NLP techniques to extract intent',
      'Improves response efficiency by prioritizing incoming support requests'
    ]
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
            <div className="tech-stack">
              {activeProject.tools?.map((tool, index) => (
                <span key={index} className="tech-badge">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="modal-section">
            <h4>Key Features</h4>
            <ul>
              {activeProject.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
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
