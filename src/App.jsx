import React from "react"
import { Navbar } from './components';
import { Hero, AboutUs, FeaturedProperty } from './sections'

function App() {
  return (
    <div className="font-default">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedProperty />
    </div>
  )
}

export default App
