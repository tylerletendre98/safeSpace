import React from 'react'
import { useEffect, useState } from 'react'
import './welcomePage.css'
import key from '../../key'
import axios from 'axios'
import data from '../../data/backgroundImage'

function WelcomePage() {

    const [backgroundImage, setBackGroundImage] = useState(data.url)

    // useEffect(()=>{
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key.API_KEY}`)
    //     .then((res)=>{
    //         setBackGroundImage(res.data.url)
    //     })
    // },[])
    if(backgroundImage === undefined){
        <div>

        </div>
    }else{
        return (
            <div>
                <div className='background-image'>
                    <img src={backgroundImage} alt=""/>
                </div>
            </div>
        )
    } 
}

export default WelcomePage