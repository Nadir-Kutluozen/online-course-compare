// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3 py-2 rounded-5">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.svg" alt="Logo" style={{ height: '40px' }} className="me-2" />
          
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end  " id="navbarNav">
          <ul className="navbar-nav mx-auto text-center gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link lead">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#action" className="nav-link lead border rounded-5 px-3 border-primary ">
                Compare
              </a>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link lead">
                Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
