
import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dr6aiwb', 'template_283d8wq', form.current, '2HwgGkBA_O30lW9VP');
    e.target.reset();
  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>zeeshanahmed860443@gmail.com</h5>
            <a href="mailto:zeeshanahmed860443@gmail.com" target='_blank'>Send a Messsage</a>
        </article>
        <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Zeeshan Ahmed</h5>
            <a href="https://www.linkedin.com/in/zeeshan-ahmed-b87a48227/" target='_blank'>Send a Messsage</a>
        </article>
        <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Zeeshan Ahmed</h5>
            <a href='https://wa.me/+918604435248' target='_blank'>Send a Messsage</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Name' />
        <input type="emal" name='email'placeholder='Your Email'/>
        <textarea name="message" rows="7" placeholder='Your Message'></textarea>
        <button className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
