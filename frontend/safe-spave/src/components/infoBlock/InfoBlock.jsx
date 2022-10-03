import React from 'react'
import { Link } from 'react-router-dom'

function InfoBlock(props) {
  return (
    <div>
        <div>
            <h3>{props.user.username}</h3>
            <Link to='/'>
                <button onClick={()=>{
                    props.setLoggedInUser(undefined)
                }}>logout</button>
            </Link>
        </div>
        <div>
            <p>Number of posts:{props.user.posts.length}</p>
            <p>Friends:{props.user.friends.length}</p>
            <p>Friend Requests:{props.user.friendRequests.length}</p>
        </div>
    </div>
  )
}

export default InfoBlock