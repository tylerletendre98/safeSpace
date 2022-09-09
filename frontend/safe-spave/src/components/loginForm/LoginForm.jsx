import React from 'react'
import { useState } from 'react'
import './loginForm.css'

function LoginForm(props) {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    

  return (
    <div className='login-form-container'>
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
        <div className='button-container'>
            <button>Login</button>
        </div>
        <div className='create-account'>
            <p onClick={()=> props.setCreatingNewAccount(!props.creatingNewAccount)}>Click here to create account</p>
        </div>
    </div>
  )
}

export default LoginForm