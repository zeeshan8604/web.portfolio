import React from 'react'
import './about.css'
import ME from '../../assets/2.me.jpeg'
// import ME from '../../assets/me-about.jpg'
// import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
   <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>
     <div className="container about__container">


      <div className="about__me">

        <div className="about__me-image">
          <img src={ME} alt="About me" />
        </div>

      </div>

      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+completed</small>
          </article>

        </div>
        <p >Welcome <br />

My Name is Zeeshan Ahmed. <br />
I am a third-year student pursuing my Bachelor's degree 
in Computer Science, with a passion for technology and innovation. 
Currently enrolled in a B.Tech program, my academic journey has equipped me with a strong foundation in
 various aspects of computer science, including programming, algorithms, and data structures.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>

     </div>





     </section>
  )
}

export default about
