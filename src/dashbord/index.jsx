import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import Searchbar from '../searchbar';
import searchicon from "./searchicon.png"
import "./dash.css"
const Dashboard = () => {
  const [data,setData]=useState("");
  const [panel,setPanel]=useState(false)
  const [value,setValue]=useState("rose");
  console.log(data.hits,"data")
  const location=useLocation();
  console.log(location)

  function SearchImg(e){
    const a=e.target.id;
    const val=document.getElementById(a).value;
  console.log(a,"dataaagcvghchgcv")
e.preventDefault();
setValue(val);

   dataget()
}
const dataget=()=>{
  // const value=document.getElementById("searchvalue").value;

  fetch("https://pixabay.com/api/?key=12763398-42249d3dd1db2f56d3171f8c0&q="+{value}+"&image_type=photo").then((res)=>res.json())
  .then((data)=>
  setData(data)
  )
}


    useEffect(()=>{
      dataget();
    },[])
  return (

    <>
    <div className='main-section-dashbord'>
    <div className='main-nav'>
    <label className="drop">
      <input type="checkbox" id="target-drop-example"/>
      <span className="control">Cateogry</span> 

      <ul className="drop-items">
        <li className="item-drop" id='data' onClick={(e)=>SearchImg(e)}>
          Metal
         </li>
        <li className="item-drop" id='data' onClick={(e)=>SearchImg(e)}>
          wood
         </li>
        <li className="item-drop" id='data' onClick={(e)=>SearchImg(e)}>
          stone
          </li>
      </ul>

      <label htmlFor="target-drop-example" className="overlay-close"></label>

    </label>  
    <div className='serach_continer'>
      <div id='selected_item'>
x <span className='find_similar1'>Find Similar:</span>
      </div>
      <label htmlFor='searachicon'>
        <img id='searachicon' src={searchicon} alt=""  style={{width:"20px",height:"20px",margin:"3px",marginBottom:"0px"}}/>
      </label>
      <input type="search" className='search_section' name='ftyfu' placeholders="search...." id='searchvalue'/>
      <input type="file"  id="file" style={{display:"none"}}/>
      <label htmlFor='file'>
        <img src="https://i.pinimg.com/originals/36/d9/44/36d944e4369dcf8b6ac4f722a2dd3449.png" alt="" style={{width:"40px",height:"40px",marginLeft:"10px"}} />
      </label>
    </div>
    <input type="submit" value="search" style={{height:"50px",width:"100px",margin:"10px"}}/>
    <label className="drop">
      <input type="checkbox" id="target-drop-example"/>
      <span className="control">My Libraries</span> 

      <ul className="drop-items">
        <li className="item-drop" id='data' onClick={(e)=>SearchImg(e)}>
          Metal
         </li>
        <li className="item-drop" id='data' onClick={(e)=>SearchImg(e)}>
          wood
         </li>
        <li className="item-drop" id='data' onClick={(e)=>SearchImg(e)}>
          stone
          </li>
      </ul>

      <label htmlFor="target-drop-example" className="overlay-close"></label>

    </label> 

    </div>
    <div className='main-dash' >

   
<div className='content'>
  
    <div className='mini-dash'  style={{display:`${panel ? "none":"block"}`}}>
      
        <div className='img-upload'>
        <img src={location.state.name} className="img-thumbnail1" alt="..."/>
        </div>
    </div>
    <div className='max-dash'>
    <div className="card-group">
    <div style={{width:"100%",height:"100px",background:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <p style={{marginLeft:"10px",border:"1px solid black",height:"25px",borderRadius:'13px',width:"100px",textAlign:"center",cursor:"pointer"}} onClick={()=>setPanel(!panel)}>{panel? "show Panel":"hide panel"}</p>
    <div style={{marginRight:"30px"}}>
      <label for="cars">Sort by:</label>
  <select name="cars" id="cars" style={{borderRadius:"13px"}}>
    <option value="volvo">25%</option>
    <option value="saab">50%</option>
    <option value="opel">75%</option>
    <option value="audi">100%</option>
  </select>
  </div>
    </div>
    <div className="row row-cols-2 row-cols-md-2 g-4 mt-2 ">
      {data && data.hits.slice(0,4).map((data)=>(
 <div className="col">
 <div className="card group-img" style={{width:"100%",height:"250px"}}  >
   <img src={data.previewURL} className="card-img-top group-img" style={{width:"100%",height:"100%"}} alt="..." />
   
 </div>
</div>
      ))}
 

</div>

 

    
    <div id='imageView'></div>

</div>

</div>
</div>
</div>
</div>
    </>
  )
}

export default Dashboard