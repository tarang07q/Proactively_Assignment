import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import './Hero.scss';

const images = [
  '/images/hero-carousel-1.svg',
  '/images/hero-carousel-2.svg',
  '/images/hero-carousel-3.svg',
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Book an appointment with <span className="hero__title--highlight">lifestyle medicine experts</span>
          </h1>
          <p className="hero__description">
            Optimize your lifestyle and reverse chronic illnesses.
          </p>

          <div className="hero__search-form">
            <div className="hero__input-group">
              <FontAwesomeIcon icon={faSearch} className="hero__input-icon" />
              <input type="text" placeholder="Condition, procedure, spe..." className="hero__input" />
            </div>
            <div className="hero__input-group">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="hero__input-icon" />
              <input type="text" placeholder="City, state, or zipcode" className="hero__input" />
            </div>
            <div className="hero__input-group">
              <FontAwesomeIcon icon={faSuitcaseMedical} className="hero__input-icon" />
              <input type="text" placeholder="Insurance carrier" className="hero__input" />
            </div>
            <button className="btn btn--primary hero__find-now-btn">Find now</button>
          </div>
        </div>

        <div className="hero__image-carousel">
          <div className="hero__image-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Hero Image ${index + 1}`} className="hero__image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 