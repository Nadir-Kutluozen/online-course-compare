import React from 'react';
import './homepage.css';
import '../App.css';
import Squares from '../assets/Squares'; // Make sure the path is correct

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      {/* Squares Background */}
      <div className="squares-layer">
        <Squares
          direction="right"
          speed={0.2}
          squareSize={30}
          borderColor="#ddd"
          hoverFillColor="#007bff"
        />
      </div>

      {/* Homepage Content */}
      <div className=" ">
        <div className="" id="">
          <div className="row align-items-center">
            <div className="col-md-6 p-3">
              <div>
                <h1 className="totheleft homepage-content">Online</h1>
                <h1 className="totheleft custom-blue ">Course</h1>
                <h1 className="totheleft homepage-content">Compare</h1>
                <p className="pt-3 lead homepage-content">
                  Find the best online courses for you. Make informed decisions.
                  Start your learning journey today! Compare courses from different
                  platforms such as Udemy, Coursera and edX
                </p>
              </div>
            </div>
            <div className="col-md-6 p-3 d-flex flex-column align-items-center">
              <img
                className="img-fluid homepage-content custom-img mb-3"
                src="/homepage_logo.svg"
                alt="Online Course Compare"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
