import React, { useState } from "react";
import styles from "../css/StudentRegistration.module.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const StudentRegistration = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.inputs}>
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className={styles.input}>
            <label htmlFor="username">
              <img src={user_icon} alt="User Icon" />
              Username:
            </label>
            <input type="text" id="username" />
          </div>
        )}

        <div className={styles.input}>
          <label htmlFor="email">
            <img src={email_icon} alt="email icon" />
            Email:
          </label>
          <input type="email" id="email" />
        </div>

        <div className={styles.input}>
          <label htmlFor="password">
            <img src={password_icon} alt="password icon" />
            password:
          </label>
          <input type="password" id="password" />
        </div>

        {action === "Login" ? (
          <div className={styles["forgot-password"]}>
            Lost password? <span>Click here!</span>
          </div>
        ) : (
          <div></div>
        )}

        <div className={styles["submit-container"]}>
          <div
            className={`${styles.submit} ${
              action === "Login" ? styles.gray : ""
            }`}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>

          <div
            className={`${styles.submit} ${
              action === "Sign Up" ? styles.gray : ""
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
