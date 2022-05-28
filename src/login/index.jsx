import React, { useState } from 'react'
import './login.css'
// import img from "./stadob.png"
// import googleimg from "./download.png"
// import fb from "./fb.png"
import { NavLink, useNavigate } from 'react-router-dom'
import Axios  from 'axios'

const Login = () => {
  const [msg,setmsg]=useState("")
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
        if(res.data.message==="Login Successful"){
          setTimeout(
            ()=>{
              nav("/search")
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
    <section className="vh-100 gradient-custom">
    <div className="container py-3 h-100">
      <div className="row d-flex justify-content-end align-items-center h-100" style={{overflow:"hidden"}}>
      <h1 className='logo'>SEE DESIGN
      
      </h1>
   
        <div className="col-12 col-md-8 col-lg-6 col-xl-5" style={{width:"35%"}}>
          
          <div className="card bg-light  text-dark" style={{borderRadius: "1rem"}}>
            <div className="card-body p-5 text-center">
  
              <div className=" pb-5">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-dark-50 mb-5">Please enter your login and password!</p>
                <p>{msg}</p>
  <form  onSubmit={(e)=>submitdata(e)}
  
  >
                <div className="form-outline form-white mb-4">
                  <input type="email" id="email"  value={data.email}
                          onChange={(e) => handle(e)} className="form-control form-control-lg" name='email'  placeholder='Email' required />
                  {/* <label className="form-label" htmlFor="typeEmailX">Email</label> */}
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" id="password"  value={data.password}
                          onChange={(e) => handle(e)} className="form-control form-control-lg" name='pass' placeholder='Password'  required/>
                  {/* <label className="form-label" htmlFor="typePasswordX">Password</label> */}
                </div>
  
                <p className="small mb-5 pb-lg-2"><NavLink to="/forgot" className="text-dark-50" style={{color:"royalblue", textDecoration: "none"
}} >Forgot password?</NavLink></p>
  
                <button className="btn btn-outline-dark btn-lg px-5 bg-dark text-white" type="submit" >Login</button>
  </form>
                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-dark">
                  <i className='fab fa-facebook' style={{fontSize:"28px",color:"royalblue"}}></i>
                      </a>
                  <a href="#!" className="text-white">
                  <i className='fab fa-twitter' style={{fontSize:"28px",color:"#00acee",marginLeft:"10px",marginRight:"10px"}}></i>

                      </a>
                  <a href="#!" className="text-white">
                  <i className='fab fa-google' style={{fontSize:"28px",color:"	#4285F4"}}></i>
                  </a>
                </div>
  
              </div>
  
              <div>
                <p className="mb-0">Don't have an account? <NavLink to="/signup" className="text-dark-50 fw-bold" style={{textDecoration: "none"}}>Sign Up</NavLink>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login