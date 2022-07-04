import React, { useState } from 'react'
import './login.css'
// import img from "./stadob.png"
// import googleimg from "./download.png"
// import fb from "./fb.png"
import { NavLink, useNavigate } from 'react-router-dom'
import Axios  from 'axios'
import Googlelogin from '../googlelogin'
// import Facebook from '../facebook'
// import Twitter from '../twitter'

const Login = () => {
  const [msg,setmsg]=useState("")
  const [modal, setModal]=useState('')
  const nav=useNavigate();
  const url = "http://127.0.0.1:8000/login/";

  const [data, setData] = useState({
    
    email: "",
    password: "",
    
  });
 
  // const email=document.getElementById('typeEmailX')|| "";
  // const pass=document.getElementById('typePasswordX') || "";
  const submitdata=(e)=>{
    // const {email,pass}=document.forms[0]
    // console.log(email,"data")
    e.preventDefault();
    Axios.post(url, {
      email: data.email,
      password: data.password
    
    })
      .then((res) => {
        console.log(res.data);
        setmsg(res.data.message)
        setModal("show-modal1")
        if(res.data.message==="Login Successful"){
          localStorage.setItem("token",JSON.stringify(res.data.token));
          setTimeout(
            ()=>{
              nav("/")
            },5000
          )
        }

       
        
      })
      .catch((error) => {
        console.error(error);
        setmsg(error.message)
      });
  }
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData,"data available");
  }
  return (
    <>
    <section className="vh-100 gradient-custom">
    <div className="container py-3 h-100">
      <div className="row d-flex justify-content-end align-items-center h-100" style={{overflow:"hidden"}}>
      <h1 className='logo'>SEE DESIGN
      
      </h1>
   
        <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{width:"35%"}}>
          
          <div className="card   text-dark" style={{borderRadius: "1rem", backgroundColor:"#383131c7",color:"#fff"}}>
            <div className="card-body p-5 text-center">
  
              <div className=" pb-1">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-dark-50 text-light">Please enter your login and password!</p>
                
  <form  onSubmit={(e)=>submitdata(e)} style={{margin:"0px",marginBottom:"10px"}}
  
  >
                <div className="form-outline form-white mb-2">
                  <input type="email" id="email"  value={data.email}
                          onChange={(e) => handle(e)}  style={{color:"black"}}  className="form-control form-control-lg" name='email'  placeholder='Email' required />
                  {/* <label className="form-label" htmlFor="typeEmailX">Email</label> */}
                </div>
  
                <div className="form-outline form-white  ">
                  <input type="password" id="password" style={{color:"black"}}  value={data.password}
                          onChange={(e) => handle(e)} className="form-control form-control-lg" name='pass' placeholder='Password'  required/>
                  {/* <label className="form-label" htmlFor="typePasswordX">Password</label> */}
                </div>
  
                <p className="small mb-2 pb-lg-2"><NavLink to="/forgot" className="text-light-50" style={{color:"white", textDecoration: "none"
}} >Forgot password?</NavLink></p>
  
                <button className="btn btn-outline-dark btn-lg px-5 bg-dark text-white" type="submit" >Login</button>
  </form>
  <Googlelogin/>
  {/* <Facebook/> */}
  {/* <Twitter/> */}
                {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-dark">
                  <i className='fab fa-facebook' style={{fontSize:"28px",color:"royalblue"}}></i>
                      </a>
                  <a href="#!" className="text-white">
                  <i className='fab fa-twitter' style={{fontSize:"28px",color:"#00acee",marginLeft:"10px",marginRight:"10px"}}></i>

                      </a>
                  <a href="#!" className="text-white">
                  <i className='fab fa-google' style={{fontSize:"28px",color:"red"}}></i>
                  </a>
                </div> */}
  
              </div>
  
              <div>
                <p className="mb-3">Don't have an account? <NavLink to="/signup" className="text-dark-50 fw-bold" style={{textDecoration: "none"}}>Sign Up</NavLink>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
     <div class={`modal1 ${modal}`} style={{display:"block"}}>
     <div class="modal-content1">
         <span class="close-button1" onClick={()=>setModal("")}>×</span>
         <h1 style={{color:"black",fontWeight:"500",
     fontSize:"28px"}}>{msg} 
     </h1>
     </div>
 </div>
      </> 
  )
}

export default Login