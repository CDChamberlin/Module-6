import { useState } from "react";
function LoginForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submitResult, setSubmitResult] = useState("");
    const [passwordAttempts, setPasswordAttempts] = useState(0);
    const [showButton, setShowButton] = useState(true);
  
    // pseudo thoughts on adding limited amount of incorrect password attempts
    // need state to keep track of how many attempts
    // increase the attempt counter for each bad attempt
    // check the count against a set number then show a cooldown timer
  
    // check if passwordAttempts >= 3
    // if true hide button
    // when state is true show button
  
    const handleUpdateEmail = (e) => {
      console.log("handleUpdateEmail", e.target.value);
      // validation example
      if (e.target.value.includes("@")) {
        console.log("Validate true");
      } else {
        console.log("Validate false");
      }
      setUserEmail(e.target.value);
    };
  
    const handleUpdatePassword = (e) => {
      console.log("handleUpdatePassword", e.target.value);
      setUserPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let currentPasswordAttempts = passwordAttempts;
  
      if (userPassword.length < 5) {
        setSubmitResult("Password must be at least 5 characters long");
        currentPasswordAttempts += 1;
      } else if (userPassword === userEmail) {
        // if bad password
        //copy
        //modify
        //update state
  
        currentPasswordAttempts += 1;
        setSubmitResult("Password must not match email address");
      } else if (!userPassword.includes("#")) {
        // bad password
  
        currentPasswordAttempts += 1;
  
        setSubmitResult("Password cannot include a special character");
      } else if (userPassword[0] === userPassword[0].toLowerCase) {
        // bad password
  
        currentPasswordAttempts += 1;
  
        setSubmitResult("Password does not contain uppercase character");
      } else {
        setSubmitResult("Successful login");
      }
      setPasswordAttempts(currentPasswordAttempts);
  
      console.log("Current Attempts", currentPasswordAttempts);
      if (currentPasswordAttempts >= 3) {
        alert(
          "You have to many password attempts, go do something else and come back");
        setShowButton(false)
      }
    };
  
    return (
      <div className="LoginForm componentBox">
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              Email Address:
              {/* controlled form element needs both value and onChange. onChange handler uses e event param (e) to access target value. Whenever user types, new value is stored in the state. */}
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                // onChange={(e) => setUserEmail(e.target.value)}
                onChange={(e) => handleUpdateEmail(e)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                // onChange={(e) => setUserPassword(e.target.value)}
                onChange={(e) => handleUpdatePassword(e)}
              />
            </label>
          </div>
          {
            // Conditional rendering with ternary requires 3 pieces:
            //  comparison (expressions)
            //  ?true block
            //  : false block
          }
          <button disabled={!showButton}>Log In</button>
          <p>{submitResult}</p>
        </form>
      </div>
    );
  }
  
  export default LoginForm;