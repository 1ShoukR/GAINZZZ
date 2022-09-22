import React from "react";
import sendSignUp from "../../actions/signUp";
import "../../css/signUpForm.css"

const SignUpPage = () => {
  return (
    <>
      <form className="signUpForm">
        <div className="form-container">
          <div className="firstNameContainer">
            <label classname="" htmlFor="firstName">First name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Enter your first name"
            />
          </div>
          <div className="lastNameContainer">
            <label htmlFor="lastName">Last name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        <div className="usernameContainer">
          <label htmlFor="username" required>
            username
          </label>
          <input name="username" type="text" placeholder="username" />
        </div>
        <div className="emailContainer">
          <label>Email address</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div className="passwordContainer">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Must contain 6+ characters"
          />
          <button onClick={(e) => sendSignUp(e)}>Register</button>
        </div>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
