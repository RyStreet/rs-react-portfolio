import React, {useState} from "react";
import { validateEmail } from "../utils/helpers";

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
<div style={{height: 800}} className="container col-md-8 mb-4" id="contactSection">
    <h2>Contact</h2>
    <div className="container  form-control" id="signUpForm">
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
      )}
    </div>

    

    )
}

export default Form;