import React from "react"
import "../styles/projects.css"

export default function Projects(){
    return( 
    <section id="projects" className="container">
        <h2 id="projectTitle" >Projects</h2>

        <div className="row" id="projectCards ">
        
        <div className="col-sm-4">
            <div id="projectOne" className="card">
                <img className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Example Text</p>
                </div>
            </div>
        </div>

        <div className="col-sm-4">
            <div id="projectOne" className="card">
                <img className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Example Text</p>
                </div>
            </div>
        </div>

        <div className="col-sm-4">
            <div id="projectOne" className="card">
                <img className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Example Text</p>
                </div>
            </div>
        </div>

    <div id="bottomTwo" className="mt-4 row d-flex justify-content-around">
        <div className="col-sm-4">
            <div id="projectOne" className="card">
                <img className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Example Text</p>
                </div>
            </div>
        </div>

        <div className="col-sm-4">
            <div id="projectOne" className="card">
                <img className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Example Text</p>
                </div>
            </div>
        </div>
    
    </div>

    </div>



    </section>


   
    )
}