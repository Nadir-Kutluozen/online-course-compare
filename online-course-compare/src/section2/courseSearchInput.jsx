import React from "react";
import './courseSearchInput.css'; // Importing the CSS file for styling

const CourseSearchInput = ({ placeholder }) => {
    return (
      <input
        type="text"
        className="form-control mb-3"
        placeholder={placeholder || "Search by course name..."}
      />
    );
  };
  
  export default CourseSearchInput;
  