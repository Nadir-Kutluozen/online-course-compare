import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './landingpage/homepage'
import Action from './action/action'
import Section2 from './section2/section2'
import CourseList from './courses/CourseList'
import Header from './header/Header'
import Footer from './footer/Footer'
import { inject } from '@vercel/analytics'

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
            <Section2 />
          </>
        } />
        <Route path="/courses" element={
          <>
          <CourseList />
          </>
          } />
        {/* Add more routes here, like <Route path="/about" element={<About />} /> */}
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<h1 className="text-center">404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
