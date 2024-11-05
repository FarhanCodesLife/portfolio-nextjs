import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AddProject from './components/AddProject';

const page = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <AddProject />
      <Contact />
    </main>
  )
}

export default page