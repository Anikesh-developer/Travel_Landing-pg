import React from 'react'
import { Navbar } from '../Component';
import { Footer } from '../Containers';
import Circlebig from '../assests/Circlebig.png';
import map2 from '../assests/map2.png';
import profile4 from '../assests/profile4.png';
import places from '../assests/places.png';
import cert_img from '../assests/cert_img.png';
import './aboutus.css';
 
const Aboutus = () => {
  return (
    <div className='travel__aboutus'>
      <Navbar />
      <div className='travel__aboutus-content section__padding'>
        <h1 className='travel__aboutus-content__heading'>About Us</h1>
        <div className='travel__aboutus-content__circle'>
          <img src={Circlebig} alt="circle image" />
        </div>
        <div className='travel__aboutus-content__map'>
          <img src={map2} alt="map image" />
        </div>
      </div>

      {/* second section */}

        <div className='travel__aboutus-team section__padding'>
          <div className='travel__aboutus-team__content'>
            <div className='travel__aboutus-team__title'>
              <h2>Our Team</h2>
            </div>
            <div className='travel__aboutus-team__subtitle'>
              <h3>Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei, at nihil tantas platonem eos. </h3>
            </div>
          </div>
          <div className='travel__aboutus-team__about'>
            <div className='travel__aboutus-team__about-image'>
              <img src={profile4} alt='profile image' />
            </div>
            <div className='travel__aboutus-team__about-bio'>
              <h1>Sebastian Bennett</h1>
              <h2>Founder, LEad Photographer, CEO</h2>
              <p>Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera integre suavitate per an, alienum phaedrum te sea. Ex sea causae dolores, nam et doming dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert audire.</p>
            </div>
          </div>
        </div>

      {/* 3rd section */}

      <div className='travel__aboutus-customer'>
        <div className='travel__aboutus-customer__heading'>
          <div className='travel__aboutus-customer__heading-title'>
            <h1>What customer’s are saying?</h1>
          </div>
          <div className='travel__aboutus-customer__heading-subtitle'>
            <h3>Take a look at what our customer’s are saying. At Nature we not 
              <br></br>only provide you with services but also we provide you with valuable 
              <br></br>experiences for your valuable time.</h3>
          </div>
        </div>
        <div className='travel__aboutus-customer__image'>
          <img src={places} alt='places image' />
        </div>
      </div>
      <div className='travel__aboutus-customer__comment'>
          <div className='travel__aboutus-customer__comment-user'>
            <h2>“ Great place to spend your vacation <br></br>while exploring different experiences. “</h2>
          </div>
      </div>

      {/* 4th section */}

      <div className='travel__aboutus-cert section__padding'>
        <div className='travel__aboutus-cert__content'>
          <div className='travel__aboutus-cert__content-title'>
            <h1>Certificate</h1>
          </div>
          <div className='travel__aboutus-cert__content-subtitle'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id turpis sodales,facilisis massa at, rutrum eros.</h3>
          </div>
        </div>
        <div className='travel__aboutus-cert__cards'>
          <img src={cert_img} alt='cert image' />
          <img src={cert_img} alt='cert image' />
          <img src={cert_img} alt='cert image' />
          <img src={cert_img} alt='cert image' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus
