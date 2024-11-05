import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

const page = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  )
}

export default page