import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About me' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contacts' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="logo" aria-label="Chee Wei home">
          <span className="icon" aria-hidden="true">💡</span>
          <span className="name">Chee Wei</span>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="fa-solid fa-bars" aria-hidden="true"></span>
        </button>
        <nav
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? 'open' : ''}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
