import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  
  return (
       <div className={`${props.toggleclass}`}>
            <nav className='sidebaritems'>
                <li id="homelist"><Link to="/" >Home</Link></li>
                <li><Link to="/my-intro" >My-Intro</Link></li>
                <li><Link to="/services" >Services</Link></li>
                <li><Link to="/blog" >Blog</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
            </nav>
        </div>
  )
}
