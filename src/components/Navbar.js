import React from "react"
import "../styles/navbar.css"


function Navbar({currentPage, handlePageChange}){
    return(
    <nav style={{fontSize: "20px"}} id="navTop" class=" navbar  navbar-expand-lg navbar-light ">
        <a class="navbar-brand  link-light" id="name" href="#about" onClick={()=>handlePageChange("About")}>Ryan Street</a>
          <div id="links" class="navbar-nav col-3 mr-2" >
            <a class="nav-item nav-link link-light" href="#about" onClick={()=>handlePageChange("About")}>About <span class="sr-only"></span></a>
            <a class="nav-item nav-link link-light" href="#projects" onClick={()=>handlePageChange("Projects")}>Projects</a>
            <a class="nav-item nav-link link-light" href="#contactSection" onClick={()=>handlePageChange("Contact")}>Contact</a>
            {/* <a class="nav-item nav-link link-light" href="#resume" onClick={()=>handlePageChange("Resume")}>Resume</a> */}
           </div>
  </nav>

    )
}

export default Navbar