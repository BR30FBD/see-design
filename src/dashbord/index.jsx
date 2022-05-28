import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./dash.css"
const Dashboard = () => {
  const [data,setData]=useState("");
  console.log(data.hits,"data")
  const location=useLocation();
  console.log(location)
  function SearchImg(e){
e.preventDefault();
   dataget()
}
const dataget=()=>{
  const cur_url = document.getElementById('searchimg').value;

  fetch("https://pixabay.com/api/?key=12763398-42249d3dd1db2f56d3171f8c0&q="+cur_url+"&image_type=photo").then((res)=>res.json())
  .then((data)=>
  setData(data)
  )
}


    useEffect(()=>{
      dataget();
    },[])
  return (

    <>
    
    <div className='main-dash'>
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Sort " aria-label="Search" id="searchimg"/>
      <button className="btn btn-outline-success" type="submit" id='Search' onClick={SearchImg}>Search</button>
    </form>
  </div>
</nav>
<div className='content'>
    <div className='mini-dash'>
        <div className='img-upload'>
        <img src={location.state.name} className="img-thumbnail1" alt="..."/>
        </div>
    </div>
    <div className='max-dash'>
    <div className="card-group">
    
    <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 ">
      {data && data.hits.map((data)=>(
 <div className="col">
 <div className="card group-img"  >
   <img src={data.previewURL} className="card-img-top group-img" alt="..." />
   
 </div>
</div>
      ))}
 

</div>

 

    
    <div id='imageView'></div>

</div>

</div>
</div>
</div>
    </>
  )
}

export default Dashboard