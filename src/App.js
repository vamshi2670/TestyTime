import React from 'react'
import  './Portfolio.css'
import Home from './portfolio/Home'
import Navbar from './portfolio/Navbar'
import Skills from './portfolio/Skills'
import About from './portfolio/About'
import Contact from './portfolio/Contact'
import Projects from './portfolio/Projects'
import Footer from './portfolio/Footer'
function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App