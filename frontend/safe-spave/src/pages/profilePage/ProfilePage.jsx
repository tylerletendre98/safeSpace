import React from 'react'
import { Link } from 'react-router-dom'
import { ReactSpinner } from 'react-spinning-wheel'

function ProfilePage(props) {
    if(props.loggedInUser === undefined){
        return(
            <div>
                <div>
                    <h2>{props.errorMessage}</h2>
                </div>
                <div>
                    <Link to='/loginPage'> 
                        <button>Try again</button>
                    </Link>
                </div> 
            </div>
        )
    }else{
        return (
        <div>
            <h1>{props.loggedInUser.username} </h1>
        </div>
        )
    }
}

export default ProfilePage