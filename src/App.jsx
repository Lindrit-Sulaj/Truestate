import React from "react"
import { Navbar } from './components';
import { Hero, AboutUs } from './sections'

function App() {
  return (
    <div className="font-default">
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  )
}

export default App
