import React from "react";
import { useState } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import data from "../../data/backgroundImage";
import './loginPage.css'

function LoginPage(props) {
  const [backgroundImage, setBackGroundImage] = useState(data.url);

  return (
    <div className="login-page-container">
      <div className="background-image">
        <img src={backgroundImage} alt="daily background image" />
      </div>
      <div className="login-form">
        <LoginForm/>
      </div>
    </div>
  );
}

export default LoginPage;
