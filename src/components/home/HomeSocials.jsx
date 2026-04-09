import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function HomeSocials() {
    return (
    <div className='home_socials'>
        <a href="https://www.linkedin.com/in/omar-hosny-9290423a3/" target='_blaank' rel='noreferrer'><FaLinkedinIn /></a>
        <a href="https://github.com/ohosny745-hub" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.facebook.com/omar.hosny.833932/" target='_blank' rel='noreferrer'><FaFacebookF /></a>
        <a href="https://wa.me/201228170422" target='_blank' rel='noreferrer'><FaWhatsapp /></a>
    </div>
    )
}

export default HomeSocials
