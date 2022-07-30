import React from 'react'

const Account = () => {
  return (
    <div className='col-12 d-flex'>
<div className='col-3'>
<div class="navbar  bg-light col-12" style={{height:"100%"}}>
 
 <div style={{marginBottom:"auto",marginTop:"50px"}}>
    <a href='#account'>
 <h6 className='text-dark'>Account</h6>
 </a>
 <a href='#info'>
 <h6 className='text-dark'>Sign in and Security</h6>
 </a>
 <a href='#lang'>
 <h6 className='text-dark'>Privacy and personal data</h6> 
 </a>
 </div>
 </div>  
    </div>
<div className='col-9' style={{height:"100vh",overflow:"auto"}}>
    <div id='account'>
   <div>
    <h2 className='text-dark text-bold'>Account</h2>
    <h5 className='text-dark text-bold'>Public profile</h5>
    <p className='text-dark text-bold'>Your profile photo and name appear when you log in to See Design.com, See Design products and services, and on public-facing sites like Behance. This information is visible to others and can be different from your account name if you choose. You can update your Public Profile at any time and it will automatically update anywhere your profile photo and name appear. If you are part of an enterprise organization, your enterprise directory identity may be used in collaborations with other members of your organization.</p>
   </div>
   <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>Profile picture</p>
  <img src="https://a5.behance.net/923443c206550cd5ca1be28298a89c7c605ccbe1/img/profile/avatars/layers-138.png?cb=264615658" alt="" style={{width:"70px",height:"70px"}}/>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            Add
            </b>
        </button>
  </div>
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>Profile Name</p>
     <p>Not add</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            Add
            </b>
        </button>
  </div>
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>See Design screen name﻿</p>
     <p>Not add</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            Add
            </b>
        </button>
  </div>
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>Company</p>
     <p>Not add</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            Add
            </b>
        </button>
  </div>
</div>
<div id='info'>
  <div>
    <h5 className='text-dark text-bold'>Account information and access</h5>
    <p className='text-dark text-bold'>This is the personal information you use to access and manage your account. It will appear in collaborations if your public profile is not complete. You can also add a mobile phone number and secondary email for account security, recovery, and notifications. If you are part of an enterprise organization, your enterprise directory identity may be used in collaborations with other members of your organization.</p>
   </div>
  
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>Account name</p>
     <p>
Nitish Kushwaha</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            change
            </b>
        </button>
  </div>
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>Primary email (See Design ID)</p>
     <p>kushwaha30nitish2002@gmail.com</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            change
            </b>
        </button>
  </div>
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>Mobile phone</p>
     <p>Not add</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            Add
            </b>
        </button>
  </div>
  </div>
  <div id='lang'>
  <div>
    <h5 className='text-dark text-bold'>Preferred languages</h5>
    <p className='text-dark text-bold'>Select the language you'd like to use for See Design apps, services and communications. This setting will not apply to mobile apps, which use the language set on your mobile device.</p>
   </div>
  
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>First language</p>
     <p>

     English (United States)</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            change
            </b>
        </button>
  </div>
  <div class="navbar  bg-light col-12" style={{display:"flex",alignItems:"center"}}>
     <p>Second language</p>
     <p>kushwaha30nitish2002@gmail.com</p>
  <button className="btn    border-dark text-dark " style={{borderRadius:"30px"}}>
          <b>
            change
            </b>
        </button>
  </div>
  </div>
    </div>
    </div>
  )
}

export default Account