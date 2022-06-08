import React from 'react'
import Summary from '../components/Summary'
import Skills from '../components/Skills'


const About = (props) => {
  return(
    <>
      <div className='container'>
      <div>
        <Skills />
      </div>
      <div>
        <Summary />
      </div>
      </div>
    </>
  )
}

export default About;