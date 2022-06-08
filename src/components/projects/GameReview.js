import '../../styles/projects.css'
import React from 'react'

const GameReview = (props) => {
  return(
    <>
      <img className='demo-img' src={require('../../images/GameReview.png')} alt='Game Review Site' /><br/>
      <label>Tech Used: React | Express.js | MongoDB | Node.js </label>
    </>
  )
}

export default GameReview;