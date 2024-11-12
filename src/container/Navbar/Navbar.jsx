import React, { useState, useEffect } from 'react';
import logo from '../../img/image.png';
import { FaPhone } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      setShowNavbar(false); // Hide navbar on scroll down
    } else {
      setShowNavbar(true); // Show navbar on scroll up
    }
    
    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleOpenMenu = () => {
    document.getElementsByClassName('menu-container')[0].style.marginRight = 0;
    document.getElementsByClassName('menu-container')[0].style.opacity = 1;
  }

  const handleCloseMenu = () => {
    document.getElementsByClassName('menu-container')[0].style.marginRight = '-300px';
    document.getElementsByClassName('menu-container')[0].style.opacity = 0;
  }

  return (
    <nav className={showNavbar ? 'show' : 'hide'}>
      <a href="./" className='logo'>
        <img src={logo} alt='logo' />
      </a>
      
      <ul className='desktop-menu'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About Us</a></li>
        <li><a href='#services'>Services</a></li>
        <li className='contact-link'><a href="#contact">Contact Us</a><FaPhone className='phone-icon' /></li>
      </ul>

      <div className='mobile-menu'>
          <HiMenu className='open-link' onClick={handleOpenMenu} />

          <div className='menu-container'>
              <HiX className='close-link' onClick={handleCloseMenu} />
              <ul>
                <li><a href="#home" onClick={handleCloseMenu}>Home</a></li>
                <li><a href="#about" onClick={handleCloseMenu}>About Us</a></li>
                <li><a href="#services" onClick={handleCloseMenu}>Services</a></li>
                <li className='contact-link'><a href="#contact" onClick={handleCloseMenu}>Contact Us</a><FaPhone className='phone-icon' /></li>
              </ul>
          </div>
      </div>
    </nav>
  )
}
export default Navbar