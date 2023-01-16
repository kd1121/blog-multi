import React from 'react'
import "../Home/Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='main-div'>
        <div className='nav-div'>
  
            {/* <p className='logo-head'>BLOG</p> */}
            <Link id='hm-id' className='link-route-head' to="/" >BLOGGER</Link>
            <Link className='link-route'   to="/blogs/" >Blogs</Link>
            <Link className='link-route'  to='/about' >About Us</Link>
            <Link className='link-route' to='/contact' >Contact</Link>
            
        </div>
    </div>
    </>
  )
}

export default Navbar