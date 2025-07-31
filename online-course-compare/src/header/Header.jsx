import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DynamicButton from '../assets/DynamicButton';
import Squares from '../assets/Squares';

const Header = () => {
  // Collapse navbar on nav-item click
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse a');
    const collapseEl = document.getElementById('navbarNav');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const collapseInstance = new window.bootstrap.Collapse(collapseEl, {
          toggle: false
        });
        collapseInstance.hide(); // this will collapse it
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow px-3">
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

        <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link lead">
                <DynamicButton>Home</DynamicButton>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#action" className="nav-link">
                <DynamicButton>Compare</DynamicButton>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link lead">
                <DynamicButton>Courses</DynamicButton>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/freeCourses" className="nav-link lead">
                <DynamicButton>Free Courses</DynamicButton>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link lead">
                <DynamicButton>About</DynamicButton>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
