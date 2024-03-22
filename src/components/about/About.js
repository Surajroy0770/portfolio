import './about.css'
import img from '../../assets/suraj_photo.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_left">
          <div className="about_me">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="about_right">
          <div className="about_card">
            <article className='about_artical'>
              <FaAward className='about_icon' />
              <h5>Experince</h5>
              <small> 1+ Years</small>
            </article>
            <article className='about_artical'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small> 10+ Project completed</small>
            </article>
          </div>
          <p>To Secure a Challenging Position Where I can effectively contribute my Skills as software professional for growth of
            Organization and myself.To leverage my skills and passion for technology to excel as a full-stack developer, contributing to innovative projects and collaborating with diverse teams to deliver high-quality solutions. Committed to continuous learning and staying abreast of emerging technologies to drive growth and make a positive impact in the field of software development.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About