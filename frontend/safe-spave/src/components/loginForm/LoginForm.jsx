import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";

function LoginForm(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginUser = () => {
    const loginInfo = {
      username: username,
      password: password,
    };
    props.login(loginInfo);
    props.setLoggingIn(undefined);
  };

  return (
    <div className="login-form-container">
      <div className="input-container">
        <div>
          <label htmlFor="">Username or Email:</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter username or email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className="input-container">
        <div>
          <label htmlFor="">Password:</label>
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="button-container">
        <div>
          <Link to='/profilePage'>
            <button onClick={() => loginUser()}>Login</button>
          </Link>
        </div>
        <Link to='/'>
          <button>Cancel</button>
        </Link>
      </div>
      <div className="create-account">
        <p
          onClick={() => props.setCreatingNewAccount(!props.creatingNewAccount)}
        >
          Click here to create account
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
