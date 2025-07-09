import { useRef } from 'react'
import './App.css'
import Section2 from './section2/section2'  // Importing Section2 component
import Homepage from './landingpage/homepage'

function App() {

  return (
    <>
    <Homepage /> {/* Rendering Homepage component */}
    <Section2/>  {/* Rendering Section2 component */}
    </>
  )
}

export default App
