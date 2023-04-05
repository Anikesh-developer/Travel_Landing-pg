import React , {useState} from 'react';
import logo from '../../assests/logo.png';
import './navbar.css';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';

const Menu = () => (
    <>
    <p><a href='#'>Find Reservation</a></p>
    <p><a href='#'>Packages</a></p>
    <p><a href='#'>About  Lakshadweep</a></p>
    <p><a href='#Clients'>About Us</a></p>
    <p><a href='#'>Gol</a></p>
    <p><a href='#'>Support</a></p>
    </>
  )

const Navbar = () => {

    const [ toggleMenu , setToggleMenu ] = useState(false);
    return (
    <div className='travel__navbar'>
      <div className='travel__navbar-links'>
        <div className='travel__navbar-links_logo'>
            <img src={logo} alt="logo img" />
        </div>
        <div className='travel__navbar-links__container'>
            <Menu />
        </div>
      </div>

      <div className='travel__navbar-signin'>
        <p>Login</p>
        <button id='signin'>SignIn</button>
      </div>

       <div className='travel__navbar-menu'>
        {toggleMenu 
            ? <RiCloseLine color='black' size={27}  onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line  color='black'  size={27} onClick = {() => setToggleMenu(true)} />
        }

        {toggleMenu && (
            <div className='travel__navbar-menu_container scale-up-center'>
                <div className='travel__navbar-menu_container-links'>
                    <Menu />
                    <div className='travel__navbar-menu_container-links-sign'>
                        <p>Login</p>
                        <button>SignIn</button>
                    </div>
                </div>
            </div>
        )}
       </div>

    </div>
  )
}

export default Navbar
