import React from "react";
import { useNavigate } from "react-router-dom";
import Skillup from "../src/assets/Skillup.png";
import mern from "./assets/mern.jpg";
import genai from "./assets/genai.jpg";
import cloudcomputing from "./assets/cloudcomputing.jpg";
import homevideo from "./assets/homevideo.mp4";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    
    
    <div className="home-container">
      <div className="video-background">
  <video autoPlay loop muted playsInline>
    <source src={homevideo} type="video/mp4" />
  </video>
</div>    
      <div className="home-content">
        <img src={Skillup} alt="Logo" width="90" />
        <div id="heading">
          Welcome to Skillup platform,
          <br />
          Where you can learn from top educators around the world!
        </div>
         

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
      </div>
      <h2>Explore our courses</h2>
      <div className="cards">
      <div className="card" style={{ width: "19rem",border:"3px solid white" ,borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}>
        <img src={mern} className="card-img-top" alt="..."style={{width:"18rem"}} />
          <div className="card-body" style={{ borderRadius: "10px" }}>
            <h4 className="card-title">MERN Stack web Development Course</h4>
            <p className="card-text">Register in this MERN stack web Development course to avail the knowledge and build beautiful web applications.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          
      </div>
       <div className="card" style={{ width: "19rem",border:"3px solid white" ,borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}>
        <img src={genai} className="card-img-top" alt="..."style={{width:"18rem"}} />
          <div className="card-body" style={{ borderRadius: "10px" }}>
            <h4 className="card-title">GEN AI Course</h4>
            <p className="card-text">This GEN AI course will teach you the fundamentals of Generative Artificial Intelligence.you will learn how to use AI tools effectively.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          </div>
           <div className="card" style={{ width: "19rem",border:"3px solid white" ,borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}>
        <img src={cloudcomputing} className="card-img-top" alt="..."style={{width:"18rem"}} />
          <div className="card-body" style={{ borderRadius: "10px" }}>
            <h4 className="card-title">Cloud Computing</h4>
            <p className="card-text">Register in this Cloud Computing course to learn about cloud infrastructure and deployment strategies. Topics:paas,saas,iaas.This is one of the recommeded course</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
          <footer className="footer">
        <p>&copy; 2024 Skillup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
