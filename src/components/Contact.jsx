const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ng-chee-wei-911730337',
    isExternal: true,
  },
  {
    label: 'Email',
    href: 'mailto:your.email@example.com',
    isExternal: false,
  },
  {
    label: 'Instagram',
    href: '#',
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
