import React from "react";
import './courseSearchInput.css'; // Importing the CSS file for styling

const CourseSearchInput = ({ placeholder }) => {
    return (
      <input
        type="text"
        className="mb-3 custom-course-input"
        placeholder={placeholder || "Search by course name..."}
      />
    );
  };
  
  export default CourseSearchInput;
  