import React from 'react'


const Footer = () => {

    const year = new Date().getFullYear();
    
  return (
    <div className="background">
        <p className="text-footer">
        Created by Developers for Developers. <br/>
        Copyright ⓒ {year - (1)}-{year}
        </p>
    </div>
  )
}

export default Footer;