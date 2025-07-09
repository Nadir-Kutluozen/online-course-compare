import React from 'react';
import './homepage.css'; // Importing the CSS file for styling
const Homepage = () => {
    return (
        <>
            <div className="section " id='one'>
                <div className='row vh-100 align-items-center'>
                    <div className='col-md-6 p-3 '>
                        <div className=''>
                            <h1 className='totheleft'>Online</h1>
                            <h1 className='totheleft'>Course</h1>
                            <h1 className='totheleft'>Compare</h1>
                            <p className='pt-3 p-3'>Find the best online courses for you. Make informed decisions. Start your learning journey today! Compare courses from different platforms</p>
                        </div> {/* end of the first col */}
                    </div>

                    <div className='col-md-6 p-3 d-flex flex-column align-items-center'>
                        <img className='img-fluid custom-img mb-3' src='https://www.onlinecoursecompare.com//home_page_logo.svg' alt='Online Course Compare' />
                        <a className='m-3 btn btn-lg btn-outline-dark' href="#two">Start</a>
                    </div> {/* end of the second col */}

                </div>
            </div>
        </>

    );
}

export default Homepage;