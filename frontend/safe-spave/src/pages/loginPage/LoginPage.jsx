import React from "react";
import { useState } from "react";
import data from "../../data/backgroundImage";

function LoginPage(props) {
  const [backgroundImage, setBackGroundImage] = useState(data.url);

  return (
    <div className="login-page-container">
      <div className="background-image">
        <img src={backgroundImage} alt="daily background image" />
      </div>
      <h1>this is login page</h1>
    </div>
  );
}

export default LoginPage;
