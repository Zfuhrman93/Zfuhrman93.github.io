import '../styles/skill.css'
import React from 'react'

const Skills = (props) => {
  return(
    <>
      <h1>Skills:</h1>
      <div className='skill-list'>
        <h3>Languages:</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Python</li>
        </ul>
        <h3>Databases:</h3>
        <ul>
          <li>MongoDB</li>
        </ul>
        <h3>Libraries/Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Express.js</li>
          <li>Node.js</li>
        </ul>
        <h3>Tools:</h3>
        <ul>
          <li>Mongoose</li>
          <li>REST API</li>
          <li>AWS</li>
          <li>GITHUB</li>
        </ul>
      </div>
    </>
  )
}

export default Skills;