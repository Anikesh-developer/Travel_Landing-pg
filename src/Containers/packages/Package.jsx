import React from 'react'
import './package.css';
import photo from '../../assests/photo.png';
import photo2 from '../../assests/photo2.png';
import photo3 from '../../assests/photo3.png';

const Package = () => {
  return (
    <div className='travel__package section__padding'>
      <div className='travel__package-content'>
        <div className='travel__package-content__heading'>
          <h1>Best Packages For You</h1>
          <h3>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</h3>
        </div>

        <div className='travel__package-content__places'>
          <table className='travel__package-content__table'>
            <tbody>
                <tr>
                    <td id='maldives'>Maldives</td>
                    <td>Samudram</td>
                    <td>Cordelia</td>
                    <td>Agatti</td>
                    <td>More</td>
                </tr>
            </tbody>
          </table>
        </div>

        <div className='travel__package__cards'>
          <div className='travel__package-content__cards'>
            <div className='travel__package-content__cards-places'>
              <img src={photo} alt='place-1 image' />
            </div>
              <div className='travel__package-content__cards-info'>
                <h2 className='travel__package-content__cards-title'>Indonesia</h2>
                <h3 className='travel__package-content__cards-subtitle'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</h3>
              </div>
          </div>

          <div className='travel__package-content__cards'>
            <div className='travel__package-content__cards-places'>
              <img src={photo2} alt='place-1 image' />
            </div>
              <div className='travel__package-content__cards-info'>
                <h2 className='travel__package-content__cards-title'>Indonesia</h2>
                <h3 className='travel__package-content__cards-subtitle'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</h3>
              </div>
          </div>

          <div className='travel__package-content__cards'>
            <div className='travel__package-content__cards-places'>
              <img src={photo3} alt='place-1 image' />
            </div>
              <div className='travel__package-content__cards-info'>
                <h2 className='travel__package-content__cards-title'>Indonesia</h2>
                <h3 className='travel__package-content__cards-subtitle'>Explore the Beauty of the island for 3 days and 2 nights with our travel agency...</h3>
              </div>
          </div>
        </div>
        
        <div className='travel__package-content__dot'>
          <p className='travel__package-content__circle'></p>
          <p className='travel__package-content__circle' id='dark'></p>
          <p className='travel__package-content__circle'></p>
        </div>

        <div className='travel__package-content_button'>
          <button>Discover More</button>
        </div>

      </div>
    </div>
  )
}

export default Package
