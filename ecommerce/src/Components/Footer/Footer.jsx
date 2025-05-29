import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import flechefooter from '../../Assets/flechefooter.svg'
import facebook from '../../Assets/facebook.svg'
import linkding from '../../Assets/linkding.svg'
import twitter from '../../Assets/twitter.svg'
import instagram from '../../Assets/instagram.svg'
import logo from '../../Assets/logo.jpg'


function Footer() {
  return (
    <div>
      <div className='debutfooter'>
      <div className='photogauchefooter'>
      <img src={flechefooter} alt="flechefooter" />
      </div>
      <div className='cotedroit'>
        <p>Our innovative products are designed to deliver visible results,<br/>helping you achieve the flawless complexion you've always<br/> dreamed of.</p>
      
      </div>
      </div>
      <div className='tableaufooter'>
        <div className='case1'>
        <img id='logofooter' src={logo} alt="logo" />
        <div className='contenuecase1'>
          <p>Style Guide</p>
          <p>Licencing</p>
          <p>Change Log</p>
        </div>
        </div>
        <div className='case2'>
          <div className='lespages'>
        <p>Pages</p>
        <Link to='/'>Home</Link><br/>
        <Link to='About'>About</Link><br/>
        <Link to='Shop'>Shop</Link><br/>
        <Link to='Blog'>Blog</Link><br/>
        <Link to='Contact'>Contact</Link>
        </div>
        <div className='reseaux'>
        <img  src={facebook} alt="facebook" />
        <img  src={linkding} alt="linkding" />
        <img  src={twitter} alt="twitter" />
        <img  src={instagram} alt="instagram" />
        </div>
        </div>
       <div className='case3'>
        <p>Depending on the company, a user <br/> experience designer may need to be a jack <br/> of all trades</p>
        <input
              type="email"
              id="email"
              placeholder="        Email"
            />
       </div>
      </div>
      
    </div>
  )
}

export default Footer