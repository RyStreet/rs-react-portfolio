import React from "react";
import headshot from "../images/headshot.jpg"
import "../styles/about.css"


function About() {
  return (
<div id="about" style={{height: 800}} className="container mb-2 mt-3">
    <div className="row">
        <h2 className="col-4" >About</h2>

        <div className="container">
            <div className="row justify-content-center">
                <p className="col-md-6">
                    Hi i'm Ryan, a young professional with experience in content marketing,
                    writing, and web development. Check out some of my projects, apps and
                    writing samples. Interested in reaching out? Don't hesitate to
                    contact me. Thanks for visiting my site!
                </p>
                
            </div>
            <div className="container"> 
            <div className="row justify-content-center">
            <img id="ryanPhoto" className="col-4 img-thumbnail mt-4" src={headshot}></img>
            </div>
            </div>
        </div>

    </div>
</div>
  );
}

export default About;
