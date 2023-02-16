import React from "react";
import headshot from "../images/headshot.jpg"
import "../styles/about.css"


function About() {
  return (
<div id="about" className="container mb-2 mt-3">
    <div className="row">
        <h2 className="" >About</h2>

        <div className="container">
            <div className="row justify-content-center">
                <p className="col-4">
                    Hi i'm Ryan, a young professional with experience in content marketing,
                    writing, and web development. Check out some of my projects, apps and
                    writing samples below. Interested in reaching out? Don't hesitate to
                    contact me using the information below. Thanks for visiting my site!
                </p>
                <img id="ryanPhoto" className=" img-thumbnail" src={headshot}></img>
            </div>
        </div>

    </div>
</div>
  );
}

export default About;
