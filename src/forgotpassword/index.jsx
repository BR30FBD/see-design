import React, { useState } from 'react'
import "./style.css"
import  Axios  from 'axios';
import { NavLink } from 'react-router-dom';
const Forgotpassword = () => {
    const [display,setDisplay]=useState("none");
    const [text,setText]=useState("Get New Password");
    const url = "http://127.0.0.1:8000/login/";

    const [data,setData]=useState({
      email:""
    })
    const handlepass=(e)=>{
        e.preventDefault();
        if(document.getElementById("email").value.length==0){
            alert("data not filled")
        }else{
            setDisplay("block");
            setText("set password")
        }
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      Axios.post(url, {
        email: data.email,
      
      })
        .then((res) => {
          console.log(res.data); 
          setData(res.data);
        })
        .catch((error) => {
          console.error(error);
          // setmsg(error.message)
        });
    
    }
    function handlemail(e) {
      const newData = { ...data };
      newData[e.target.id] = e.target.value;
      setData(newData);
      console.log(newData,"data available");
    }
  return (
    <>
    <div className='main'>

    <div className="container padding-bottom-3x mb-2 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="forgot">
          	
          	<h2>Forgot your password?</h2>
         

          </div>	
          
          <form className="card mt-4" onSubmit={(e)=>handlesubmit(e)}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="email-for-pass">Enter your email address</label>
                <input className="form-control" type="text" id="email" value={data.email} onChange={(e)=>handlemail(e)} required=""/>

                {/* <input className="form-control" type="text" id="email-for-pass" required=""/> */}

                <small className="form-text text-muted">Enter the email address you used during the registration. Then we'll email a link to this address.</small>
                <label htmlFor="email-for-pass" style={{display:`${display}`}}>Enter six digit code sent to your Email</label>
                <input className="form-control" type="text" id="email-for-code"   required="" style={{display:`${display}`}}/>
                <label htmlFor="email-for-code" style={{display:`${display}`}}>Reset your password</label>
                <input className="form-control" type="text" id="email-for-pass" required="" style={{display:`${display}`}}/>
                
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-success" type="submit" onClick={handlepass}>{text}</button>
             <NavLink to="/">
              <button className="btn btn-danger" type="submit">Back to Login</button>
</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
    </>
  )
}

export default Forgotpassword