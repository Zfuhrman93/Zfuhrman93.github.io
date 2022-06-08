import '../styles/summary.css'
import React from 'react';


const Summary = (props) => {
  return(
    <>
    
      <h1>Summary of Myself</h1>
      <div className='summary-container'>
        <img className='photo' src={require('../images/Me.jpg')} alt='Me' />
        <p className='summary-text'>
        A Full-Stack developer who's been interested in code and development for most of my life. After working 7+ years in retail I decided to attend Coding Dojo's part-time accelerated course, where I learned the Fundamentals of Web development as well as the MERN Tech Stack. While at Coding Dojo I achieved the highest score possible in both my Web Fundamentals Exam and my MERN Exam (Referred to as a Black Belt on Coding Dojo's certificate).
        </p>
      </div>
    </>
  )
}

export default Summary;