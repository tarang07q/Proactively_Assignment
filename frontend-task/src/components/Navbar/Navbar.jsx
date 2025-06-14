import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <div className="navbar__logo">
          <a href="/">
            <img src="/logo.svg" alt="Company Logo" className="navbar__logo-img" />
          </a>
        </div>

        <div className="navbar__search">
          <div className="navbar__search-input-wrapper">
            <FontAwesomeIcon icon={faSearch} className="navbar__search-icon" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="navbar__search-input"
            />
          </div>
        </div>

        <button 
          className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar__links">
            <li><a href="#home" className="navbar__link">Home</a></li>
            <li><a href="#about" className="navbar__link">About</a></li>
            <li><a href="#services" className="navbar__link">Services</a></li>
            <li><a href="#portfolio" className="navbar__link">Portfolio</a></li>
            <li><a href="#contact" className="navbar__link">Contact</a></li>
          </ul>
          <div className="navbar__cta">
            <button className="btn btn--primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 