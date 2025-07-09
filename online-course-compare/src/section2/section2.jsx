import React from 'react';
import Card from './card/card';

const Section2 = () => {
    return (
        <div className="row align-items-center text-center">
            <h2 className="tothelefth2  text-center p-3">Welcome to Online Course Compare</h2>
            <div className="row justify-content-center mb-4">
                <div className="col-md-4">
                <Card 
                title="How It Works"
                description="OnlineCourseCompare lets you search, compare, and evaluate online courses from top platforms like Udemy, Coursera, and more. Simply enter the course name or topic, and our tool shows side-by-side comparisons based on pricing, ratings, duration, and instructor quality."
                image="src/assets/logo.svg"
                />
                </div>
                <div className="col-md-4">
                <Card 
                title="Why You Need It"
                description="With hundreds of platforms and thousands of courses out there, it's overwhelming to choose the right one. OnlineCourseCompare saves you time and helps you avoid low-quality classes by showing only the best options"
                image="src/assets/logo.svg"
                />
                </div>
                <div className="col-md-4">
                <Card 
                title=" What You Get"
                description="Make informed choices without hopping between sites, quickly see what fits your needs, and find quality courses that match your skill level and pace"
                image="src/assets/logo.svg"
                />
                </div>
                </div>
            
        </div>
    );
};

export default Section2;
