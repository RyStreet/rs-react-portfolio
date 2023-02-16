import React, {useState} from "react";

import Navbar from "./Navbar"
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";

export default function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState("About")

    const renderPage = () => {
        if (currentPage === "About"){
            return <About/>
        }
        if(currentPage === "Contact"){
            return <Contact/>
        }
        if(currentPage === "Projects") {
            return <Projects/>
        }
    };

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}