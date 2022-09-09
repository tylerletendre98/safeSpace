import React from 'react'
import './createNewAccount.css'
import { useState } from 'react'

function CreateNewAccount(props) {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [dob, setDob] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()


  return (
    <div className='create-new-container'>
        <div className='input-container'>
            <div>
                <label htmlFor="">Username:</label>
            </div>
            <div>
                <input type="text" placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)} />
            </div>
        </div>
        <div className='input-container'>
            <div>
                <label htmlFor="">Password:</label>
            </div>
            <div>
                <input type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
        </div>
        <div className='input-container'>
            <div>
                <label htmlFor="">First Name:</label>
            </div>
            <div>
                <input type="text" placeholder='Enter first name' onChange={(e)=>setFirstName(e.target.value)} />
            </div>
        </div>
        <div className='input-container'>
            <div>
                <label htmlFor="">Last Name:</label>
            </div>
            <div>
                <input type="text" placeholder='Enter last name' onChange={(e)=>setLastName(e.target.value)} />
            </div>
        </div>
        <div className='input-container'>
            <div>
                <label htmlFor="">Date of birth:</label>
            </div>
            <div>
                <input type="date" onChange={(e)=>setDob(e.target.value)} />
            </div>
        </div>
        <div className='input-container'>
            <div>
                <label htmlFor="">Email:</label>
            </div>
            <div>
                <input type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
        </div>
        <div className='button-container'>
            <button>Login</button>
        </div>
    </div>
  )
}

export default CreateNewAccount