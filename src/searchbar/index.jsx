import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./searchbar.css"
const Searchbar = () => {
  const [display,setDisplay]=useState(false)
  const handle=(e)=>{
    e.preventDefault();
    setDisplay(!display)
  }
  const [modal,setmodal]=useState('none');
  const [img,setimg]=useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvXhghObjtNsjtk1I86YJOQNPj0TFT80TVw&usqp=CAU");
  const nav=useNavigate();
  const handlemodal=()=>{
setmodal('block')
  }
  const handleimg=(e)=>{
      const reader=new FileReader();
      console.log(reader)
      
      reader.onload=()=>{
        if(reader.readyState ===2){
         setimg(reader.result)
         console.log(reader.result,"result")
      nav("/dashbord",{state:{id:1,name:reader.result,txt:"your uploaded image"}})

        }
      }
      reader.readAsDataURL(e.target.files[0])
      console.log(img,"img")
     }
  return (
    <>


<form className="search_bar larger" style={{width:"700px"}} >
  <div className="search_dropdown" style={{width: "16px"}} onClick={handle}>
    <span >All</span>
    <ul style={{display:`${display  ? "block":"none"}`}} >
      <li className="selected"  onClick={handle}>METAL</li>
      <li  onClick={handle}>WOODS</li>
      <li  onClick={handle}>STONE</li>
    </ul>
  </div>
  {/* <button type="submit" value="Search" >Search</button> */}

  <input type="text" placeholder="Search for anything" style={{color:"black",marginLeft:"100px"}} />

  <button type="button" value="Search" onClick={handlemodal}>Search</button>
</form>

<div className='modal-container' style={{display:`${modal}`,position:"fixed",zIndex:"10000000",marginBottom:"150%",marginLeft:"-135px",marginTop:"-444px",height:"100vh"}}>
        <div className='box' style={{marginTop:"10%"}}>
            <div className='up-section'>
                <p style={{marginRight:"20px",fontSize:"30px",color:"black"}}>Find Similar Images</p>
                <p style={{marginRight:"20px",fontSize:"30px",cursor:"pointer",color:"black"}} onClick={()=>setmodal("none")}>x</p>
            </div>
            <div className='drag'>
           <label htmlFor='file' style={{backgroundImage:`url(${img})`}} id="img-upld">

                <div className='drag-img' style={{
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat:"no-repeat"
                }}>
                    
                </div>
            </label>

            </div>
            <input type="file" id="file" style={{display:"none"}} onChange={handleimg}/>
        </div>
    </div>
    </>
  )
}

export default Searchbar