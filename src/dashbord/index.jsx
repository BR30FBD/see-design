import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Searchbar from '../searchbar';
import heart from "./heart.png";
import download from "./download.jpg";
import camera from "./camera.png";
import searchicon from "./searchicon.png";
import upload from "./upload.jpg";
import "./dash.css";
import Subcription from "../subcription";
import { BorderRight } from "@material-ui/icons";
import img from "./img search.svg";
const Dashboard = () => {
  // const [imgresult,setImgresult]=useState("")
  const [data, setData] = useState("");
  const [panel, setPanel] = useState(false);
  const [value, setValue] = useState("rose");
  const [similar, setSimilar] = useState("flex");
  // const [img,setImg]=useState("none")
  const [altvalue, setAltvalue] = useState("");
  const [display, setDispaly] = useState("none");
  const [imgsrc, setImgsrc] = useState("");
  const [modal, setModal] = useState("none");
  const [subs,setsubs]=useState("none")
  console.log(data.hits, "data");
  const location = useLocation();
  console.log(location, "location");
  const [sub,setsub]=useState(true)
  const [price,setprice]=useState(true)
  const [disc,setdisc]=useState(true)
  const [orient,setorient]=useState(true);
  const [copy,setcopy]=useState(true);
  const [people,setpeople]=useState(true);
  const [right,setright]=useState(true);
  const [size,setsize]=useState(true);
  const [iso,setiso]=useState(true);
  const [color,setcolor]=useState(true);
  const [safe,setsafe]=useState(true);
const [icon,seticon]=useState(true)
const [modalimg,setmodalimg]=useState("");
const [index,setIndex]=useState(null)
  const nav=useNavigate();
const metal=[
  {imgsrc:"https://www.refractorymetal.org/wp-content/uploads/2019/10/Common_Metal_Materials-2.png"},
  {imgsrc:"https://images.squarespace-cdn.com/content/v1/571079941bbee00fd7f0470f/1534799119980-PRY9DCBYV547AHYIOBSH/Iron+%284%29.JPG?format=2500w"},
  {imgsrc:"https://qph.cf2.quoracdn.net/main-qimg-3eba01ac4f8297849fecae7c1668ab09-lq"},
  {imgsrc:"https://s4x3n5c7.stackpathcdn.com/wp-content/uploads/2019/04/goldeffects__1.png"},
  {imgsrc:"https://samrajpolytexltd.com/wp-content/uploads/2019/07/4S-metallic-gold-spray-paint.jpg"},
  {imgsrc:"https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg"},
  {imgsrc:"https://tampasteel.com/wp-content/uploads/2018/08/metals-that-dont-rust.jpg"},
  {imgsrc:"https://cdn.pixabay.com/photo/2016/01/14/20/55/factory-1140760__340.jpg"},
  {imgsrc:"https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-carts-1275480__340.jpg"},
]
  function SearchImg(e) {

    const a = e.target.id;
    const val = document.getElementById(a).value;
    // console.log(a, "dataaagcvghchgcv");
    e.preventDefault();
    setValue(val);

    dataget();
  }
  const handlemodal=(e)=>{
    const a=e.target.id;
    setIndex(e.target.id)
    console.log(e.target.id)

    const b=document.getElementById(a).getAttribute('src');
    setmodalimg(b);
    
 
  }
  const a=(e)=>{
    const aa=document.getElementById(e.target.id).src;

    const path="../assets/image for seedesign/01.jpg";
    const newpath=aa.split("/");
    const val=newpath.pop();
    console.log("path",val)
  }
  const handledata=()=>{
    if(index===0){
      setIndex(9);
      console.log(index,"index")
      // alert('not found',index.value)

    }else{  
      const b=index-1;
      console.log(b,"index")
      setIndex(b)
     const a=metal[b];
     setmodalimg(a.imgsrc)

     console.log(a,"dataimgjhbhjbhj")
     
    }
 
  }
  const handledata1=()=>{
    console.log(index+1,"index")
    if(index===9){
      setIndex(0);
      // alert('not found',index.value)
    }else{
      const b=index+1;
      setIndex(b)
     const a=metal[b];
     console.log(a.imgsrc,"dataimgjhbhjbhj")
     setmodalimg(a.imgsrc)
    }
   
   
    
  }
  const handlefilter=(e)=>{
 const a=e.target.id;
 const b=document.getElementById(a).parentNode.previousSibling.getAttribute('src');
        nav("/dashbord",{state:{id:1,name:b,txt:"your uploaded image"}})
        // console.log(b,"moda")
  }
  const handledownload=(e)=>{
    const a=e.target.id;
    const b=document.getElementById(a).parentNode.previousSibling.getAttribute('src');
    // console.log(b,"moda")
    setmodalimg(b);
  }
  const dataget = () => {
    const value = 'metal';

    fetch(
      "https://pixabay.com/api/?key=12763398-42249d3dd1db2f56d3171f8c0&q=" +
        { value } +
        "&image_type=photo"

    )
      .then((res) => res.json())
      .then((data) =>{
      setData(data)
      
      } 
      
      );
  };

  useEffect(() => {
    dataget();
  }, []);

  const handledisc = (e) => {
    // console.log(e.target.id, "idvaluejkhj");
    const a = document.getElementById(e.target.id);
    
    const b = a.getAttribute("src");
    // console.log(b, "imgsrc");
    setImgsrc(b);
    setAltvalue(a.getAttribute("alt"));
    setDispaly("flex");

    document.getElementById("view").scrollIntoView();
  };

  return (
    <>

 {/* free trail modal */}

 <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="exampleModalToggleLabel">Free trail for 7 Days</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        
        <label style={{fontSize:"20px",color:"black"}}>Enter Your Email Id</label>
       <input type="email" placeholder='Enter Your email' style={{width:"80%",height:"40px",color:"black"}} required={true}/>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" type='submit' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{textAlign:"center",color:"black"}}>
        Email submit sucessfully !
      </div>
      <div class="modal-footer">
        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button> */}
      </div>
    </div>
  </div>
</div>






       
       {/* free trail modal end  */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{cursor:"pointer",width:"100vw",zIndex:"5555555"}}>
  <div class="modal-dialog" style={{maxWidth:"1200px"}}>
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div style={{display:"flex",justifyContent:"end",marginRight:"10px"}}>
      <i class="bi bi-arrow-left " style={{marginRight:"10px"}} onClick={handledata}></i>
      <i class="bi bi-arrow-right" onClick={handledata1}></i>
      </div>
      <div class="modal-body w-100 d-flex">
     <img src={modalimg} alt=""  className='w-50' id="imgdata"/>
     <div className='w-50 p-2'>
      <h4>Little girl using VR glasses at home for learning Solar system planets</h4>
      <span>By lithiumphoto</span>
      <div id="icon"  style={{width:"100%",opacity:"1",display:"flex",justifyContent:"start",flexDirection:"column",alignItems:"end"}}>
                            <div style={{display:"flex",zIndex:"999",justifyContent:"space-around",alignItems:"center",background:"white",height:"30px",margin:"10px",borderRadius:"6px"}}>
                           <span style={{width:"150px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-heart"></i>
                            Save to Library
                            </span>
                            <span style={{width:"180px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-download"></i>
                            Download Preview
                            </span>
                            <span style={{width:"150px",display:"flex",justifyContent:"space-around",border:"1px solid",margin:"5px",alignItems:"center",height:"30px",borderRadius:"6px"}}>
                            <i class="bi bi-upload"></i>
                          Open in App
                            </span>
                  </div>
                  <div style={{marginRight:"auto"}}>
                  <div style={{display:"flex",justifyContent:"start"}}>
                    <input type="radio" className='m-2'/>
                    <span className='m-2'>
                    Standard license (Free with trial) 
                    </span>
                  </div>
                  <div style={{display:"flex",justifyContent:"start"}}>
                    <input type="radio" className='m-2'/>
                    <span className='m-2'>
                    Extended license (₹6,386.16) 


                    </span>
                  </div>
                </div>
                  <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" style={{background:"royalblue",height:"40px",color:"#fff",display:"flex",justifyContent:"space-around",alignItems:"center",width:"40%",borderRadius:"12px",margin:"10px",marginRight:"auto"}}>
                  <i class="bi bi-cart"></i>
                    free width trial</span>
                </div>
                
     </div>
      </div>
      
<table style={{width:"60%",margin:"10px"}}>
  <tr>
    <th>DIMENSIONS</th>
    <th>FILE TYPE</th>
    <th>CATEGORY</th>
    <th>
LICENSE TYPE</th>
  </tr>
  <tr>
    <td>6000 x 4000px</td>
    <td>JPEG</td>
    <td>People</td>
    <td>Standard or Extended</td>
  </tr>
  </table>
      <div class="modal-footer">
       
      </div>
    </div>
  </div>
</div>
      <div className="main-section-dashbord" style={{position:"relative"}}>
        
        <div class="form-outline mb-4 mt-4 d-flex m-2" style={{justifyContent:"center",alignItems:"center",height:"50px"}}>
<select name="cars"  style={{width:"100px",height:"100%",outline:"none"}}>
    <option value="volvo" onClick={(e) => SearchImg(e)}>All</option>
    <option value="saab" >Stone</option>
    <option value="opel" >Metal</option>
    <option value="audi" >Wood</option>
  </select>
  <input type="search" class="form-control" id="datatable-search-input" placeholder="search" style={{height:"100%"}} />
  <label class="form-label mb-0" for="datatable-sea" style={{width:"100px",display:"flex",justifyContent:"center",alignItems:"center",background:"royalblue",height:"100%"}}>
  <select name="cars"  style={{width:"200px",height:"100%",outline:"none"}}>
    <option value="volvo">Library</option>
    <option value="saab">View All</option>
    <option value="opel">My Libraries</option>
  </select>
  </label>
</div>
        <div className="main-dash" style={{position:"relative"}}>
          <div className="content">
      






   


            <div style={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",borderRight:"1px solid"}}>
          <div style={{width:"20px",marginBottom:"50px"}}>
            <img src="https://i.stack.imgur.com/kYftr.png" alt="" onClick={()=>seticon(false)}/>
          </div>
          <div style={{width:"20px",marginBottom:"50px"}}>
            <img src={img} alt="" onClick={()=>seticon(true)}/>
          </div>
          </div>
            <div
              className="mini-dash"
              style={{ display: `${panel ? "none" : "block"}` }}
            >

   {icon ?      
<div>
              <h5
                style={{
                  textAlign: "center",
                  width: "100%",
                  textTransform: "capitalize",
                  color: "black",
                  borderBottom:"1px solid",
                }}
              >
                {location.state.txt}
              </h5>
   
    
              <div className="img-upload" style={{ marginLeft: "32px" }}>
                <img
                  src={location.state.name}
                  className="img-thumbnail1"
                  alt="..."
                />
                 <ul style={{listStyle:"none",marginTop:"50px"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All attributes</li>
                    <li><input type="radio" style={{marginRight:"5px"}} />Content</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Color</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Composition</li>
                </ul>
              </div>
</div>:

              <div style={{width:"100%",height:"600px",overflowY:"auto"}}>
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderBottom:"2px solid gray",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-filter"></i>
                Filter
          </div>
          <div style={{width:"40px"}}>
            <span>Clear</span>
          </div>
                </div>
               
               
               
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
            <img src="https://static.thenounproject.com/png/3844729-200.png" alt="" />
            <span>Subcategory</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{sub ? <i class="bi bi-chevron-down" onClick={()=>setsub(!sub)}></i>:<i class="bi bi-chevron-left" onClick={()=>setsub(!sub)}></i>}</span>
          </div>
                </div>
                {sub &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                    <li><input type="radio" style={{marginRight:"5px"}} />Photos</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Illustrations</li>
                    <li><input type="radio" />vectors</li>
                  </ul>
                </div>
}
                </div>
                
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-cart"></i>
            <span>price</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{price ? <i class="bi bi-chevron-down" onClick={()=>setprice(!price)}></i>:<i class="bi bi-chevron-left" onClick={()=>setprice(!price)}></i>}</span>
          </div>
                </div>
                {price &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                    <li><input type="radio" />Standard Content</li>
                    <li> <input type="radio" style={{marginRight:"5px"}} />Premium</li>
                   
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-globe"></i>
            <span>Undiscovered</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{disc ? <i class="bi bi-chevron-down" onClick={()=>setdisc(!disc)}></i>:<i class="bi bi-chevron-left" onClick={()=>setdisc(!disc)}></i>}</span>
          </div>
                </div>
                {disc &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Undiscovered Content</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-square"></i>
            <span>Orientation</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{orient ? <i class="bi bi-chevron-down" onClick={()=>setorient(!orient)}></i>:<i class="bi bi-chevron-left" onClick={()=>setorient(!orient)}></i>}</span>
          </div>
                </div>
                {orient &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Horizontal</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Vertical</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Square</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Panoramic</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-fonts"></i>
            <span>CopySpace</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{copy ? <i class="bi bi-chevron-down" onClick={()=>setcopy(!copy)}></i>:<i class="bi bi-chevron-left" onClick={()=>setcopy(!copy)}></i>}</span>
          </div>
                </div>
                {copy &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Images with Copy Space</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-people-fill"></i>
            <span>People</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{people ? <i class="bi bi-chevron-down" onClick={()=>setpeople(!people)}></i>:<i class="bi bi-chevron-left" onClick={()=>setpeople(!people)}></i>}</span>
          </div>
                </div>
                {people &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Include people</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Exclude people</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
            <span>UsageRights</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{right ? <i class="bi bi-chevron-down" onClick={()=>setright(!right)}></i>:<i class="bi bi-chevron-left" onClick={()=>setright(!right)}></i>}</span>
          </div>
                </div>
                {right &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      All</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Commercial Use</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Editorial Use</li>
                  </ul>
                </div>
}
                </div>
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-aspect-ratio"></i>
            <span> Size</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{size ? <i class="bi bi-chevron-down" onClick={()=>setsize(!size)}></i>:<i class="bi bi-chevron-left" onClick={()=>setsize(!size)}></i>}</span>
          </div>
                </div>
                {size &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Pixels</li>
                      <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Megapixels</li>
                      <li>

                        <span>Minimum Width</span>
                          <input type="number" placeholder="Type here" value="kknkj" style={{width:"80px",outline:"none",border:"none",fontSize:"20px",color:"black",borderBottom:"1px solid"}}/>
</li>
<li>

<span>Minimum Heigh</span>
  <input type="number" placeholder="Type here" value="kknkj" style={{width:"80px",outline:"none",border:"none",fontSize:"20px",color:"black",borderBottom:"1px solid"}}/>
</li>
                  </ul>
                </div>
}
                </div>

                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-safe"></i>
            <span> Isolated Assets</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{iso ? <i class="bi bi-chevron-down" onClick={()=>setiso(!iso)}></i>:<i class="bi bi-chevron-left" onClick={()=>setiso(!iso)}></i>}</span>
          </div>
                </div>
                {iso &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio" style={{marginRight:"5px"}} />
                      Isolated Only</li>
                     
                  </ul>
                </div>
}
                </div>


                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-eye-fill"></i>
            <span> Color</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{color ? <i class="bi bi-chevron-down" onClick={()=>setcolor(!color)}></i>:<i class="bi bi-chevron-left" onClick={()=>setcolor(!color)}></i>}</span>
          </div>
                </div>
                {color &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <form style={{margin:"0px"}}>
                      <input type="color" value="" /><br/>
<button type="reset" style={{border:"none"}}>clear</button>                                            
                      </form>
                      </li>
                     
                  </ul>
                </div>
}
                </div>
                <div style={{borderBottom:"2px solid gray"}}>
                <div style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center",marginTop:"20px"}}>
                <div style={{width:"30px",display:"flex"}}>
                <i class="bi bi-gear"></i>
            <span> SafeSearch</span>
          </div>
          <div style={{width:"40px"}}>
            <span style={{cursor:"pointer"}}>{safe ? <i class="bi bi-chevron-down" onClick={()=>setsafe(!safe)}></i>:<i class="bi bi-chevron-left" onClick={()=>setsafe(!safe)}></i>}</span>
          </div>
                </div>
                {safe &&
                <div style={{display:"flex",justifyContent:"flex-start"}}>
                  <ul style={{listStyle:"none"}}>
                    <li>
                      <input type="radio"  />Enabled
                      </li>
                     
                  </ul>
                </div>
}
                </div>

















              </div>
}
            </div>
            <div className="max-dash">
              <div className="card-group">
                <div
                  style={{
                    width: "100%",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "royalblue",
                    color: "#fff",
                  }}
                >
                  <h3
                    style={{ textAlign: "center", textTransform: "capitalize" }}
                  >
                    Search result
                  </h3>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "75px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      marginLeft: "10px",
                      // border: "1px solid black",
                      height: "40px",
                      borderRadius: "20px",
                      width: "100px",
                      textAlign: "center",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textTransform: "capitalize",
                    }}
                    onClick={() => setPanel(!panel)}
                  >
                    {panel ? "show Panel" : "hide panel"}
                  </p>
                  <div style={{ marginRight: "30px" }}>
                    <label  style={{ marginRight: "10px" }}>
                      Sort by:
                    </label>
                    <select
                      name="cars"
                      id="cars"
                      style={{ borderRadius: "13px" }}
                    >
                      <option value="volvo">25%</option>
                      <option value="saab">50%</option>
                      <option value="opel">75%</option>
                      <option value="audi">100%</option>
                    </select>
                  </div>
                </div>
                <div className="row row-cols-4 row-cols-md-4 g-4 mt-2 ">
                <div class="row mt-4 w-100">
          {metal.map((data,index)=>(
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <div id='imagicon' style={{position:"relative",cursor:"pointer"}}>
    {/* <button type="button" class="btn btn-primary"> */}
    <img id={index}
      src={data.imgsrc}
      onLoad={(e)=>a(e)}
      class="w-100  shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
      onClick={(e)=>handlemodal(e)}
      data-bs-toggle="modal" data-bs-target="#exampleModal"
      style={{height:"250px"}}
    />
    {/* </button> */}
    <div id="icons" style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",top:"10px",right:"10px",width:"100px",background:"#fff",height:"30px"}}>
    <i class="fas fa-heart"></i>
    <i class="fas fa-download" id={index+"down"} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(data)=>handledownload(data)}></i>
    <i class="fas fa-camera" id={index} onClick={(data)=>handlefilter(data)}></i>
    </div>
    <span id="icons" data-bs-toggle="modal" href="#exampleModalToggle"  style={{display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"3px",position:"absolute",bottom:"40px",right:"10px",width:"150px",background:"royalblue",color:"#fff",height:"30px"}}>
    <i class="bi bi-cart"></i>
      free with trial</span>
    </div>


  </div>
          ))}
    
          </div>
               <img src={`../assets/image for seedesign/01.jpg`} alt="" srcset="" />
                <div id="imageView"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Dashboard;
