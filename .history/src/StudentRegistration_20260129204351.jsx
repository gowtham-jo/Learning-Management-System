<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>

    <style>
        body {
            background-color:aliceblue;
            text-align: center;
            margin-top: 40px;
        }

        .step {
            display: none;
        }

        #step1 {
            display: block;
            margin-bottom: 200px;
            padding: 20px;
        }

        form {
            width: 350px;
            margin: auto;
        }

        label, input {
            display: block;
            width: 100%;
            margin-bottom: 12px;
        }

        input {
            padding: 8px;
        }

        button {
            background-color: green;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 10px;
        }
         #strengthMeter{
            width:100%;
            height:10px;
            margin:5px 0;
            background: white;

        }
        #strengthBar{
            height:100%;
            width:0;
            transition: width 0.3s;
        }
    </style>
</head>

<body>

<h2>Registration Form</h2>

<form>

    <!-- STEP 1 -->
    <div id="step1" className="step">
        <label>Name</label>
        <input type="text" id="UserName" onInput="CheckValidName()"required>
        <p id="nameError" style="color:red;"></p>
        <label>password</label>
        <input type="password"id="userPassword" onInput="checkPasswordStrength()" required>
         <div id="strengthMeter">
            <div id="strengthBar"></div>  
        </div> 
        <p id="strengthText">Strength:Weak</p>
        <label>Email</label>
        <input type="email" id="emailInput" onInput="validateEmail()"required>
        <p id="emailError" style="color:red;"></p>


        <label>Age</label>
        <input type="number" min="13" max="120">

        <button type="button" onclick="nextStep()">Next</button>
    </div>

    <!-- STEP 2 -->
    <div id="step2" className="step">
        <label>Contact Number</label>
        <input type="text" id="contactInput" onInput="validateContact()">
        <p id="contactError" style="color:red;"></p>

        <label>Address</label>
        <input type="text">

        <label>City</label>
        <input type="text">

        <button type="button" onclick="prevStep()">Previous</button>
        <button type="submit">Submit</button>
    </div>

</form>

<script>
    function nextStep() {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
    }

    function prevStep() {
        document.getElementById("step2").style.display = "none";
        document.getElementById("step1").style.display = "block";
    }
     function checkPasswordStrength(){
        const password=document.getElementById("userPassword").value;
        const bar=document.getElementById("strengthBar");
        const text=document.getElementById("strengthText");
        let strength=0;
        if(password.length>0) strength+=20;
        if(password.length>=8) strength +=30;
        if(/[A-Z]/.test(password)) strength+=20;
        if(/[0-9]/.test(password)) strength+=20;
        if(/[^A-Za-z0-9]/.test(password)) strength+=10;
        bar.style.width=strength+"%";
       if(strength<50){
        bar.style.backgroundColor="red";
        text.textContent = "Strength:weak";
       }
        else if(strength<80){
            bar.style.backgroundColor="orange";
            text.textContent="strength:Good";

        }
        else {
            bar.style.backgroundColor="green";
            text.textContent="strength:perfect";
        }

       }
       function CheckValidName(){
        const Name=document.getElementById("UserName").value;
        const error=document.getElementById("nameError")
        if(Name.length<2) {
            error.textContent="please enter a valid name";
            return false;
       }
       error.textContent="";
       return true;
    }
function validateEmail() {
  const email = document.getElementById("emailInput").value.trim();
  const error = document.getElementById("emailError");

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    error.textContent = "Email is required";
    return false;
  }

  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address";
    return false;
  }

  error.textContent = "";
  return true;
}
function validateContact(){
    const contact=document.getElementById("contactInput").value.trim();
    const error=document.getElementById("contactError");
     if (!/^\d*$/.test(contact)) {
    error.textContent = "Only numbers are allowed";
    return false;
  }

  
  if (contact.length !== 10) {
    error.textContent = "Contact number must be 10 digits";
    return false;
  }

  
  error.textContent = "";
  return true
}
</script>

</body>
</html>
