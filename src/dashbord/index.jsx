import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Searchbar from '../searchbar';
import heart from "./heart.png";
import download from "./download.jpg";
import camera from "./camera.png";
import searchicon from "./searchicon.png";
import upload from "./upload.jpg";
import "./dash.css";
import Subcription from "../subcription";
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


  function SearchImg(e) {

    const a = e.target.id;
    const val = document.getElementById(a).value;
    console.log(a, "dataaagcvghchgcv");
    e.preventDefault();
    setValue(val);

    dataget();
  }
  const dataget = () => {
    const value = document.getElementById("searchvalue").value;

    fetch(
      "https://pixabay.com/api/?key=12763398-42249d3dd1db2f56d3171f8c0&q=" +
        { value } +
        "&image_type=photo"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    dataget();
  }, []);

  const handledisc = (e) => {
    console.log(e.target.id, "idvaluejkhj");
    const a = document.getElementById(e.target.id);
    
    const b = a.getAttribute("src");
    console.log(b, "imgsrc");
    setImgsrc(b);
    setAltvalue(a.getAttribute("alt"));
    setDispaly("flex");

    document.getElementById("view").scrollIntoView();
  };

  return (
    <>
      <div className="main-section-dashbord" style={{position:"relative"}}>
        <div className="main-nav" style={{ background: "#fff" }}>
          <label className="drop">
            <input type="checkbox" id="target-drop-example" />
            <span className="control">Cateogry</span>

            <ul className="drop-items">
              <li className="item-drop" id="data" onClick={(e) => SearchImg(e)}>
                Metal
              </li>
              <li className="item-drop" id="data" onClick={(e) => SearchImg(e)}>
                wood
              </li>
              <li className="item-drop" id="data" onClick={(e) => SearchImg(e)}>
                stone
              </li>
            </ul>

            <label
              htmlFor="target-drop-example"
              className="overlay-close"
            ></label>
          </label>
          <div className="serach_continer" style={{ borderLeft: "none" }}>
            <div
              id="selected_item"
              style={{
                border: "1px solid",
                borderRadius: "4px",
                width: "100px",
                display: `${similar}`,
                justifyContent: "space-around",
                fontSize: "14px",
                alignItems: "center",
                height: "40px",
              }}
            >
              <p
                style={{ margin: "0px", cursor: "pointer" }}
                onClick={() => setSimilar("none")}
              >
                x
              </p>
              <span className="find_similar1">Find Similar:</span>
            </div>
            <label htmlFor="searachicon">
              <img
                id="searachicon"
                src={searchicon}
                alt=""
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "3px",
                  marginBottom: "0px",
                }}
              />
            </label>
            <input
              type="search"
              className="search_section"
              name="ftyfu"
              placeholders="search...."
              id="searchvalue"
              style={{ paddingLeft: "10px" }}
            />
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <img
                src="https://www.citypng.com/public/uploads/preview/hd-photo-camera-black-icon-png-11640439713zxgydtuajy.png"
                alt=""
                style={{ width: "40px", height: "40px", marginLeft: "10px" }}
              />
            </label>
          </div>
          <input
            type="submit"
            value="search"
            style={{ height: "50px", width: "100px", margin: "10px" }}
          />
          <label className="drop" style={{ border: "none" }}>
            <input type="checkbox" id="target-drop-example" />
            <span className="control">My Libraries</span>

            <ul className="drop-items">
              <li className="item-drop" id="data" onClick={(e) => SearchImg(e)}>
                Metal
              </li>
              <li className="item-drop" id="data" onClick={(e) => SearchImg(e)}>
                wood
              </li>
              <li className="item-drop" id="data" onClick={(e) => SearchImg(e)}>
                stone
              </li>
            </ul>

            <label
              htmlFor="target-drop-example"
              className="overlay-close"
            ></label>
          </label>
        </div>
        <div className="main-dash" style={{position:"relative"}}>
          <div className="content">
          <div style={{width:"100vw",height:"100vh",background:"rgb(20 19 19 / 87%)",position:"fixed",zIndex:"999999999",top:"0px", display: `${display}`,justifyContent:"center",alignItems:"center" }}>
      <span style={{top:"50px",position:"fixed",right:"50px",fontSize:"40px",color:"#ffff",cursor:"pointer"}} onClick={()=>setDispaly("none")}>X</span>
      <div
                  class="card mb-3"
                 
                  id="view"
                  style={{width:"60vw"}}
                >
                  <div class="row g-0">
                    <div class="col-md-6">
                      <img
                        src={imgsrc}
                        class="img-fluid rounded-start"
                        id="imgdisc"
                        alt="..."
                        style={{ height: "100%" }}
                      />
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">
                        <h5 class="card-title">{altvalue}</h5>
                        <p class="card-text text-dark">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                        {/* <label htmlFor="imgdisc">Download</label> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            justifyContent: "space-around",
                            flexWrap:"wrap"
                          }}
                        >
                          <button
                            style={{
                              width: "150px",
                              height: "40px",
                              border: "none",
                              margin:"10px"
                            }}
                          >
                            <img
                              src={heart}
                              alt=""
                              style={{
                                width: "20px",
                                height: "20px",
                                marginRight: "10px",
                              }}
                            />
                            save to Library
                          </button>
                          <button
                            style={{
                              width: "180px",
                              height: "40px",
                              border: "none",
                              margin:"10px"
                            }}
                          >
                            <img
                              src={download}
                              alt=""
                              style={{
                                width: "20px",
                                height: "20px",
                                marginRight: "10px",
                              }}
                            />
                            Download Preview
                          </button>
                          <button
                            style={{
                              width: "150px",
                              height: "40px",
                              border: "none",
                              margin:"10px"
                            }}
                          >
                            <img
                              src={upload}
                              alt=""
                              style={{
                                width: "20px",
                                height: "20px",
                                marginRight: "10px",
                              }}
                            />
                            Open in App
                          </button>
                        </div>
                        <button
                          style={{
                            background: "royalblue",
                            color: "white",
                            border: "none",
                            width: "200px",
                            height: "40px",
                            borderRadius: "10px",
                            margin: "35px",
                          }}
                          onClick={()=>setsubs("flex")}
                        >
                          Download free with trail
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
      </div>






      {/* <div style={{width:"100vw",height:"100vh",background:"rgb(20 19 19 / 87%)",position:"fixed",zIndex:"999999999",top:"0px", display:"flex",justifyContent:"center",alignItems:"center" }}>
      <span style={{top:"50px",position:"fixed",right:"50px",fontSize:"40px",color:"#ffff",cursor:"pointer"}} onClick={()=>setDispaly("none")}>X</span>
     <div style={{width:"50vw"}}>
<Subcription/>
     </div>
      </div> */}






























            <div style={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",}}>
          <div style={{width:"40px",marginBottom:"50px"}}>
            <img src="https://i.stack.imgur.com/kYftr.png" alt="" onClick={()=>seticon(false)}/>
          </div>
          <div style={{width:"40px",marginBottom:"50px"}}>
            <img src="https://cdn-icons-png.flaticon.com/512/31/31682.png" alt="" onClick={()=>seticon(true)}/>
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
                  {data &&
                    data.hits.slice(0, 20).map((data, index) => (
                      <div className="col" >
                        <div
                          className="card group-img"
                          style={{ width: "100%", height: "250px" }}
                        >
                          <img
                            src={data.previewURL}
                            className="card-img-top group-img"
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "relative",
                              zIndex:"999"
                            }}
                            alt={data.tags}
                            id={index}
                            onClick={(e) => handledisc(e)}
                          />
                          <div id="icon"  style={{width:"100%",height:"100%",opacity:"1",backgroundImage:`url(${data.previewURL})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"absolute",display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"end"}}>
                            <div style={{width:"100px",display:"flex",zIndex:"999",justifyContent:"space-around",alignItems:"center",background:"white",height:"30px",margin:"10px",borderRadius:"6px"}}>
                  <img src={heart} alt="" style={{width:"20px",height:"20px",zIndex:"9999",position:"absolute"}}/>
                  <img src={download} alt="" style={{width:"20px",height:"20px"}} />
                  <img src={camera} alt="" style={{width:"20px",height:"20px"}} />
                  </div>
                  
                  <span style={{background:"royalblue",height:"40px",zIndex:"999",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",width:"60%",borderRadius:"12px",margin:"10px"}}>free width trial</span>
                </div>
                        </div>
                      </div>
                    ))}
                </div>
               
                <div id="imageView"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
