import React, { useState } from 'react'
import "./style.css"
const Forgotpassword = () => {
    const [display,setDisplay]=useState("none");
    const [text,setText]=useState("Get New Password");
    const handlepass=(e)=>{
        e.preventDefault();
        if(document.getElementById("email-for-pass").value.length==0){
            alert("data not filled")
        }else{
            setDisplay("block");
            setText("set password")
        }
    }
  return (
    <>
    <div className='main'>

    <div className="container padding-bottom-3x mb-2 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="forgot">
          	
          	<h2>Forgot your password?</h2>
          <p>Change your password in three easy steps. This will help you to secure your password!</p>
          <ol className="list-unstyled">
            <li><span className="text-primary text-medium">1. </span>Enter your email address below.</li>
            <li><span className="text-primary text-medium">2. </span>Our system will send you a temporary link</li>
            <li><span className="text-primary text-medium">3. </span>Use the link to reset your password</li>
          </ol>

          </div>	
          
          <form className="card mt-4"  action="mailto:kushwaha30nitish2002@gmail.com" method="post" encType="text/plain">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="email-for-pass">Enter your email address</label>
                <input className="form-control" type="text" id="email-for-pass" required=""/>

                {/* <input className="form-control" type="text" id="email-for-pass" required=""/> */}

                <small className="form-text text-muted">Enter the email address you used during the registration. Then we'll email a link to this address.</small>
                <label htmlFor="email-for-pass" style={{display:`${display}`}}>Enter six digit code sent to your Email</label>
                <input className="form-control" type="number" id="email-for-code" min="0"   required="" style={{display:`${display}`}}/>
                <label htmlFor="email-for-code" style={{display:`${display}`}}>Reset your password</label>
                <input className="form-control" type="text" id="email-for-pass" required="" style={{display:`${display}`}}/>
                
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-success" type="submit" onClick={handlepass}>{text}</button>
              <button className="btn btn-danger" type="submit">Back to Login</button>
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