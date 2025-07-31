// src/components/LogoSlide.jsx
import React from 'react';
import './LogoSlide.css';

const logos = [
  '/udemy_logo.png',
  '/corsera_logo.png',
  '/edx_logo.png',
  '/udacity-dark.png',
  '/linkedin-original.png',
  '/udemy_logo.png',
  '/corsera_logo.png',
  '/edx_logo.png',
  '/udacity-dark.png',
  '/linkedin-original.png',
];

const LogoSlide = () => {
  return (
    
    <div className="py-5">
        
    <div className="logo-slide-wrapper">
      <div className="logo-slide-track">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="logo-slide-item">
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default LogoSlide;
