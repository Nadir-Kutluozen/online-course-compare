// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DynamicButton from '../assets/DynamicButton';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow px-3 py-2 rounded-5">
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
              <Link to="/" className=" lead ">
              <DynamicButton>Compare</DynamicButton>
              </Link>
            </li>
            <li className="">
              <a href="/#action" className=" ">
              <DynamicButton>Compare</DynamicButton>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="lead">
              <DynamicButton>Courses</DynamicButton>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className=" lead">
              <DynamicButton>About</DynamicButton>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/freeCourses" className="lead">
              <DynamicButton>Free Courses</DynamicButton>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
