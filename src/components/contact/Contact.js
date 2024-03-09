import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1u0wvgn', 'template_8ayql2c', form.current, {
        publicKey: 'uCymweeHvfABYCHED',
      }
      ).then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container_content">
        <div className="contact_details">
          <article className='contact_detail'>
            <MdEmail className='icon'/>
            <h4>Email</h4>
            <h5>surajroy0770@gmail.com</h5>
            <a href="mailto:surajroy0770@gmail.com" target="_blank" rel="noreferrer">Send Me Message</a>
          </article>
          <article className='contact_detail'>
            <FaWhatsapp className='icon'/>
            <h4>WhatsApp</h4>
            <h5>+916398629809</h5>
            <a href="https://api.whatsapp.com/send?phone=+916398629809" target="_blank" rel="noreferrer">Send Me Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter Your name" required/>
          <input type="email" name="email" placeholder="Enter your email" required/>
          <textarea name="message" rows="10" placeholder="Enter message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact