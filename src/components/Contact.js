import React from "react";
// import "../styles/contact.css"

function Contact(){
    return(
<div className="container col-md-8 mb-4" id="contactSection">
    <h2>Contact</h2>
    <div className="container  form-control" id="signUpForm">
      <form id="contactForm">
        <label for="user">Name:</label>
        <input id="user" className="form-control"></input>
        <label for="email">Email:</label>
        <input id="email" className="form-control"></input>
        <label for="message">Message:</label>
        <input id="message" className="form-control form-control-lg"></input>
        <button className="mt-1 btn btn-primary" id='sendEmail' type="submit">Send</button>
      </form>
    </div>
    </div>

    )
}

export default Contact;