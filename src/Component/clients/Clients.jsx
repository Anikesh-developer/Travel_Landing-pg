import React from 'react';
import './client.css';
import profile from '../../assests/profile.png';
import proflie2 from '../../assests/proflie2.png';
import proflie3 from '../../assests/proflie3.png';
import stars from '../../assests/stars.png';

const Clients = () => {
  return (
    <div className='travel__clients section__padding' id='Clients'>
      <div className='travel__clients-content'>
        <div className='travel__clients-content__heading'>
          <h1>What Our Clients Says About Us</h1>
        </div>

        <div className='travel__clients__cards'>
          <div className='travel__clients-content__cards'>
            <div className='travel__clients-content__cards-places'>
              <img src={profile} alt='place-1 image' />
            </div>
              <div className='travel__clients-content__cards-info'>
                <h2 className='travel__clients-content__cards-title'>Roman Rey</h2>
                <span>Toranto, Canada</span>
                <h3 className='travel__clients-content__cards-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </h3>
                <img className='travel__clients-content__cards-stars' src={stars} alt='star-image' />
              </div>
          </div>

          <div className='travel__clients-content__cards'>
            <div className='travel__clients-content__cards-places'>
              <img src={proflie2} alt='place-1 image' />
            </div>
              <div className='travel__clients-content__cards-info'>
                <h2 className='travel__clients-content__cards-title'>Alex Tom</h2>
                <span>Toranto, Canada</span>
                <h3 className='travel__clients-content__cards-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </h3>
                <img className='travel__clients-content__cards-stars' src={stars} alt='star-image' />
              </div>
          </div>

          <div className='travel__clients-content__cards'>
            <div className='travel__clients-content__cards-places'>
              <img src={proflie3} alt='place-1 image' />
            </div>
              <div className='travel__clients-content__cards-info'>
                <h2 className='travel__clients-content__cards-title'>Finn Balor</h2>
                <span>Toranto, Canada</span>
                <h3 className='travel__clients-content__cards-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </h3>
                <img className='travel__clients-content__cards-stars' src={stars} alt='star-image' />
              </div>
          </div>
        </div>
        
        <div className='travel__clients-content__dot'>
          <p className='travel__clients-content__circle'></p>
          <p className='travel__clients-content__circle' id='dark'></p>
          <p className='travel__clients-content__circle'></p>
        </div>

      </div>
    </div>
  )
}

export default Clients
