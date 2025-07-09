import React from 'react';
import CourseSearchInput from './courseSearchInput';

const Section2 = () => {
    return (
        <div className="section shadow mt-4 p-3" id="two">
            <h2 className="tothelefth2">Welcome to Online Course Compare</h2>
            <p>
                Here you can compare online courses from various platforms to find the best fit for your learning needs.
            </p>
            <p>Use the two search bars below to find the courses and compare.</p>
            <div className="row align-items-center text-center">
                <div className="col-lg-5">
                    <CourseSearchInput />
                </div>

                <div className="col-lg-2">
                    <h2 className="my-3">vs</h2>
                </div>

                <div className="col-lg-5">
                    <CourseSearchInput placeholder="Search by courses..." />
                </div>
            </div>
        </div>
    );
};

export default Section2;
