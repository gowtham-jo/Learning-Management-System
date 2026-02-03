import React from "react";
import { useNavigate } from "react-router-dom";
import Skillup from "../src/assets/Skillup.png";

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
          <div className="card" style="width: 18rem;">
  <img src="./assets" className="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
