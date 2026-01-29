import React from "react";
import { useNavigate } from "react-router-dom";
import Skillup from "../src/assets/Skillup.png";
import mern from "./assets/mern.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <img src={Skillup} alt="Logo" width="120" />
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
      <div className="cards">
      <div className="card" style={{ width: "19rem",border:"3px solid white" ,borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}>
        <img src={mern} className="card-img-top" alt="..."style={{width:"18rem"}} />
          <div className="card-body" style={{ borderRadius: "10px" }}>
            <h4 className="card-title">MERN Stack web Development Course</h4>
            <p className="card-text">Register in this MERN stack web Development course to avail the knowledge and build beautiful web applications.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          
      </div>
       <div className="card" style={{ width: "19rem",border:"3px solid white" ,borderRadius:"10px",boxShadow:"5px 10px 18px #888888",onhover:}}>
        <img src={mern} className="card-img-top" alt="..."style={{width:"18rem"}} />
          <div className="card-body" style={{ borderRadius: "10px" }}>
            <h4 className="card-title">MERN Stack web Development Course</h4>
            <p className="card-text">Register in this MERN stack web Development course to avail the knowledge and build beautiful web applications.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          </div>
           <div className="card" style={{ width: "19rem",border:"3px solid white" ,borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}>
        <img src={mern} className="card-img-top" alt="..."style={{width:"18rem"}} />
          <div className="card-body" style={{ borderRadius: "10px" ,border:"3px solid white",background:"black"}}>
            <h4 className="card-title">MERN Stack web Development Course</h4>
            <p className="card-text">Register in this MERN stack web Development course to avail the knowledge and build beautiful web applications.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
    </div>
  );
};

export default Homepage;
