import React from "react";  
import CourseSearchInput from "../section2/courseSearchInput";
const Action = () => {
    return (
        <>
            <h2 className="mb-4 text-center">Ready to compare?</h2>
            <p className="mb-4 lead text-center">the result will appear down below </p>
            <div className="row align-items-center text-center">
                <div className="col-md-5">
                    <CourseSearchInput placeholder="Search by courses..." />
                </div>

                <div className="col-md-2">
                    <h2 className="my-3">vs</h2>
                </div>

                <div className="col-md-5">
                    <CourseSearchInput placeholder="Search by courses..." />
                </div>
            </div>
            <div className="text-center py-5">
                <a href="" className="btn btn-primary btn-lg">compare</a>
            </div>
        </>
    );
};

export default Action;