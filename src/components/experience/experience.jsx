import React from 'react'
import './exprience.css'
import {BsFillPatchCheckFill}from 'react-icons/bs'

const exprience = () => {
  return (
    <section id='experience'>
      <h5>Skils I have</h5>
     <h2>My Experience</h2>
     <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>JavaScript</h4>
          <small className='text-light'>Intermediate</small>
         </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
         <div> <h4>ReactJs</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
         <div> <h4>Sass</h4>
          <small className='text-light'>Experienced</small></div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div><h4>BootStrap</h4>
          <small className='text-light'>beginner</small>
          </div>
          </article>
        </div>

      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div><h4>NodeJs</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MongoDb</h4>
          <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MySql</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Expressjs</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
         <div> <h4>JAVA</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>C++</h4>
          <small className='text-light'>Experienced</small>
        </div>
          </article>
        </div>

      </div>
     </div>
    </section>
  )
}

export default exprience