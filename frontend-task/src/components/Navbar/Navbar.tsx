import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

interface NavbarProps {
  onMobileMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMobileMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    navigate('/auth');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="navigation">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <a href="/" aria-label="Home">
            <img src="/logo.svg" alt="Company Logo" className="navbar__logo-img" />
          </a>
        </div>

        <div className="navbar__search">
          <div className="navbar__search-input-wrapper">
            <FontAwesomeIcon icon={faSearch} className="navbar__search-icon" aria-hidden="true" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="navbar__search-input"
              aria-label="search"
              role="searchbox"
            />
          </div>
        </div>

        <button 
          className="navbar__toggle"
          onClick={onMobileMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={false}
          aria-controls="mobile-sidebar"
        >
          <FontAwesomeIcon icon={faBars} aria-hidden="true" />
          <span className="sr-only">Toggle menu</span>
        </button>

        <div className="navbar__menu">
          <ul className="navbar__links">
            <li><a href="#home" className="navbar__link">Home</a></li>
            <li><a href="#about" className="navbar__link">About</a></li>
            <li><a href="#services" className="navbar__link">Services</a></li>
            <li><a href="#portfolio" className="navbar__link">Portfolio</a></li>
            <li><a href="#contact" className="navbar__link">Contact</a></li>
          </ul>
          <div className="navbar__cta">
            <button className="btn btn--primary" onClick={handleGetStartedClick}>Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 