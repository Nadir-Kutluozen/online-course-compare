import React from 'react';
import './homepage.css'; // Importing the CSS file for styling
import '../App.css'; // Importing the main App CSS file
const Homepage = () => {
    return (
        <>
        
            <div className="section " id='one'>
                <div className='row align-items-center'>
                    <div className='col-md-6 p-3 '>
                        <div className=''>
                            <h1 className='totheleft'>Online</h1>
                            <h1 className='totheleft custom-blue'>Course</h1>
                            <h1 className='totheleft'>Compare</h1>
                            <p className='pt-3  lead'>Find the best online courses for you. Make informed decisions. Start your learning journey today! Compare courses from different platforms such as Udemy, Coursera and edX </p>
                        </div> {/* end of the first col */}
                    </div>

                    <div className='col-md-6 p-3 d-flex flex-column align-items-center'>
   
                        <img className='img-fluid custom-img mb-3' src='/homepage_logo.svg' alt='Online Course Compare' />
                        
                    </div> {/* end of the second col */}

                </div>
            </div>
        </>

    );
}

export default Homepage;