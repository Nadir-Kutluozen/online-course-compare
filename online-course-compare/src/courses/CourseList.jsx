import React, { useEffect, useState } from 'react';
import './CourseList.css'; 
import { renderStars } from '../action/helperFuncsAction';
import { formatUdemyUrl} from '../action/helperFuncsAction'; 
import LevelsDropDownBtn from '../assets/buttons/LevelsDropDownBtn'; 
import PriceRange from '../assets/buttons/PriceRange';

function CourseList() {
  const [courses, setCourses] = useState([]);         // all courses from API
  const [filteredCourses, setFilteredCourses] = useState([]); // courses after search
  const [searchQuery, setSearchQuery] = useState("");  // user's search input
  const [filterRating, setFilterRating] = useState(""); // rating filter
  const [filterLevel, setFilterLevel] = useState(""); // level filter
  const [selectedLevelLabel, setSelectedLevelLabel] = useState("Level"); // label for dropdown button
  const [maxPrice, setMaxPrice] = useState(150); // default to max


  // Fetch courses from the backend
  useEffect(() => {
    fetch("https://onlinecourse-backend-okdb.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);          // set all courses
        setFilteredCourses(data);  // initially show all
      })
      .catch((err) => console.error("Failed to fetch courses:", err));
  }, []);

  // Update filteredCourses whenever searchQuery or courses change
  useEffect(() => {
    const filtered = courses.filter((course) => 
      {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = filterRating ? course.rating >= parseFloat(filterRating) : true;
      const matchesLevel = filterLevel ? course.level.toLowerCase() === filterLevel.toLowerCase() : true;
      const matchesPrice = course.price <= maxPrice;

      return matchesSearch && matchesRating && matchesLevel && matchesPrice;
    });
    setFilteredCourses(filtered);
  }, [searchQuery, filterRating, filterLevel, courses, maxPrice]);
  
  return (
    <div className="container py-5">
      {/* Search Bar */}
      <div className="container mb-4">
        <div className="row justify-content-center g-2">
          {/* Search Bar */}
          <div className="col-12 col-md-6">
            <div className="input-group shadow-sm rounded-5">
              <span className="input-group-text bg-white border-0" id="search-icon">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 rounded-end-5"
                placeholder="Search courses..."
                aria-label="Search"
                aria-describedby="search-icon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="col-12 col-md-auto d-flex justify-content-center align-items-center gap-2">
            <button // Filter button for 4.5+ rating
              className={`btn btn-sm rounded-5 ${filterRating === "4.5" ? "btn-dark" : "btn-outline-dark"}`}
              onClick={() => setFilterRating("4.5")}
            >
              4.50+ Rating
            </button>
            <LevelsDropDownBtn 
                onSelectLevel={(level) => {
                  setFilterLevel(level); // filters the courses
                  setSelectedLevelLabel(level || "Level"); // updates the button label
                }} 
                label={selectedLevelLabel}
            />
            <PriceRange maxPrice={maxPrice} onChange={setMaxPrice} />
            <button
              className="btn btn-sm rounded-5 btn-outline-secondary"
              onClick={() => {
                setSearchQuery(""); // Clear search input
                setFilterRating(""); // Reset filter
                setFilterLevel(""); // Reset level filter
                setSelectedLevelLabel("Level"); // Reset dropdown label
                setMaxPrice(150); // Reset price filter
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center display-4 mb-4">Courses</h2>

      {/* Filtered Course List */}
      <div className="row g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            
            <div key={course.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <a
                href={formatUdemyUrl(course.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 course-card">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="p-3 img-fluid course-img"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text text-muted">{course.headline}</p>
                    <p className="mt-auto fw-bold">${course.price}</p>
                  </div>
                  <div className="card-footer small text-muted">
                    {renderStars(course.rating)} | {course.level} <br />
                    {course.instructor_names}
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center">No courses found.</p>
        )}
      </div>

    </div>
  );
}

export default CourseList;
