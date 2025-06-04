import React from 'react'

function Navbar() {
  return (
    <div id='nav-container'>
        <div id="name">
            <h2>vamshi</h2>
        </div>
        <div id="navs"  >
            <nav > 
                <a href="#home" id='home-a' >Home</a>
                <a href="#about">About</a>
                <a href="#skills" >Skills</a>
                <a href="#projects" >Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </div>
  )
}

export default Navbar