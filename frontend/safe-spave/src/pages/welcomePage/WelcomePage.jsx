import React from "react";
import { useEffect, useState } from "react";
import "./welcomePage.css";
import key from '../../key'
import axios from "axios";
import data from "../../data/backgroundImage";

function WelcomePage() {
  const [backgroundImage, setBackGroundImage] = useState(data.url);

  // useEffect(()=>{
  //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key.API_KEY}`)
  //     .then((res)=>{
  //         setBackGroundImage(res.data)
  //     })
  // },[])
  if (backgroundImage === undefined) {
    <div></div>;
  } else {
    return (
      <div className="welcome-page-container">
        <div className="background-image">
          <img src={data.url} alt="" />
        </div>
        <div className="welcome-message">
          <h3>This is safeSpace the first space social media platform!</h3>
          <h3>
            Come and talk about space, meet other space explores, or just
            explore yourself
          </h3>
        </div>
        <div className="background-image-explanation">
          <h2>{data.title}</h2>
          <h3>Background image info</h3>
          <p>{data.explanation}</p>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
