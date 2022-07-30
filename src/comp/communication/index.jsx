import React from 'react'

const Communication = () => {
  return (
    <div className='col-12 d-flex'>
    <div className='col-3'>
    <div class="navbar  bg-light col-12" style={{height:"100%"}}>
     
     <div style={{marginBottom:"auto",marginTop:"50px"}}>
        <a href='#account'>
     <h6 className='text-dark'>Account</h6>
     </a>
    
     </div>
     </div>  
        </div>
    <div className='col-9' style={{height:"100vh",overflow:"auto"}}>
        <div id='account'>
       <div>
        <h2 className='text-dark text-bold'>Account communication preferences</h2>
        <p className='text-dark text-bold'>Adobe needs to occasionally send you emails related to your account, like billing issues or security alerts. These emails will be sent to your primary email address. You can also opt to receive updates by text message (SMS).</p>
       </div>
      
      <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
         <p>Email</p>
         <p>
kushwaha30nitish2002@gmail.com</p>
      <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
              <b>
              (required)
                </b>
            </button>
      </div>
      <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
         <p>Phone (SMS)</p>
         <p>Not add</p>
      <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
              <b>
                Add
                </b>
            </button>
      </div>
     
    </div>
  
        </div>
        </div>
  )
}

export default Communication