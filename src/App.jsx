import React from "react"
import { Navbar } from './components';
import { Hero, AboutUs, FeaturedProperty, TrustedWebsite } from './sections'

function App() {
  return (
    <div className="font-default">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedProperty />
      <TrustedWebsite />
    </div>
  )
}

export default App
