import React from "react";  
import CourseSearchInput from "../section2/courseSearchInput";
import "./action.css"; // Import the CSS file for styling
const Action = () => {
    return (
        <>
        <div className="action-section p-5" id="action">
        <h2 className="pb-4 text-center display-1">Ready to compare?</h2>
        <p className="pb-4 lead text-center">the result will appear down below </p>
            <div className="row align-items-center text-center">
                <div className="col-md-5">
                    <CourseSearchInput placeholder="Search by courses..." />
                </div>

                <div className="col-md-2">
                    <h2 className=" vs">vs</h2>
                </div>

                <div className="col-md-5 ">
                    <CourseSearchInput placeholder="Search by courses..." />
                </div>
                <div className="text-center">
                <button href="" className="btn-custom">Compare <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
</svg></button>
            </div>
            </div>
        </div>
        
            
        </>
    );
};

export default Action;