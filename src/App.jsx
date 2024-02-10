import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Intro from './Components/Intro'
import Features from './Components/Features'
import Making from './Components/Making'
import Notes from './Components/Notes'
import Tokenomics from './Components/Tokenomics'
import Buy from './Components/Buy'
import Brands from './Components/Brands'

function App() {

  return (
    <>
      <Hero/>
      <Brands/>
      <Intro/>
      <Features/>
      <Making/>
      {/* <Notes/> */}
      {/* <Tokenomics/> */}
      <Buy/>
    </>
  )
}

export default App
