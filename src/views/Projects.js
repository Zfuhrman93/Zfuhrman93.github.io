import '../styles/projects.css'
import React from 'react'
import GameReview from '../components/projects/GameReview'
import RamenDojo from '../components/projects/RamenDojo'

const Projects = (props) => {
  return(
    <>
      <h1>Projects:</h1>
      <div className='project-row'>
        <div>
          <h2 className='project-header'><a className='project-link' href="https://github.com/Zfuhrman93/game-review-site">Game Review Site</a></h2>
          <GameReview />
        </div>
        <div>
          <h2 className='project-header'><a className='project-link' href="https://github.com/Zfuhrman93/ramen-dojo">Ramen Dojo Site</a></h2>
          <RamenDojo />
        </div>
      </div>
    </>
  )
}

export default Projects;