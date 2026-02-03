import { useState } from "react";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const [strength, setStrength] = useState(0);
  const [strengthText, setStrengthText] = useState("Strength: Weak");

  // 🔐 Password strength
  const checkPasswordStrength = (value) => {
    let s = 0;
    if (value.length > 0) s += 20;
    if (value.length >= 8) s += 30;
    if (/[A-Z]/.test(value)) s += 20;
    if (/[0-9]/.test(value)) s += 20;
    if (/[^A-Za-z0-9]/.test(value)) s += 10;

    setStrength(s);

    if (s < 50) setStrengthText("Strength: Weak");
    else if (s < 80) setStrengthText("Strength: Good");
    else setStrengthText("Strength: Perfect");
  };

  // 👤 Name validation
  const validateName = (value) => {
    if (value.length < 2) {
      setNameError("Please enter a valid name");
      return false;
    }
    setNameError("");
    return true;
  };

  // 📧 Email validation
  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  // 📞 Contact validation
  const validateContact = (value) => {
    if (!/^\d*$/.test(value)) {
      setContactError("Only numbers allowed");
      return false;
    }
    if (value.length !== 10) {
      setContactError("Contact number must be 10 digits");
      return false;
    }
    setContactError("");
    return true;
  };

  // 👉 Signup button (Next)
  const handleSignup = () => {
    if (
      validateName(name) &&
      validateEmail(email) &&
      password.length >= 8
    ) {
      setStep(2);
    }
  };

  return (
    <div style={styles.body}>
      <h2>Registration Form</h2>

      <form style={styles.form}>
        {step === 1 && (
          <>
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
            />
            <p style={styles.error}>{nameError}</p>

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value);
              }}
            />

            <div style={styles.meter}>
              <div
                style={{
                  ...styles.bar,
                  width: `${strength}%`,
                  backgroundColor:
                    strength < 50 ? "red" : strength < 80 ? "orange" : "green",
                }}
              />
            </div>
            <p>{strengthText}</p>

            <label>Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            <p style={styles.error}>{emailError}</p>

            <button type="button" onClick={handleSignup}>
              Signup
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Contact Number</label>
            <input
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                validateContact(e.target.value);
              }}
            />
            <p style={styles.error}>{contactError}</p>

            <label>Address</label>
            <input />

            <label>City</label>
            <input />

            <button type="button" onClick={() => setStep(1)}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

const styles = {
  body: {
    backgroundColor: "aliceblue",
    minHeight: "100vh",
    paddingTop: "40px",
    textAlign: "center",
  },
  form: {
    width: "350px",
    margin: "auto",
  },
  meter: {
    width: "100%",
    height: "10px",
    background: "white",
    margin: "5px 0",
  },
  bar: {
    height: "100%",
    transition: "width 0.3s",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default RegistrationForm;
