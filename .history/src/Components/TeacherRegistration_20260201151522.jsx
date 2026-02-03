import React, { useState } from "react";
import styles from "../css/StudentRegistration.module.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import experienceLogo from "../assets/ExperienceLogo.png";

const StudentRegistration = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className={styles.studentContainer}>
      <div className={styles.studentHeader}>
        <div className={styles.studentText}>{action}</div>
        <div className={styles.studentUnderline}></div>
      </div>

      <div className={styles.studentInputs}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className={styles.studentInput}>
            <label htmlFor="username">
              <img src={user_icon} alt="User Icon" />
              Username:
            </label>
            <input type="text" id="username" />
          </div>
        )}

        <div className={styles.studentInput}>
          <label htmlFor="email">
            <img src={email_icon} alt="email icon" />
            Email:
          </label>
          <input type="email" id="email"/>
        </div>

        <div className={styles.studentInput}>
          <label htmlFor="password">
            <img src={password_icon} alt="password icon" />
            password:
          </label>
          <input type="password" id="password" />
        </div>
        <div className={styles.studentInput}>
          <label htmlFor="Experience">
           <img src={experienceLogo} className="experienceLogo" alt="Experience in Teaching" />

            Experience:
          </label>
          <input type="text" id="experience" />
        </div>

        {action === "Login" ? (
          <div className={styles.studentForgotPassword}>
            Lost password? <span>Click here!</span>
          </div>
        ) : (
          <div></div>
        )}

        <div className={styles.studentSubmitContainer}>
          <div
            className={`${styles.studentSubmit} ${
              action === "Login" ? styles.studentGray : ""
            }`}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>

          <div
            className={`${styles.studentSubmit} ${
              action === "Sign Up" ? styles.studentGray : ""
            }`}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
