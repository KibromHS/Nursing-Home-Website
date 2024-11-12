import React, { useState, useEffect } from 'react';
import logo from '../../img/image.png';
import { FaPhone } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import './Navbar.scss';

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
    document.getElementsByClassName('app__navbar-menu-container')[0].style.marginRight = 0;
    document.getElementsByClassName('app__navbar-menu-container')[0].style.opacity = 1;
  }

  const handleCloseMenu = () => {
    document.getElementsByClassName('app__navbar-menu-container')[0].style.marginRight = '-300px';
    document.getElementsByClassName('app__navbar-menu-container')[0].style.opacity = 0;
  }

  return (
    <nav className='app__navbar'>
      <a href="./" className='app__navbar-logo'>
        <img src={logo} alt='logo' />
      </a>
      
      <ul className='app__navbar-links'>
        <li className='app__flex p-text'><a href='#home'>Home</a><div /></li>
        <li className='app__flex p-text'><a href='#about'>About Us</a><div /></li>
        <li className='app__flex p-text'><a href='#services'>Services</a><div /></li>
        <li className='contact-link app__flex p-text'><a href="#contact">Contact Us</a><FaPhone className='phone-icon' /></li>
      </ul>

      <div className='app__navbar-menu'>
          <HiMenu onClick={handleOpenMenu} />

          <div className='app__navbar-menu-container'>
              <HiX onClick={handleCloseMenu} />
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