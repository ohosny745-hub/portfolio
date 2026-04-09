import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const ProjectsData = [
  {
    id: 1,
    image: IMG1,
    title: 'projects 1',
  },
  {
    id: 2,
    image: IMG2,
    title: 'projects 2',
  },
  {
    id: 3,
    image: IMG3,
    title: 'projects 3',
  },
  {
    id: 4,
    image: IMG4,
    title: 'projects 4',
  },
  {
    id: 5,
    image: IMG5,
    title: 'projects 5',
  },
  {
    id: 6,
    image: IMG6,
    title: 'projects 6',
  },
]
function Projects() {
  return (
    <section className="projects" id='projects'>
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>

      <div className="container projects_container">
        {ProjectsData.map(({ id, image, title }) => (
        <article key={id} className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={image} alt="{title}" />
          </div>


          <div className="content">
      <h3>{title}</h3>
    </div>

        </article>
        ))}        
      </div>
    </section>
  )
}

export default Projects
