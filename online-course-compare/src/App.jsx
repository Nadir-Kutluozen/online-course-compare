import { useRef } from 'react'
import './App.css'
import Section2 from './section2/section2'
import Homepage from './landingpage/homepage'
import { inject } from '@vercel/analytics' // ✅ correct import

inject() // ✅ activate analytics

function App() {
  return (
    <>
      <Homepage />
      <Section2 />
    </>
  )
}

export default App
