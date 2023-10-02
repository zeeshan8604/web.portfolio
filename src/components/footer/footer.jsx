import React from 'react'
import './footer.css'
import {BsGithub}from 'react-icons/bs'
import {SiLeetcode}from 'react-icons/si'
import {BsLinkedin}from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ZEESHAN AHMED</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/zeeshan8604"><BsGithub/></a>
        <a href="hhttps://leetcode.com/Zeeshan_ahmed/"> <SiLeetcode/> </a>
        <a href="https://www.linkedin.com/in/zeeshan-ahmed-b87a48227/"><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Zeeshan Ahmed. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer