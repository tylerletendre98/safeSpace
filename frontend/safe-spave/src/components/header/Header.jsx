import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div className='header-container'>
        <div className='header-title'>
            <div>
                <h1>Welcome to Safe Space</h1>
            </div>
            <div className='buttons-container'>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Header