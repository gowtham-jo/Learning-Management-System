import React from "react";
import { useNavigate } from "react-router-dom";
import Skillup from "../src/assets/Skillup.png";
// import "./css/Homepage.css";
import 

import mern from "./assets/mern.jpg";
import genai from "./assets/genai.jpg";
import cloudcomputing from "./assets/cloudcomputing.jpg";
import homevideo from "./assets/homevideo.mp4";
import lmsmain from "./assets/lmsmain.avif";
import cryptography from "./assets/cryptography.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={homevideo} type="video/mp4" />
        </video>
      </div>

      
      <img src={lmsmain} alt="Logo" className="logo" />

      
      <div className="buttons">
        <button
          className="btn orange"
          onClick={() => navigate("/teacher-registration")}
        >
          Sign up as Teacher
        </button>

        <button
          className="btn blue"
          onClick={() => navigate("/student-registration")}
        >
          Sign up as Student
        </button>
      </div>

  <div className="hero">
    <div className="heading">
      <h2>
        Welcome to Skillup platform,
        <br />
        Where you can learn from top educators around the world!
      </h2>
    </div>
  </div>
<div className="courses-section">
  <h2 className="courses-title">Explore our courses</h2>
        <div className="cards">
         
        
          <div className="card" style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}>
            <img src={mern} alt="" style={{ width: "18rem" }} />
            <div className="card-body">
              <h4>MERN Stack Web Development</h4>
              <p>Register in this MERN stack course to build web apps.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}>
            <img src={genai} alt="" style={{ width: "18rem" }} />
            <div className="card-body">
              <h4>GEN AI Course</h4>
              <p>Learn Generative AI fundamentals and tools.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card" style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}>
            <img src={cryptography} alt="" style={{ width: "18rem" }} />
            <div className="card-body">
              <h4>Cryptography</h4>
              <p>Learn cryptography fundamentals and applications.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

         
          <div className="card" style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}>
            <img src={cloudcomputing} alt="" style={{ width: "18rem" }} />
            <div className="card-body">
              <h4>Cloud Computing</h4>
              <p>Learn cloud infrastructure, PaaS, SaaS, IaaS.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
       
      </div>

      <footer className="footer">
        <p>&copy; 2024 Skillup. All rights reserved.</p>
      </footer>
</div>
    </div>
  );
};

export default Homepage;
