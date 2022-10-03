import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  console.log(props.loggedInUser);
  if (props.loggingIn === false) {
    return (
      <div className="header-container">
        <div className="header-title">
          <div>
            <h1>Welcome to Safe Space</h1>
          </div>
          <div className="buttons-container">
            <Link to="/loginPage">
              <button onClick={() => props.setLoggingIn(true)}>Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }else if(props.loggingIn === true){
      return (
        <div className="header-container">
          <div className="header-title">
            <div>
              <h1>Safe Space</h1>
            </div>
            <div className="buttons-container">
              <Link to="/">
                <button onClick={() => props.setLoggingIn(undefined)}>
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
  }
  else if(props.loggedInUser !== undefined){
    return(
    <div className="header-container">
    <div className="header-title">
      <div>
        <h1>Safe Space</h1>
      </div>
      <div className="buttons-container">
        <Link to="/">
          <button onClick={() => props.setLoggingIn(false)}>
            log out
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}
}

export default Header;
