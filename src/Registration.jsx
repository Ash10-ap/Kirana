import axios from "axios";
import React, { useState } from "react";
// import image from "../src/images.jpeg";

import "../src/Registration.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function emailOnChangeHandler(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(emailRegex.test(newEmail));
  }

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function passwordChangeHandler(event) {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsPasswordValid(passwordRegex.test(newPassword));
  }

  function contactChangeHandler(event) {
    setContact(event.target.value);
  }

  function addressChangeHandler(event) {
    setAddress(event.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    if (username === "") {
      setUsernameError(true);
    }

    if (email === "") {
      setEmailError(true);
    }

    if (password === "") {
      setPassError("password field is empty");
    }

    if (address === "") {
      setAddressError(true);
    }

    if (contact === "") {
      setContactError(true);
    }

    const formData = {
      email,
      password,
      contact,
      username,
      address
    }
    axios.post('http://localhost:3030/login',formData).then((response)=>{
     const data = response.data;
     if(response.status !== 201){
      // alert("please check the fields");
     }
     
    }).catch((error)=>{
      console.log("something went wrong...")
    })

    setEmail("");
    setAddress("");
    setUsername("");
    setPassword("");
    setContact("");
  }

  return (
    <div className="main-container">
      <div className="left-img">
        {/* <img src={image} alt="image" srcset="" /> */}
      </div>

      <div className="right-info">
        <h1>Registration</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div className="login-input">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name=""
              value={email}
              id=""
              onChange={emailOnChangeHandler}
              placeholder="enter your email"
            />
            {!isEmailValid ? (
              <p>Please enter a valid email address.</p>
            ) : emailError ? (
              "enter the field"
            ) : (
              ""
            )}
          </div>

          <div className="login-input">
            <label htmlFor="">Username</label>
            <input
              type="text"
              name=""
              id=""
              value={username}
              placeholder="enter your username"
              onChange={usernameChangeHandler}
            />
            <p style={{ color: "red" }}>
              {usernameError ? "enter the field" : ""}
            </p>
          </div>

          <div className="login-input">
            <label htmlFor="">Contact</label>
            <input
              type="number"
              name=""
              id=""
              value={contact}
              placeholder="enter your contact"
              onChange={contactChangeHandler}
            />
            <p style={{ color: "red" }}>
              {contactError ? "enter the field" : ""}
            </p>
          </div>

          <div className="login-input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              id=""
              value={password}
              placeholder="enter your password"
              onChange={passwordChangeHandler}
            />
            {!isPasswordValid ? (
              <p>
                Password must be at least 8 characters long and contain at least
                one letter and one number.
              </p>
            ) : passError ? (
              <p style={{ color: "red" }}>enter the field</p>
            ) : (
              ""
            )}
          </div>

          <div className="login-input">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name=""
              id=""
              value={address}
              placeholder=" enter your address"
              onChange={addressChangeHandler}
            />
            <p style={{ color: "red" }}>
              {addressError ? "enter the field" : ""}
            </p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
