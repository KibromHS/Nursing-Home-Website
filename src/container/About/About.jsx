import React from 'react'
import { care, certified, guarantee, oldPerson, aboutBg } from '../../img';
import './About.css';
import { HiChevronRight } from 'react-icons/hi';

const About = () => {
  return (
    <div id='about'>
      <div className='cards-container'>
        <div className='card'>
          <div className="title-img">
            <img src={care} alt="" />
          </div>
          <h1>Personalized Care</h1>
          <p>We believe in treating each resident as an individual. Our dedicated staff tailors care plans to meet specific needs and preferences, ensuring a comfortable and fulfilling experience.</p>
        </div>
        <div className='card'>
          <div className="title-img white-bg">
            <img src={certified} alt="" />
          </div>
          <h1>Certified</h1>
          <p>Our team is comprised of highly qualified professionals with certifications in their respective fields. This ensures that our residents receive the highest quality of care and support.</p>
        </div>
        <div className='card'>
          <div className="title-img">
            <img src={guarantee} alt="" />
          </div>
          <h1>Satisfaction Guarantee</h1>
          <p>We are committed to providing exceptional service. If you are not satisfied with our care, we will work diligently to address your concerns and ensure a positive experience.</p>
        </div>
      </div>

      <div className='second-about'>
        <div className='about-left'>
          <img src={aboutBg} alt="bg" className='bg' />
          <img src={oldPerson} alt="care" className='old-image' />
        </div>
        <div className='about-right'>
          <h3>We Take Great Care</h3>
          <p>At Saint Gabriel Adult Family Home, we provide exceptional care in a nurturing, family-like environment. Our dedicated RN-certified staff ensures personalized attention and support for eachresident, helping them maintain dignity, independence, and quality of life.  </p>
          <ul>
            <li><HiChevronRight /> Personalized Care</li>
            <li><HiChevronRight /> Medication Management</li>
            <li><HiChevronRight /> Social and Recreational Activities</li>
            <li><HiChevronRight /> Assistance with Activities of Daily Living</li>
          </ul>
          <a href="#about" className='more-link'>About Us</a>
        </div>
      </div>
    </div>
  )
}

export default About