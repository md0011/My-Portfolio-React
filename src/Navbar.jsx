import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <header>
        <nav className= 'navbar'>
            <div id='my-name'><Link to='/Home'>👨🏻‍💻Mayur Devle</Link></div>
            <div className='nav-items'> <Link to='/Home'> Home</Link> </div>
            <div className='nav-items'> <Link to='/About'>About</Link> </div>
            <div className='nav-items'><Link to='/Skills'>Skills</Link></div>
            <div className='nav-items'><Link to='/Project'>Project</Link></div>
            <div className='nav-items'><Link to='/Contact'>Contact</Link></div>
        </nav>
    </header>
    </div>
  )
}
