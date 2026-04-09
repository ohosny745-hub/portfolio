import React from 'react'
import me from '../../assets/me.png'
import './home.css'
import CV from '../../assets/cv.pdf'
import HomeSocials from './HomeSocials' // ✅ مهم جدًا

function Home() {
  return (
    <div className='home'>
      <div className="container home_container">

        <h4>Hello Iam</h4>
        <h1>OMAR HOSNY ABDO</h1>
        <h4 className='text-light'>Frontend Developer</h4>

        <div className="btns">
          <a href={CV} className='btn' download>Download CV</a>
          <a href="https://wa.me/201228170422" className='btn btn-primary'>Lets Talk</a>
        </div>
        
        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#about" className='scroll_down'>Scroll Down</a>

        <HomeSocials />
      </div>
    </div>
  )
}

export default Home
