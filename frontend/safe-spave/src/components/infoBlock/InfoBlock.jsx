import React from 'react'
import { Link } from 'react-router-dom'
import './infoBlock.css'
function InfoBlock(props) {
  return (
    <div className='info-block-container'>
        <div className='username'>
            <h3>{props.user.username}</h3>
            <Link to='/'>
                <button onClick={()=>{
                    props.setLoggedInUser(undefined)
                }}>logout</button>
            </Link>
        </div>
        <div className='user-numbers'>
            <p>Number of posts: {props.user.posts.length}</p>
            <p>Friends: {props.user.friends.length}</p>
            <p>Friend Requests: {props.user.friendRequests.length}</p>
        </div>
    </div>
  )
}

export default InfoBlock