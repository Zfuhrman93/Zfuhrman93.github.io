import '../styles/navbar.css'

import {
  Link
} from 'react-router-dom'


const Navbar = (props) => {
  return(
    <>
      <div className='nav-bar'>
        <h1 className='nav-bar-headers'>Zachary Fuhrman</h1>
        <h3 className='nav-bar-headers'>Full-Stack Developer</h3>
        <ul className='nav-bar-list'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About Me</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li>
          <li><Link to={'/contact-me'}>Contact Me</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;