import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
    <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <h1>Poject Name</h1>
        </div>
        <h3>Project title</h3>
        <div className='portfolio__item-cta'>
          <a href="" className='btn'>GitHub</a>
          <a href="" className='btn btn-primary'>Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <h1>Poject Name</h1>
        </div>
        <h3>Project title</h3>
        <div className='portfolio__item-cta'>
          <a href="" className='btn'>GitHub</a>
          <a href="" className='btn btn-primary'>Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <h1>Poject Name</h1>
        </div>
        <h3>Project title</h3>
        <div className='portfolio__item-cta'>
          <a href="" className='btn'>GitHub</a>
          <a href="" className='btn btn-primary'>Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <h1>Poject Name</h1>
        </div>
        <h3>Project title</h3>
        <div className='portfolio__item-cta'>
          <a href="" className='btn'>GitHub</a>
          <a href="" className='btn btn-primary'>Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <h1>Poject Name</h1>
        </div>
        <h3>Project title</h3>
        <div className='portfolio__item-cta'>
          <a href="" className='btn'>GitHub</a>
          <a href="" className='btn btn-primary'>Demo</a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <h1>Poject Name</h1>
        </div>
        <p>An initiative to make this world a better place to live.
          Technologies Used - React, JavaScript,
           Tailwind CSS, Framer Motion</p>
        <div className='portfolio__item-cta'>
          <a href="" className='btn'>GitHub</a>
          <a href="" className='btn btn-primary'>Demo</a>
        </div>
      </article>
    </div>
   </section>
  )
}

export default portfolio