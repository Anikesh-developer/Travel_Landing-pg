import React from 'react';
import {stay1, stay2, stay3 , stay4, stay5 , stay6} from './import';
import rating from '../../assests/rating.png';
import './stays.css';

const Stays = () => {
  return (
    <div className='travel__stays section__padding'>
      <div className='travel__stays-content'>
        <div className='travel__stays-content__heading'>
          <h1>Island Stays</h1>
          <h3>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
 modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</h3>
        </div>

        <div className='travel__stays__cards'>
          <div className='travel__stays-content__cards'>
              <div className='travel__stays-content__cards-places'>
                <img src={stay1} alt='place-1 image' />
              </div>
                <div className='travel__stays-content__cards-info'>
                  <h2 className='travel__stays-content__cards-title'>Kavaratti</h2>
                  <h3 className='travel__stays-content__cards-subtitle'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</h3>
                </div>
              <div className='travel__stays-content__rating'>
                <div className='travel__stays-content__rating-content'>
                  <img src={rating} alt='rating' />
                  <button>Know More</button>
                </div>
              </div>
          </div>

          <div className='travel__stays-content__cards'>
              <div className='travel__stays-content__cards-places'>
                <img src={stay2} alt='place-1 image' />
              </div>
                <div className='travel__stays-content__cards-info'>
                  <h2 className='travel__stays-content__cards-title'>Kavaratti</h2>
                  <h3 className='travel__stays-content__cards-subtitle'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</h3>
                </div>
              <div className='travel__stays-content__rating'>
                <div className='travel__stays-content__rating-content'>
                  <img src={rating} alt='rating' />
                  <button>Know More</button>
                </div>
              </div>
          </div>

          <div className='travel__stays-content__cards'>
              <div className='travel__stays-content__cards-places'>
                <img src={stay3} alt='place-1 image' />
              </div>
                <div className='travel__stays-content__cards-info'>
                  <h2 className='travel__stays-content__cards-title'>Kavaratti</h2>
                  <h3 className='travel__stays-content__cards-subtitle'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</h3>
                </div>
              <div className='travel__stays-content__rating'>
                <div className='travel__stays-content__rating-content'>
                  <img src={rating} alt='rating' />
                  <button>Know More</button>
                </div>
              </div>
          </div>

          <div className='travel__stays-content__cards'>
              <div className='travel__stays-content__cards-places'>
                <img src={stay4} alt='place-1 image' />
              </div>
                <div className='travel__stays-content__cards-info'>
                  <h2 className='travel__stays-content__cards-title'>Kavaratti</h2>
                  <h3 className='travel__stays-content__cards-subtitle'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</h3>
                </div>
              <div className='travel__stays-content__rating'>
                <div className='travel__stays-content__rating-content'>
                  <img src={rating} alt='rating' />
                  <button>Know More</button>
                </div>
              </div>
          </div>

          <div className='travel__stays-content__cards'>
              <div className='travel__stays-content__cards-places'>
                <img src={stay5} alt='place-1 image' />
              </div>
                <div className='travel__stays-content__cards-info'>
                  <h2 className='travel__stays-content__cards-title'>Kavaratti</h2>
                  <h3 className='travel__stays-content__cards-subtitle'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</h3>
                </div>
              <div className='travel__stays-content__rating'>
                <div className='travel__stays-content__rating-content'>
                  <img src={rating} alt='rating' />
                  <button>Know More</button>
                </div>
              </div>
          </div>

          <div className='travel__stays-content__cards'>
              <div className='travel__stays-content__cards-places'>
                <img src={stay6} alt='place-1 image' />
              </div>
                <div className='travel__stays-content__cards-info'>
                  <h2 className='travel__stays-content__cards-title'>Kavaratti</h2>
                  <h3 className='travel__stays-content__cards-subtitle'>Kavaratti is the capital of the Union Territory of Lakshadweep having ...</h3>
                </div>
              <div className='travel__stays-content__rating'>
                <div className='travel__stays-content__rating-content'>
                  <img src={rating} alt='rating' />
                  <button>Know More</button>
                </div>
              </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Stays