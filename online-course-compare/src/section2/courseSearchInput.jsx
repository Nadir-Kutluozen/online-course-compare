import React, { useState, useEffect } from "react";
import "./courseSearchInput.css";
import { SquareLoader } from "react-spinners";


const CourseSearchInput = ({ placeholder, onCourseSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(""); // 
  const [loading, setLoading] = useState(false);


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
    setSelectedCourse(course);          // show selected course in the input box
    setSearchTerm("");                  // clear the input box
    onCourseSelect(course);             // notify parent
  };
  

  return (
    <div className="course-search-wrapper">
  <div className="input-group shadow rounded-5">
  <span className="input-group-text bg-white border-0 " id="search-icon">
    <i className="bi bi-search"></i>
  </span>
  <input
    type="text"
    className="form-control border-0 rounded-end-5 "
    placeholder= {selectedCourse.title} // show selected course title
    aria-label="Search"
    aria-describedby="search-icon"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>
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
