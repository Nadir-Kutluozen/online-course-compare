// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-light py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <img src="./logo.svg" alt="Logo" className="logo" style={{ height: '50px' }} />
        <nav>
          <a href="#action" className="text-dark lead text-decoration-none">Compare</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
