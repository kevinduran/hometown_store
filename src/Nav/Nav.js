import React from 'react'
import logo from '../assets/logo.png'
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav">
        <img alt="logo" className='nav_logo' src={logo}/>     
    </div>
  )
}
