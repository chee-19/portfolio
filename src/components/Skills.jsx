import python from '../assets/skills/python.svg';
import reactLogo from '../assets/skills/react.svg';
import mongodb from '../assets/skills/mongodb.svg';
import fastapi from '../assets/skills/fastapi.svg';
import git from '../assets/skills/git.svg';
import supabase from '../assets/skills/supabase.svg';
import postgres from '../assets/skills/postgres.svg';
import cloudinary from '../assets/skills/cloudinary.svg';
import authjs from '../assets/skills/authjs.svg';
import radix from '../assets/skills/radix.svg';
import nextjs from '../assets/skills/nextjs.svg';
import reactnative from '../assets/skills/reactnative.svg';

import './Skills.css';

const SKILLS = [
  { name: 'Python', icon: python },
  { name: 'React', icon: reactLogo },
  { name: 'MongoDB', icon: mongodb },
  { name: 'FastAPI', icon: fastapi },
  { name: 'Git', icon: git },
  { name: 'Supabase', icon: supabase },
  { name: 'PostgreSQL', icon: postgres },
  { name: 'Cloudinary', icon: cloudinary },
  { name: 'Auth.js', icon: authjs },
  { name: 'Radix UI', icon: radix },
  { name: 'Next.js', icon: nextjs },
  { name: 'React Native', icon: reactnative },
];

const Skills = () => {
  return (
    <section id="skills" className="section-card">
      <header className="section-header">
        <h2>
          <span className="fa-solid fa-screwdriver-wrench" aria-hidden="true"></span> Skills
        </h2>
      </header>
      <div className="skills-marquee" role="list">
        <div className="skills-marquee__track">
          {[...SKILLS, ...SKILLS].map((skill, index) => {
            const isDuplicate = index >= SKILLS.length;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="skills-marquee__item"
                role="listitem"
                aria-hidden={isDuplicate}
                data-duplicate={isDuplicate ? '' : undefined}
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="skills-marquee__icon"
                  loading="lazy"
                />
                <span className="skills-marquee__label">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
