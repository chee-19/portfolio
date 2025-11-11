import faceImage from '../assets/face.png';

const Hero = () => {
  return (
    <section id="about" className="section-card hero">
      <div className="hero-text">
        <h1>
          Hello! 👋 I’m <span className="highlight-txt">Chee Wei</span>
        </h1>
        <p>
          A <span className="highlight-txt">Computer Engineering</span> student at Singapore Polytechnic. I am
          passionate about coding and building <span className="highlight-txt">innovative</span> projects that{' '}
          <span className="highlight-txt">solve</span> real-world problems through software and hardware{' '}
          <span className="highlight-txt">integration</span>.
        </p>
        <p>Motivated and self-driven.</p>
        <p>
          I thrive on <span className="highlight-txt">learning</span> new skills, constantly{' '}
          <span className="highlight-txt">challenging</span> myself to become a better problem{' '}
          <span className="highlight-txt">solver</span>.
        </p>
        <p>Let’s connect and create something amazing together! 🚀</p>
      </div>
      <div className="hero-card" aria-labelledby="hero-card-heading">
        <img src={faceImage} alt="Portrait of Chee Wei" className="hero-avatar" />
        <div className="hero-name-card">
          <h2 id="hero-card-heading">Ng Chee Wei</h2>
          <p className="hero-name-secondary">黄志伟</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
