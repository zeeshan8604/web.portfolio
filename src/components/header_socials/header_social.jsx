import React from 'react' 
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const header_social = () => {
  return (
   <div className="header__social">
    <a href="https://www.linkedin.com/in/zeeshan-ahmed-b87a48227/" target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/zeeshan8604" target='_blank'><FaGithub/></a>
    <a href="https://dribble.com" target='_blank'><FiDribbble/></a>

   </div>
  )
}

export default header_social