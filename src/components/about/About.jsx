import React from 'react'
import './about.css'
import IMageME from '../../assets/me.about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt="" />
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">

            <div className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experlence</h5>
              <small>1 year working</small>
            </div>

            <div className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>15+ worldwide</small>
            </div>

            <div className="about_card">
              <VscFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </div>
          </div>

          <p>I am a passionate Front-End Developer with
          experience in building modern, responsive,
          and user-friendly web applications. I focus
          on writing clean, efficient code using HTML,
          CSS, JavaScript, and React. I enjoy turning
          ideas into real projects and continuously improving
          my skills to deliver high-quality digital experiences.</p>

          <a href="#contact " className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
