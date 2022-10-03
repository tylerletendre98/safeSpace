import React from 'react'
import InfoBlock from '../../components/infoBlock/InfoBlock'
import { Link } from 'react-router-dom'
import './profilePage.css'

function ProfilePage(props) {
    if(props.loggedInUser === undefined){
        return(
            <div>
                <div>
                    <h2>{props.errorMessage}</h2>
                </div>
                <div>
                    <Link to='/loginPage'> 
                        <button onClick={()=> props.setloggingIn(true)}>Try again</button>
                    </Link>
                </div> 
            </div>
        )
    }else{
        return (
        <div>
            <div className='info-block'>
                <InfoBlock user={props.loggedInUser} setloggedInUser={props.setloggedInUser}/>
            </div>
        </div>
        )
    }
}

export default ProfilePage