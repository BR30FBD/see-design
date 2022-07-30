import React from 'react'
import { useState } from 'react'
import Account from '../account'
import Communication from '../communication'
import Overview from '../overview'
import Payment from '../payment'


const Navbar = () => {
  const [over,setOver]=useState(true);
  const [account,setAccount]=useState(false);
  const [payment,setPayment]=useState(false);
  const [communication,setCommunication]=useState(false)
  const handleover=()=>{
    setOver(true);
    setPayment(false);
    setAccount(false);
    setCommunication(false)
  }
  const handleaccount=()=>{
    setOver(false);
    setPayment(false);
    setAccount(true);
    setCommunication(false)
  }
  const handleplane=()=>{
    setOver(false);
    setPayment(true);
    setAccount(false);
    setCommunication(false)
  }
  const handlecomm=()=>{
    setOver(false);
    setPayment(false);
    setAccount(false);
    setCommunication(true)
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light" style={{boxShadow:"none"}}>
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" onClick={handleover}>Overview</a>
        <a class="nav-link" onClick={handleaccount}>Account and Security</a>
        <a class="nav-link" onClick={handleplane}>Plans and Payment</a>
        <a class="nav-link " onClick={handlecomm}>Communication Preferences</a>
      </div>
    </div>
  </div>
</nav>
{over &&
  <Overview/>

}
{
  account &&
<Account/>

}
{
  payment &&
<Payment/>

}
{communication &&
<Communication/>
}
    </div>
  )
}

export default Navbar