import '../../styles/projects.css'
import React from 'react'

const RamenDojo = (props) => {
  return(
    <>
      <img className='demo-img' src={require('../../images/RamenDojo.png')} alt='Ramen Dojo Site' /><br/>
      <label>Tech Used: React | Express.js | MongoDB | Node.js </label>
    </>
  )
}

export default RamenDojo;