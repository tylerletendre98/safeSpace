import React from "react";
import { useState } from "react";
import CreateNewAccount from "../../components/createNewAccount/CreateNewAccount";
import LoginForm from "../../components/loginForm/LoginForm";
import data from "../../data/backgroundImage";
import './loginPage.css'

function LoginPage(props) {
  const [backgroundImage, setBackGroundImage] = useState(data.url);

  if(props.creatingNewAccount === false){
    return (
      <div className="login-page-container">
        <div className="background-image">
          <img src={backgroundImage} alt="daily background" />
        </div>
        <div className="login-form">
          <LoginForm creatingNewAccount={props.creatingNewAccount} setCreatingNewAccount={props.setCreatingNewAccount}/>
        </div>
      </div>
    );
  }else{
    return(
      <div>
        <div className="background-image">
          <img src={backgroundImage} alt="daily background" />
        </div>
        <div>
          <CreateNewAccount/>
        </div>
      </div>
    )
  }
}

export default LoginPage;
