import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./signup.css";
import Axios from "axios";
const Signup = () => {
  const [msg,setmsg]=useState('')
  const [modal, setModal]=useState('')
  const url = "http://127.0.0.1:8000/signup/";
const nav=useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
    })
      .then((res) => {
        // console.log(res.data);
        if(data.password===data.confirm_password){
          setmsg(res.data.message)
          setModal("show-modal2")
          setTimeout(()=>{
            nav("/login")
          },5000)
        }
        else{
          setmsg("confirm password is not same!")
        }
      })
      .catch((error) => {
        // console.error(error);
        setmsg(error.message)
      });
  };
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData,"data available");
  }
  return (
    <>
      <section className=" bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-end align-items-center h-100">
              <h1 className="logo">SEE DESIGN</h1>
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px",background:"#383131c7" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>
                    
                    <form onSubmit={(e) => submit(e)} style={{margin:"0px"}}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          value={data.name}
                          onChange={(e) => handle(e)}
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                        />
                        {/* <label className="form-label" htmlFor="form3Example1cg">Your Name</label> */}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          value={data.email}
                          onChange={(e) => handle(e)}
                          className="form-control form-control-lg"
                          placeholder="Your Email"
                        />
                        {/* <label className="form-label" htmlFor="form3Example3cg">Your Email</label> */}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          value={data.password}
                          onChange={(e) => handle(e)}
                          className="form-control form-control-lg"
                          placeholder="Password"
                        />
                        {/* <label className="form-label" htmlFor="form3Example4cg">Password</label> */}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="confirm_password"
                          value={data.confirm_password}
                          onChange={(e) => handle(e)}
                          className="form-control form-control-lg"
                          placeholder="Confirm password"
                          style={{color:"white"}}
                        />
                        {/* <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label> */}
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body" style={{textDecoration:'none'}}>
                            <u style={{color:"white"}}>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          style={{ color: "white" }}
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <NavLink to="/login" className="fw-bold text-body" style={{textDecoration:"none"}}>
                          Login here
                        </NavLink>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*------------------------------ modal section ----------------------- */}
      <div class={`modal2 ${modal}`}>
    <div class="modal-content2">
        <span class="close-button2" onClick={()=>setModal("")}>×</span>
        <h1 style={{color:"black",fontWeight:"500",
    fontSize:"28px"}}>{msg}</h1>
    </div>
</div>
{/*----------------------------------- modal end ----------------------------- */}
      
    </>
  );
};

export default Signup;
