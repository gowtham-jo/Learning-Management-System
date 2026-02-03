import React from 'react'
import "./css/StudentRegistration.css";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";

const StudentRegistration = () => {
  return (
   
    <div className="container">
    <div className="header">
    <div className="text">Sign Up</div>
    <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="input">
        <label for="username">User Name</label>
        <img src={user_icon} alt="User Icon" />
        <input type="text"/>
      </div>
      <div className="input">
           <label for="email">Email</label>
        <img src={email_icon} alt="Email Icon" />
        <input type="email" />
      </div>
      <div className="input">
        <img src={password_icon} alt="Password Icon" />
        <input type="password" />
      </div>
      <button type="button">SignUP</button>
    </div>
    </div>
    

    
  )
}

export default StudentRegistration