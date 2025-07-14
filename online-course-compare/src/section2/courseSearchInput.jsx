import React, { useState, useEffect } from "react";
import "./courseSearchInput.css";

const CourseSearchInput = ({ placeholder, onCourseSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); // ✅

  useEffect(() => {
    fetch("https://onlinecourse-backend-okdb.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses:", err));
  }, []);

  useEffect(() => {
    const filtered = courses.filter(course =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm, courses]);
  
  const handleSelect = (course) => {
    setSelectedCourse(course);          // show selected course above
    setSearchTerm("");                  // ✅ clear the input box
    onCourseSelect(course);             // notify parent
  };
  

  return (
    <div className="course-search-wrapper">
      {selectedCourse && (
        <div className=" lead selected-course">
          <strong className="">{selectedCourse.title}</strong>
        </div>
      )}
      <input
        type="text"
        className="mb-3 custom-course-input"
        placeholder={placeholder || "Search by course name or category..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul className="search-results">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <li key={course.id} className="search-result-item" onClick={() => handleSelect(course)}>
                <img src={course.image} alt={course.title} className="course-image" />
                <h3 className="course-title">{course.title}</h3>
              </li>
            ))
          ) : (
            <li className="search-result-item no-match">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};


export default CourseSearchInput;
