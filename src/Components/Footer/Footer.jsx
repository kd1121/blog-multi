import React from 'react'
import "../Footer/Footer.css"

const Footer = () => {

  let date = new Date()

  return (
    <div className='ftr-main'>
      <div className='ftr-child'>
      B
      </div>
      <div>
      <span className='ftr-logo'>Blogger</span> Copyright © {date.getFullYear()} Blogger Inc. All rights reserved.
      </div>
      
    </div>
  )
}

export default Footer
