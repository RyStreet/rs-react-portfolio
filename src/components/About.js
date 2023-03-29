import React from "react";
import headshot from "../images/headshot.jpg"
import "../styles/about.css"


function About() {
  return (
<div id="about" style={{height: "100%"}} className="container mb-2 mt-3">
    <div className="row">
        <h2 className="col-4" >About</h2>

        <div className="container">
            <div className="row justify-content-center">
                <p id="aboutP" className="col-md-8" style={{fontSize:"25px"}}>
                    Hi i'm Ryan, a young professional with experience in content marketing,
                    writing, and web development. Check out some of my projects, apps and
                    writing samples. Interested in reaching out? Don't hesitate to
                    contact me. Thanks for visiting my site!
                </p>
                <br></br>
               
                
            </div>
            <div className="container"> 
            <div className="row justify-content-center">
            <img id="ryanPhoto" className="col-4 img-thumbnail mt-4" src={headshot}></img>
            </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
            
    <div className="card" style={{height:"100%", margin: "10px"}}>
        <div className="title" style={{color: "black", marginTop:"15px"}}>
            <h3>Languages</h3>
        </div>
        <div className="cardContent" style={{color: "black", fontSize:"20px"}}>
            <p>HTML, CSS, JavaScript, SQL, MySQL, React</p>
        </div>
    </div>

    <div className="card" style={{height:"100%", margin: "10px"}}>
        <div className="title" style={{color: "black", marginTop:"15px"}}>
            <h3>Tools</h3>
        </div>
        <div className="cardContent" style={{color: "black", fontSize:"20px" }}>
            <p>MongoDB, Node, GitHub, Wordpress, Wix, Google Analytics, Adobe Creative Suite, Canva, Office Suite, Slack</p>
        </div>
    </div>

    <div className="card" style={{height:"100%" , margin: "10px", fontSize:"20px"}}>
        <div className="title" style={{color: "black", marginTop:"15px"}}>
            <h3>Frameworks</h3>
        </div>
        <div className="cardContent" style={{color: "black"}}>
            <p>OOP, MERN Stack, MVC, RESTful API, Agile, Express, Bootstrap, Tailwind, Semantic</p>
        </div>
    </div>

                </div>
            
            </div>
           
        </div>

    </div>
</div>
  );
}

export default About;
