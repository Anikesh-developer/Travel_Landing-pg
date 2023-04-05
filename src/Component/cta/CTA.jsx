import React from 'react';
import map from '../../assests/map.png';
import './cta.css';

const CTA = () => {
  return (
    <div className='travel__cta section__padding'>
      <div className='travel__cta-content'>
        <div className='travel__cta-content__heading'>
          <h1>Let’s Ready to Explore The World With Us.</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </h3>
        </div>

        <div className='travel__cta-map'>
          <img src={map} alt='map image' />
        </div>

        <div className='travel__cta-contactus'>
          <button className='travel__cta-button'>Contact Us</button>
        </div>
        
      </div>
    </div>
  )
}

export default CTA
