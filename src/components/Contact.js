import React, {useState} from "react";
import { validateEmail } from "../utils/helpers";
import linkedIn from "../images/linkedin.png";
import github from "../images/github-logo2.png"
import "../styles/contact.css"

function Form() {

  const [email, setEmail] = useState(" ")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const [errorMessage, setErrorMessage] = useState('');

  const [validMessage, setValidMessage] = useState('')

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if(inputType === "email"){
      setEmail(inputValue)
    } else if(inputType === "name"){
      setName(inputValue)
    } else {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("hit")
    if(!validateEmail(email)){
      setErrorMessage("Email is invalid")
      return
    }
    setValidMessage(`Message sent! I look forward to connecting with you soon!`)

    setEmail('')
    setName("")
    setMessage("")
  }
  



return(
<div style={{height: "85vh"}} className=" container-fluid  mb-4 " align="center" id="contactSection">
    <h2 className="mt-4">Contact</h2>
    <h3>832-477-2224</h3>
    <a  href="mailto:ryanstreet122@gmail.com">ryanstreet122@gmail.com</a>
    <br></br>

    <div id="socialContainer" className="justify-space-between">
    <a href="https://www.linkedin.com/in/ryan-street-media/" target="_blank" rel="noopener noreferrer"><img id="linkedin" className="col-4 img-thumbnail mt-4"  src={linkedIn}></img></a>
      
    
    
    <a href="https://github.com/RyStreet" target="_blank" rel="noopener noreferrer" ><img  id="github" className="col-4 img-thumbnail mt-4" src={github} ></img></a>
    </div>
     {/* <div className="container  form-control" id="signUpForm">
      <form id="contactForm">
        <label for="name">Name:</label>
        <input id="user" name="name" value={name} onChange={handleInputChange} className="form-control"></input>

        <label for="email">Email:</label>
        <input id="email" type="email" name="email" className="form-control" onChange={handleInputChange} value={email}  ></input>
        
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

        <label for="message">Message:</label>
        <input value={message} onChange={handleInputChange} id="message" className="form-control form-control-lg"></input>

        <button className="mt-1 btn btn-primary" id='sendEmail' type="button" onClick={handleFormSubmit}>Send</button>
        
      
      </form>
      
    </div>
    {validMessage && (
        <div>
          <p className=" mt-2 error-text">{validMessage}</p>
        </div>
      )}  */}
    </div>

    

    )
}

export default Form;