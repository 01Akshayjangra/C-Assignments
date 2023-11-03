import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmitIdPass = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setShowAlert(true);
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };

  // Function to hide the alert
  const hideAlert = () => {
    setShowAlert(false);
  };


  return (
    <div className="login__wrapper-main">
      <div className="login__wrapper">
        <div className="login__body">
          <div className="login__left">
            <div>
              <div className="login__left-logo">
                LOGO
              </div>
              <div className="login__left-content">
                Board.
              </div>
              <div className="login__left-social">
                <div className="login__left-social-git">
                  <img src="./assets/github.svg" alt="" />
                </div>
                <div className="login__left-social-twi">
                  <img src="./assets/twitter.svg" alt="" />
                </div>
                <div className="login__left-social-link">
                  <img src="./assets/linkedin.svg" alt="" />
                </div>
                <div className="login__left-social-dis">
                  <img src="./assets/discord.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="login__right">
            <div className="login__main">
              <h1>Sign In</h1>
              <h6>Sign in to your account</h6>
              <div className="login__auth">
                <div className="login__auth-google login__hover-shadow">
                  <img src="./assets/google.svg" alt="" />
                  <p>Sign in with Google</p>
                  <GoogleAuth redirectUrl={"/"} />
                </div>
                <div className="login__auth-apple login__hover-shadow">
                  <img src="./assets/apple.svg" alt="" />
                  <p>Sign in with Apple</p>
                </div>
              </div>
              <form className="login__form" onSubmit={handleSubmit}>
                <div className={`login__form-group ${showAlert ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="login__hover-shadow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={`login__form-group ${showAlert ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="login__hover-shadow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={`login__form-group ${showAlert ? 'has-error' : ''}`}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="login__hover-shadow"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="login__form-forget">
                  Forgot Password?
                </div>
                <div type="submit" className="login__submit-btn">
                  Sign In
                </div>
              </form>
              <p>Don’t have an account? <span>Register here</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
