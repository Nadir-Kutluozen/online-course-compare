import React from 'react'
import './App.css'
import Section2 from './section2/section2'
import Homepage from './landingpage/homepage'
import Action from './action/action'
import { inject } from '@vercel/analytics' 
import Footer from './footer/Footer'
import Header from './header/Header'
import CourseList from './courses/CourseList'
import 'bootstrap-icons/font/bootstrap-icons.css';



inject() 
function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Action />
      <Section2 />
      <Footer />
    </>
  )
}

export default App
