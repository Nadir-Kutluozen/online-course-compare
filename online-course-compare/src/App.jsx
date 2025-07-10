import React from 'react'
import './App.css'
import Section2 from './section2/section2'
import Homepage from './landingpage/homepage'
import Action from './action/action'
import { inject } from '@vercel/analytics' 


inject() 
function App() {
  return (
    <>
      <Homepage />
      <Action />
      <Section2 />
    </>
  )
}

export default App
