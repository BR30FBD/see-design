import React from 'react'
import { NavLink } from 'react-router-dom';
import "./header.css";
import profile from "./download.png"

const Header = () => {
  const handlenav=()=>{
    document.body.classList.toggle("menu-active");
  }
 

  return (
    <>
    <nav className="navbar">
  <div className="logo" id='logo-header'>
    <NavLink to="/">
    <img src="https://www.seedesigns.in/content/assets/images/see-designs-logo.png" alt="LOGO" />
    </NavLink>
    </div>
  <div className="push-left">
    <button id="menu-toggler" data-classname="menu-active" className="hamburger" onClick={handlenav}>
      <span className="hamburger-line hamburger-line-top"></span>
      <span className="hamburger-line hamburger-line-middle"></span>
      <span className="hamburger-line hamburger-line-bottom"></span>
    </button>

    {/* <!--  Menu compatible with wp_nav_menu  --> */}
    <ul id="primary-menu" className="menu nav-menu">
      <li className="menu-item current-menu-item"><NavLink to="/" className="nav__link" >Home</NavLink></li>
      {/* <li className="menu-item dropdown"><NavLink to="/cateogry" className="nav__link"  >Dashbord</NavLink>
        
      </li> */}
      <li className="menu-item dropdown"><NavLink to="/login" className="nav__link"  >Login</NavLink>
       
      </li>
      <li className="menu-item "><NavLink to="/#" className="nav__link"  >Log out</NavLink>
       
      </li>
      <li className="menu-item "><NavLink to="/profile" className="nav__link"  >
        <img src={profile} alt="" style={{width:"30px",height:"30px",borderRadius:"50%"}} />
      </NavLink>
       
       </li>
    </ul>


  </div>
</nav>

    </>
  )
}

export default Header