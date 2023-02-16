import React from "react"
import "../styles/navbar.css"

function Navbar(){
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" id="name" href="#">Ryan Street</a>
          <div id="links" class="navbar-nav col-3 mr-2">
            <a class="nav-item nav-link" href="#about">About <span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="#projects">Projects</a>
            <a class="nav-item nav-link" href="#contactSection">Contact</a>
            <a class="nav-item nav-link" href="https://www.linkedin.com/in/ryan-street-media/" target="_blank" rel="noopener noreferrer">Resume</a>
           </div>
  </nav>

    )
}

export default Navbar