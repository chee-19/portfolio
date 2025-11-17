import python from '../assets/skills/python.png';
import aws from '../assets/skills/aws.png';
import cplusplus from '../assets/skills/c++.png';
import css from '../assets/skills/CSS.png';
import git from '../assets/skills/git.png';
import supabase from '../assets/skills/supabase.png';
import docker from '../assets/skills/docker.png';
import github from '../assets/skills/github.png';
import html from '../assets/skills/HTML.png';
import java from '../assets/skills/java.png';
import react from '../assets/skills/react.png';
import javascript from '../assets/skills/JavaScript.png';
import kuber from '../assets/skills/kubernetes.png';
import mysql from '../assets/skills/mysql.png';

//import './Skills.css';

const SKILLS = [
  { name: 'Python', icon: python },
  { name: 'React', icon: react },
  { name: 'C++', icon: cplusplus },
  { name: 'CSS', icon: css },
  { name: 'Git', icon: git },
  { name: 'Supabase', icon: supabase },
  { name: 'Docker', icon: docker },
  { name: 'GitHub', icon: github },
  { name: 'HTML', icon: html },
  { name: 'Java', icon: java },
  { name: 'React Native', icon: react},
  { name: 'Javascript', icon: javascript },
  { name: 'Kubernetes', icon: kuber },
  { name: 'MySQL', icon: mysql },
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
