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

  const handleScrollToTop = () => {
    // Smoothly scroll the page back to the top/hero section when the logo is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Flex container keeps logo on the left and navigation on the right */}
      <div className="nav-container">
        <button
          type="button"
          className="logo-button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >
          <span className="logo">
            <span className="icon" aria-hidden="true">💡</span>
            <span className="name">Ng Chee Wei</span>
          </span>
        </button>
        <div className="nav-right">
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
      </div>
    </header>
  );
};

export default Header;
