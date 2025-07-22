import React from 'react';
import './homepage.css'; // Importing the CSS file for styling
import '../App.css'; // Importing the main App CSS file
const Homepage = () => {
    return (
        <>
        
            <div className="section " id='one'>
                <div className='row vh-100 align-items-center'>
                    <div className='col-md-6 p-3 '>
                        <div className=''>
                            
                            <h1 className='totheleft'>Online</h1>
                            <h1 className='totheleft custom-blue'>Course</h1>
                            <h1 className='totheleft'>Compare</h1>
                            <p className='pt-3  lead'>Find the best online courses for you. Make informed decisions. Start your learning journey today! Compare courses from different platforms such as Udemy, Coursera and edX </p>
                        </div> {/* end of the first col */}
                    </div>

                    <div className='col-md-6 p-3 d-flex flex-column align-items-center'>
                        <div className="row ">
                            <div className='col-4 d-flex justify-content-center align-items-center udemy-logo'>
                                <img  className="" src="/edx_logo.png" alt="Udemy Logo" />
                            </div>
                            <div className='col-4 d-flex justify-content-center align-items-center udemy-logo'>
                                <img className="" src="/corsera_logo.png" alt="Udemy Logo" />
                            </div>
                            <div className='col-4 d-flex justify-content-center align-items-center udemy-logo'>
                                <img src="/udemy_logo.png" alt="Udemy Logo" />
                            </div>
                        </div>
                        <img className='img-fluid custom-img mb-3' src='/home_page_logo.svg' alt='Online Course Compare' />
                        
                    </div> {/* end of the second col */}

                </div>
            </div>
        </>

    );
}

export default Homepage;