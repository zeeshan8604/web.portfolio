
import React from 'react';
import './Header.css';
import CTA from '../CTA/cta';
import ME from '../../assets/me.png'
import HeaderSocial from '../header_socials/header_social'

export const Header = () => {
  return (
   <header>
     <div className=" container header__container">
      <h5>Hello I,m</h5>
      <h1>Zeeshan Ahmed</h1>
      <h5>Fullstack Developer</h5>
      <CTA/>
      <HeaderSocial/>
     <div className='me'>
      <img src={ME} alt="ME" />
     </div>
     <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}
export default Header;
