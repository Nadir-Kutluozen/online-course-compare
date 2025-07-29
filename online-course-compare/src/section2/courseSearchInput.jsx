import React, { useState, useEffect } from "react";
import "./courseSearchInput.css";
import { SquareLoader } from "react-spinners";

const CourseSearchInput = ({ placeholder, onCourseSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredCourses([]);
      return;
    }

    setLoading(true);
    const params = new URLSearchParams();
    params.append("search", searchTerm);
    params.append("limit", 10); // only top 10 results

    fetch(`https://onlinecourse-backend-okdb.onrender.com/courses?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch filtered courses:", err);
        setLoading(false);
      });
  }, [searchTerm]);

  const handleSelect = (course) => {
    setSelectedCourse(course);
    setSearchTerm("");
    onCourseSelect(course);
  };

  return (
    <div className="course-search-wrapper">
      <div className="input-group shadow rounded-5">
        <span className="input-group-text bg-white border-0" id="search-icon">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-0 rounded-end-5"
          placeholder={selectedCourse.title || placeholder || "Search courses..."}
          aria-label="Search"
          aria-describedby="search-icon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && (
        <div className="text-center my-2">
          <SquareLoader size={30} color="#007bff" />
        </div>
      )}

      {searchTerm && !loading && (
        <ul className="search-results">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <li
                key={course.id}
                className="search-result-item"
                onClick={() => handleSelect(course)}
              >
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
