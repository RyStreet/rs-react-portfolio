import React, {useState} from "react"
import { Document, Page } from "react-pdf";
import resume from "../images/resume.pdf"

function Resume(){

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  

    return (
    <div>
    <h2>Resume</h2>
    <Document file={resume}>
        <Page pageNumber={pageNumber}/>
    </Document>
    </div>

    

    )
}

export default Resume;