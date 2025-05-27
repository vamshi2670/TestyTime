import React from 'react'

function Header() {
  return (
    <div className='Headersection'>
        <div className="left">
            <div className="title">
                <h2>Shopping mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li>men</li>
                <li>childern</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='Search...'  />
        </div>
        <div className="right">
            <div className="signin">
                signin  / signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header