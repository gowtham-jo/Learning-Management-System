import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Homepage.module.css";

import mern from "./assets/mern.jpg";
import genai from "./assets/genai.jpg";
import cloudcomputing from "./assets/cloudcomputing.jpg";
import homevideo from "./assets/homevideo.mp4";
import lmsmain from "./assets/lmsmain.avif";
import cryptography from "./assets/cryptography.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    
    <div className={styles["home-container"]}>
      
      <div className={styles["video-background"]}>
        <video autoPlay loop muted playsInline>
          <source src={homevideo} type="video/mp4" />
        </video>
      </div>

      <img src={lmsmain} alt="Logo" className={styles.logo} />

      <div className={styles.buttons}>
        <button
          className={`${styles.btn} ${styles.orange}`}
          onClick={() => navigate("/teacher-registration")}
        >
          Sign up as Teacher
        </button>

        <button
          className={`${styles.btn} ${styles.blue}`}
          onClick={() => navigate("/student-registration")}
        >
          Sign up as Student
        </button>
      </div>

      <div className={styles.hero}>
        <div className={styles.heading}>
          <h2>
            Welcome to Skillup platform,
            <br />
            Where you can learn from top educators around the world!
          </h2>
        </div>
      </div>

      <div className={styles["courses-section"]}>
        <h2 className={styles["courses-title"]}>Explore our courses</h2>

        <div className={styles.cards}>
          
          <div
            className={styles.card}
            style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}
          >
            <img src={mern} alt="" style={{ width: "18rem" }} />
            <div className={styles["card-body"]}>
              <h4>MERN Stack Web Development</h4>
              <p>Register in this MERN stack course to build web apps.</p>
              <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className={styles.card}
            style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}
          >
            <img src={genai} alt="" style={{ width: "18rem" }} />
            <div className={styles["card-body"]}>
              <h4>GEN AI Course</h4>
              <p>Learn Generative AI fundamentals and tools.</p>
              <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className={styles.card}
            style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}
          >
            <img src={cryptography} alt="" style={{ width: "18rem" }} />
            <div className={styles["card-body"]}>
              <h4>Cryptography</h4>
              <p>Learn cryptography fundamentals and applications.</p>
              <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Go somewhere
              </a>
            </div>
          </div>

          <div
            className={styles.card}
            style={{ width: "19rem", border: "3px solid white", borderRadius: "10px" }}
          >
            <img src={cloudcomputing} alt="" style={{ width: "18rem" }} />
            <div className={styles["card-body"]}>
              <h4>Cloud Computing</h4>
              <p>Learn cloud infrastructure, PaaS, SaaS, IaaS.</p>
              <a href="#" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Go somewhere
              </a>
            </div>
          </div>

        </div>

        <footer className={styles.footer}>
          <p>&copy; 2024 Skillup. All rights reserved.</p>
        </footer>
      </div>
      <div className={styles.debugCheck}></div>
    </div>
    
  );
};

export default Homepage;
