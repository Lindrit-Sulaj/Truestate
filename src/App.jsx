import React from "react"
import { Navbar } from './components';
import { Hero } from './sections'

function App() {
  return (
    <div className="font-default">
      <Navbar />
      <h1 className="mt-[170px]">Hello World</h1>
      <div className="h-[120vh]"></div>
      <Hero />
    </div>
  )
}

export default App
