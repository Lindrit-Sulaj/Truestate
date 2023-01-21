import React from "react"
import { Navbar } from './components';
import { Hero, AboutUs, FeaturedProperty, TrustedWebsite, Faq } from './sections'

function App() {
  return (
    <div className="font-default">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedProperty />
      <TrustedWebsite />
      <Faq />
    </div>
  )
}

export default App
