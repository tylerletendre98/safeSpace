import React from "react";
import { useState } from "react";
import CreateNewAccount from "../../components/createNewAccount/CreateNewAccount";
import LoginForm from "../../components/loginForm/LoginForm";
import data from "../../data/backgroundImage";
import "./loginPage.css";

function LoginPage(props) {
  const [backgroundImage, setBackGroundImage] = useState(data.url);

  if (props.creatingNewAccount === false) {
    return (
      <div className="login-page-container">
        <div className="background-image">
          <img src={backgroundImage} alt="daily background" />
        </div>
        <div className="login-form">
          <LoginForm
            login={props.login}
            loggingIn={props.loggingIn}
            setLoggingIn={props.setLoggingIn}
            creatingNewAccount={props.creatingNewAccount}
            setCreatingNewAccount={props.setCreatingNewAccount}
            errorMessage={props.errorMessage}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="background-image">
          <img src={backgroundImage} alt="daily background" />
        </div>
        <div className="create-account-form">
          <CreateNewAccount
            creatingNewAccount={props.creatingNewAccount}
            setCreatingNewAccount={props.setCreatingNewAccount}
            newUser={props.newUser}
          />
        </div>
      </div>
    );
  }
}

export default LoginPage;
