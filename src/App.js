import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


function App() {
    return(
    <body id="main" className="">
    <Navbar/>
    <About />
    <Projects /> 
    <Resume/>
    <Contact />

    </body>
    )
}

export default App;