import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Omar Hosny</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/omar.hosny.833932/" target='_blank' rel='noreferrer'><FaFacebookF /></a>
        <a href="https://www.messenger.com/e2ee/t/821167421032763" target='_blank' rel='noreferrer'><FaFacebookMessenger /></a>
        <a href="https://wa.me/201228170422" target='_blank' rel='noreferrer'><FaWhatsapp /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; <a href="#">Omar Hosny</a> All Rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
