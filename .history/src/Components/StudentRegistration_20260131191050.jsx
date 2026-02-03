import React from 'react'
import "../css/StudentRegistration.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const StudentRegistration = () => {
  return (
   
    <div className="container">
    <div className="header">
    <div className="text">Sign Up</div>
    <div className="underline"></div>
    </div>
    <div className="inputs">
      <div className="input">
         <label htmlFor="username">
    <img src={user_icon} alt="User Icon" />
    Username
  </label>
  <input type="text" id="username" />
      </div>
      <div className="input">
          <label htmlFor="email">
            <img src={email_icon} alt="email icon"/>
            Email
          </label>
      </div>
      <div className="input">
          <label htmlFor="password">
            <img src={password_icon} alt="password icon"/>
            password
          </label>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
      </div>
      <button type="button">SignUP</button>
    </div>
    </div>
    
  )
}

export default StudentRegistration