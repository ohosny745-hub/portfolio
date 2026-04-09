import React from 'react'
import './services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
function Services() {
  return (
    <section id='services'>
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container container_services">
        <article className='card'>
          <MdDesignServices className='icon' />
          <h3>Web Design</h3>
          <p className='text-light'>Passionate web designer creating
          modern, fast, and visually engaging interfaces that deliver
          strong identity and outstanding user experience</p>
        </article>

        <article className='card'>
          <IoIosRocket className='icon' />
          <h3>Fast Performance</h3>
          <p className='text-light'>Fast performance focused web developer
            optimizing speed, responsiveness, and seamless user experience
            across all devices and platforms</p>
        </article>

        <article className='card'>
          <FaCode className='icon' />
          <h3>Clean Code</h3>
          <p className='text-light'>Clean code focused developer writing
            scalable, maintainable, and efficient solutions with clarity,
            structure, and best practices in mind</p>
        </article>
      </div>
    </section>
  )
}

export default Services
