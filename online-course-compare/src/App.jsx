import { useRef } from 'react'
import './App.css'
import Section2 from './section2/section2'
import Homepage from './landingpage/homepage'
import { inject } from '@vercel/analytics' 
import Action from './action/action'

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
