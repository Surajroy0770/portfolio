import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocial() {
  return (
    <div className='header_social'>
        <a href="http://www.linkedin.com/in/suraj-roy-201a89205" target='_blank' rel="noreferrer" className='linked'><BsLinkedin className='Linkedin'/> LinkedIn</a>
        <a href="http://www.github.com/Surajroy0770" target='_blank' rel="noreferrer" className='githubs'><FaGithub className='github'/> Github</a>
    </div>
  )
}

export default HeaderSocial