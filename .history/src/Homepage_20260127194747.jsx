import React from "react";
import { useNavigate } from "react-router-dom";
import Skillup from "../src/assets/Skillup.png";
import mern from "../src/assets/mern.png";

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
      
    </div>
  );
};

export default Homepage;
