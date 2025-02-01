import React from 'react'
import removed from '../static/images/removed.png'
import '../static/css/navb.css'

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-logo'>
                <img src={removed} alt='logo' className='logo'/>
            </div>
            <div className='nav-last'>
                <div className="dark-mode-toggle">🌙</div>
                <img src={removed} alt='logo' className='user-icon'/>
            </div>
        </nav>
    )
}
