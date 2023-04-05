import React from 'react';
import footer from '../../assests/footer.png';
import upperimage from '../../assests/upperimage.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='travel__footer'>
      <div className='travel__footer-content'>
        <div className='travel__footer-content__upperimage'>
          <img src={upperimage} alt='upperimage' />
        </div>
        <div className='travel__footer-content__footer'>
          <img src={footer} alt='footer.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer
