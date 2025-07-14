import React, { useEffect, useState } from 'react';
// This component fetches a list of courses from 
// the backend and displays them.
// It uses the `useEffect` hook to fetch data when 
// the component mounts and stores the  
// courses in the `courses` state variable. Each course
//  is displayed in a list with its title and price.

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to fetch courses:", err));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <strong>{course.title}</strong> — ${course.price}
            <p>beginner - {course.level}</p>
            <p>instructor_names - {course.instructor_names}</p>
            <p>rating - {course.rating}</p>
            <p> headline - {course.headline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
