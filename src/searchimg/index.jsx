import React, { useState } from 'react'
import "./search.css"
// import camera from "./camera.png"
import { useNavigate } from 'react-router-dom';
const Searchimg = () => {
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
        nav("/dashbord",{state:{id:1,name:reader.result}})

          }
        }
        reader.readAsDataURL(e.target.files[0])
        console.log(img,"img")
       }
  return (
    <>
    <div style={{width:"100vw",height:"100vh"}} className="main">
        <h1>Search Here Similar Images</h1>
        <div className='search-container'>
            <input type="search" placeholder='search here....' className='search-btn'/>
            {/* <input type="file" id='file'/> */}
            <label  id='bg-label' onClick={handlemodal}>
            <i class='fas fa-camera' style={{fontSize:"35px",color:"black"}}></i>
            </label>
        </div>
        {/* <img src="./camera.png" alt="" /> */}
    </div>
    <div className='modal-container' style={{display:`${modal}`}}>
        <div className='box'>
            <div className='up-section'>
                <p style={{marginRight:"20px",fontSize:"30px"}}>Find Similar Images</p>
                <p style={{marginRight:"20px",fontSize:"30px",cursor:"pointer"}} onClick={()=>setmodal("none")}>x</p>
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

export default Searchimg