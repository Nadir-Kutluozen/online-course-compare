import React from 'react'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './landingpage/homepage'
import Action from './action/action'
import Section2 from './section2/section2'
import CourseList from './courses/CourseList'
import Header from './header/Header'
import Footer from './footer/Footer'
import { inject } from '@vercel/analytics'
import About from './about/About';
import FreeCourseList from './courses/FreeCourseList';
import PrivacyPolicy from './assets/PrivacyPolicy.jsx'
import LogoSlide from './assets/LogoSlide.jsx'
// Initialize Vercel Analytics
inject()

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={
          <>
            <Homepage />
            <Action />
            <LogoSlide/>
            <Section2 />
          </>
        } />
        <Route path="/courses" element={
          <>
          <CourseList />
          </>
          } />
        
        {/* Catch-all route for 404 Not Found */}
        <Route path="/about" element={<About />} />
        <Route path="/freeCourses" element={<FreeCourseList />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<h1 className="text-center">404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
