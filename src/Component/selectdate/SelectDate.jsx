import React from 'react'
import './selectdate.css';

const SelectDate = () => {
  return (
    <div className='travel__selectdate section__padding' id='selectdate'>
      <div className='travel__selectdate-boxeffect'>
        <h1 className='travel__selectdate-heading'>Where are you flying?</h1>
        <div className='travel__selectdate-content'>
          <input type='search' placeholder='Enter Source'></input>
          <form className='travel__place'>
            <label className='label'>Trip</label>
            <select className='select' name='Select option'>
              <option>One Way</option>
              <option>Return</option>
            </select>
          </form>
          <input type='date' placeholder='date'></input>
          <form className='travel__class'>
            <label className='label'>Select Class</label>
            <select className='select' name='Select option'>
              <option>Economy Class</option>
              <option>Business Class</option>
              <option>Semi-Economy Class</option>
              <option>Premium Business Class</option>
            </select>
          </form>
        </div>
        <div className='travel__promo'>
            <button className='travel__promo-code'>Add Promo Code</button>
            <button className='travel__promo-flights'>Show Flights</button>
          </div>
      </div>  
    </div>
  )
}

export default SelectDate
