const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ng-chee-wei-911730337',
    isExternal: true,
  },
  {
    label: 'Email',
    href: 'mailto:ngcheewei21@gmail.com',
    isExternal: true,
  },
  {
    label: 'Github',
    href: 'https://github.com/chee-19',
    isExternal: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-card socials">
      <header className="section-header">
        <h2>Socials</h2>
      </header>
      <div className="social-links">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            className="social-pill"
            href={social.href}
            target={social.isExternal ? '_blank' : undefined}
            rel={social.isExternal ? 'noopener noreferrer' : undefined}
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
