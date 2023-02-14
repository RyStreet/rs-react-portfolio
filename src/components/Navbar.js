import React from "react"
import "../styles/navbar.css"

function Navbar(){
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" id="name" href="#">Ryan Street</a>
          <div id="links" class="navbar-nav">
            <a class="nav-item nav-link" href="">About <span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="">Projects</a>
            <a class="nav-item nav-link" href="">Resume</a>
            <a class="nav-item nav-link" href="">Contact</a>
           </div>
  </nav>

    )
}

export default Navbar