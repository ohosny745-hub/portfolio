import React, { useRef } from 'react';
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


import emailjs from '@emailjs/browser';

const ContactData = [
  {
    id:1,
    icon: <MdOutlineMail />,
    title: "Email",
    info: "ohosny745@gmail.com",
    link: "mailto:ohosny745@gmail.com",
  },
  {
    id:2,
    icon: <FaFacebookMessenger />,
    title: "Messenger",
    info: "Omar Hosny",
    link: "https://www.messenger.com/e2ee/t/821167421032763",
  },
  {
    id:3,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "01228170422",
    link: "https://wa.me/201228170422",
  },
]
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wgi7cmd', 'template_pd90t2a', form.current, 'Kvxhh9cdRRQzwPA-B',
      )
      e.target.reset()
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({id , icon , title , info , link}) => (
            <article key={id} className='contact_option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank'>Send Message</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea rows={10} name="message" id="" placeholder='Enter Your Message'></textarea>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
