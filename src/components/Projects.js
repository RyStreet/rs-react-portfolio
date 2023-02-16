import React from "react"
import "../styles/projects.css"
import munchr from "../images/munchr-png.png"
import tutor from "../images/tutor.JPG"
import techBlog from "../images/tech-blog.png"
import readme from "../images/ReadMeGen.gif"
import tracker from "../images/sql-tracker.gif"
import gorilla from "../images/guerrilla.png"

export default function Projects(){
    return( 
    <section id="projects" className="container mb-4">
        <h2 id="projectTitle" >Projects</h2>

    <div className="row" id="projectCards ">
        
        
     <div className="col-sm-4  mb-2">
     <a href="https://github.com/RyStreet/Munchr" target="_blank" rel="noopener noreferrer">
            <div id="projectOne" className="card">
            
                <img id="imgOne" src={munchr} className="card-img-top" />
                
                <div className="card-body">
                    <h5 className="card-title">Munchr</h5>
                    <p className="card-text">A food and drink pairing app</p>
                </div>
            </div>
            </a>
        </div>
        
    
        <div className="col-sm-4 mb-2">
            <div id="projectTwo" className="card">
            <a href="https://github.com/RyStreet/tech-blog" target="_blank" rel="noopener noreferrer">
                <img  src={techBlog} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Tech Blog</h5>
                    <p className="card-text">A CMS style blog utilizing the MVC paradigm</p>
                </div>
                </a>
            </div>
            
        </div>
       

        
        <div className="col mb-2">
            <div id="projectThree" className="card">
            <a href="https://github.com/RyStreet/GetATutor" target="_blank" rel="noopener noreferrer">
                <img src={tutor} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">GetATutor</h5>
                    <p className="card-text">Find your next great tutor with this app</p>
                </div>
                </a>
            </div>
        </div>
        

    
        
        <div className="col-sm-4 mb-2">
            <div id="projectOne" className="card">
            <a href="https://github.com/RyStreet/readme-gen" target="_blank" rel="noopener noreferrer">
                <img src={readme} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">README Generator</h5>
                    <p className="card-text">Create READMEs directly from the CLI</p>
                </div>
            </a>
            </div>
        </div>
      

        
        <div className="col-sm-4 mb-2">
            <div id="projectOne" className="card">
            <a href="https://github.com/RyStreet/sql-employee-tracker" target="_blank" rel="noopener noreferrer">
                <img src={tracker} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">SQL Employee Tracker</h5>
                    <p className="card-text">Create, track and manage employees with this SQL database</p>
                </div>
                </a>
            </div>
        </div>

        <div className="col-sm-4 mb-2">
            <div id="projectOne" className="card">
            <a href="https://ryanstreetmedia.wordpress.com/blog/" target="_blank" rel="noopener noreferrer">
                <img src={gorilla} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Writing Samples</h5>
                    <p className="card-text">Check out my copywriting portfolio!</p>
                </div>
                </a>
            </div>
        </div>
    
    </div>

    



    </section>


   
    )
}