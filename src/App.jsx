import React from 'react';
import './App.css'

import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <Nav/>
      <div id="hero">
        <Hero/>
      </div>
      <div id="about" style={{ scrollMarginTop: '80px' }}>
        <About/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Footer/>
      </div>
    </div>
  )
}

export default App
