import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MobileSidebar.scss';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
      <div className="mobile-sidebar__header">
        <div className="mobile-sidebar__logo">
          <img src="/logo.svg" alt="ProVital Logo" />
          <span>ProVital</span>
        </div>
        <button 
          className="mobile-sidebar__close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <nav className="mobile-sidebar__nav">
        <ul className="mobile-sidebar__links">
          <li className="mobile-sidebar__category">
            <span className="mobile-sidebar__category-title">Doctor</span>
            <div className="mobile-sidebar__auth-links">
              <a href="#login" className="mobile-sidebar__auth-link">Login</a>
              <a href="#signup" className="mobile-sidebar__auth-link">Sign up</a>
            </div>
          </li>
          <li className="mobile-sidebar__category">
            <span className="mobile-sidebar__category-title">Patients</span>
            <div className="mobile-sidebar__auth-links">
              <a href="#login" className="mobile-sidebar__auth-link">Login</a>
              <a href="#signup" className="mobile-sidebar__auth-link">Sign up</a>
            </div>
          </li>
          <li>
            <a href="#doctors" className="mobile-sidebar__link">
              <span>Doctors</span>
              <FontAwesomeIcon icon={faChevronRight} className="mobile-sidebar__arrow" />
            </a>
          </li>
          <li>
            <a href="#list-your-practice" className="mobile-sidebar__link">
              <span>List your practice</span>
              <FontAwesomeIcon icon={faChevronRight} className="mobile-sidebar__arrow" />
            </a>
          </li>
          <li>
            <a href="#for-employers" className="mobile-sidebar__link">
              <span>For Employers</span>
              <FontAwesomeIcon icon={faChevronRight} className="mobile-sidebar__arrow" />
            </a>
          </li>
          <li>
            <a href="#courses" className="mobile-sidebar__link">
              <span>Courses</span>
              <FontAwesomeIcon icon={faChevronRight} className="mobile-sidebar__arrow" />
            </a>
          </li>
          <li>
            <a href="#books" className="mobile-sidebar__link">
              <span>Books</span>
              <FontAwesomeIcon icon={faChevronRight} className="mobile-sidebar__arrow" />
            </a>
          </li>
          <li>
            <a href="#speakers" className="mobile-sidebar__link">
              <span>Speakers</span>
              <FontAwesomeIcon icon={faChevronRight} className="mobile-sidebar__arrow" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidebar; 