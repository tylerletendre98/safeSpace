import React from 'react'
import InfoBlock from '../../components/infoBlock/InfoBlock'
import { Link } from 'react-router-dom'
import './profilePage.css'

function ProfilePage(props) {
    if(props.loggedInUser === undefined){
        return(
            <div className='error-message-block'>
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
            <div className='info-block'>
                <InfoBlock user={props.loggedInUser} setLoggedInUser={props.setLoggedInUser}/>
            </div>
        </div>
        )
    }
}

export default ProfilePage