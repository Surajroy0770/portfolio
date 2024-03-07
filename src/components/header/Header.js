import CTA from './CTA'
import './header.css'
import img from '../../assets/suraj1.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header id='home'>
      <div className="container header__container">
        <div className="left">
          <h5>Hello, I'm</h5>
          <h1>Suraj Roy</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <CTA />
          <HeaderSocial />
        </div>
        <div className="rigth">
          <div className="me">
            <img src={img} alt="" className='su'/>
          </div>
        </div>


      </div>

    </header>
  )
}

export default Header