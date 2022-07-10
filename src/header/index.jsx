import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./header.css";
import profile from "./download.png"
import { useState } from 'react';
import Axios from "axios";

const Header = () => {
  const nav=useNavigate();
  const[menu,setmenu]=useState(false);
  const url = "http://127.0.0.1:8000/logout/";
  const handlenav=()=>{
    document.body.classList.toggle("menu-active");
  }
  const handlemenu=()=>{
    if(localStorage.getItem('token')){
      setmenu(true)
    }
  }
  
  // const a=localStorage.getItem('token');
//  console.log(JSON.parse(a).token);
const token=localStorage.getItem("token");
// const b=JSON.stringify(token).token;
// console.log(JSON.parse(token).token,"token");
const logout=(e)=>{
  // e.preventDefault();
  // Axios.post(url,
  //   {
  //     headers:{
  //       "Authorization":`Token ${token}`
  //       // "Authorization":"Token fdb99936c0e26670ef2bbde86785e0540dcee70e"
  //     }, 
  //   }
  // )
  fetch(url,{
    method:"POST",
    headers:{
      // "Accept":"application/json",
      // "Content-Type":"application/json",
      "Authorization":`Token ${token}`
    }
  })
    .then((res) => {
      console.log(res,"sccess"); 
      nav("/main")
        localStorage.removeItem("token");
      // if(res.data.message==="E-mail sent successfully Please check email"){
        
      // }

      // setData(res.data);
    })
    .catch((error) => {
      console.error(error);
      nav("/")
      // setmsg(error.message)
    });

  // const a=localStorage.getItem('token');
  // localStorage.clear('token')
}
const profiles=()=>{
  if(localStorage.getItem('token')){
    console.log("corrext")
  }
}
// const logout=()=>{
//   localStorage.clear();
//   nav("/main")
// }
  return (
    <>
    <nav className="navbar" style={{position:"-webkit-sticky"}}>
  <div className="logo" id='logo-header'>
    <NavLink to="/main">
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
      <li>
      <div class="d-flex flex-row align-items-center mb-4">
                    {/* <i class="fas fa-language fa-lg me-3 fa-fw"></i> */}
                    {/* <div class="form-outline flex-fill mb-0" id="google_translate_element"> */}
                    {/* <select style={{border:"none",outline:"none"}}>
                      <option value="en" >English</option>
                      <option value="hi">Hindi</option>
                    </select> */}
                    {/* </div> */}
                  </div>
      </li>
      <li className="menu-item current-menu-item"><NavLink to="/" className="nav__link" style={{textDecoration:"none"}} >
      <i class="bi bi-house-fill" style={{fontSize:"30px"}}></i>
        </NavLink></li>
      {/* <li className="menu-item dropdown"><NavLink to="/cateogry" className="nav__link"  >Dashbord</NavLink>
        
      </li> */}
      {/* <li className="menu-item dropdown"><NavLink to="/login" className="nav__link"  style={{textDecoration:"none"}}>Login</NavLink>
       
      </li> */}
      {/* <li className="menu-item "><NavLink to="/#" className="nav__link" onClick={logout} style={{textDecoration:"none"}}  >Log out</NavLink>
       
      </li> */}
      <li id='imgmenu' className="menu-item "><NavLink to="/profile" className="nav__link" onMouseOver={handlemenu} >
        <img  src={profile} alt="" style={{width:"30px",height:"30px",borderRadius:"50%"}} />
        <ul id='menu12' style={{position:"absolute",right:"10px",fontSize:"13px",listStyle:"none",background:"#fff",paddingLeft:"0px",zIndex:"999999",border:"1px solid",borderRadius:"3px",width:"100px"}}>
          <li style={{}}>
            <NavLink to='/signup' style={{textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
            <i class="bi bi-layout-text-window-reverse"></i>
            <span>
            Signup
            </span>
            </NavLink>
            </li>
          <li >
          <NavLink to='/login'style={{textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
          <i class="bi bi-box-arrow-in-right " style={{fontSize:"20px",marginRight:"10px"}}></i>
            <span>SignIn</span>
            </NavLink>
            </li>
            {menu && 
          <li style={{}}>
            
          <NavLink to='/profile' style={{textDecoration:"none",display:"flex",justifyContent:"space-around"}}>
          <i class="bi bi-person-circle"></i>
          <span>
            Profile
            </span>
            </NavLink>
            </li>
}
{menu && 
          <li style={{display:"flex",justifyContent:"space-around"}}>
          {/* <NavLink to='/' style={{textDecoration:"none",lineHeight:"20px"}}> */}
          <i class="bi bi-box-arrow-left"></i>
           <span onClick={(e)=>logout(e)}> Logout</span>
            {/* </NavLink> */}
            </li>
}

        </ul>
      </NavLink>
       
       </li>
    </ul>


  </div>
</nav>

    </>
  )
}

export default Header