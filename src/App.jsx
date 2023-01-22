import React from "react"
import { Navbar } from './components';
import { Hero, AboutUs, FeaturedProperty, TrustedWebsite, Faq, Testimonials } from './sections'

function App() {
  return (
    <div className="font-default">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedProperty />
      <TrustedWebsite />
      <Faq />
      <Testimonials />
    </div>
  )
}

export default App
