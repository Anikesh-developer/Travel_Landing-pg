import React from 'react'
import './header.css';
import Vector from '../../assests/Vector.png';
import map_overlay from "../../assests/map_overlay.png";
const Header = () => {
  return (
    <div className='travel__header section__padding'>
      <div className='travel__header-content'>
        <div className='travel__header-content_visit'>
          <p>Visit</p>
          <span><img src={Vector} alt='vector image' /></span>
        </div>
        <h1>The Exotic Lakshadweep Islands</h1>
        <div className='travel__header-content_button'>
          <button>Discover Now</button>
        </div>
      </div>
      <div className='travel__header-image'>
        <img className='map' src={map_overlay} alt='world_image' />
      </div>
    </div>
  )
}

export default Header
