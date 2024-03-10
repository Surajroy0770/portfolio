import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Portfolio</a>
      <ul className='permalink'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socia">
        <a href="http://facebook.com"><FaFacebook/></a>
        <a href="http://instagram.com"><FaInstagramSquare/></a>
        <a href="http://Twitter.com"><FaTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Portfolio. All rights services</small>
      </div>
    </footer>
  )
}

export default Footer