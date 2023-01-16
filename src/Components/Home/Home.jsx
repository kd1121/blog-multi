
import React from 'react'
import Navbar from './Navbar'
import "../Home/Home.css"
// import { color } from '@mui/system'

const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <div className='home-main'>
      <div className='home-head'>
        Hey! 
        <div className='spaning'>Welcome to <span id='comma'>"</span><span id='main-txt'>Bloger</span><span id='comma'>"</span></div>
        
      </div>
      </div>
    </div>
    </>
    
  )
}

export default Home
