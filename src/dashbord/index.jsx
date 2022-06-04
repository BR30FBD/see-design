import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Searchbar from '../searchbar';
import heart from "./heart.png";
import download from "./download.jpg";
import camera from "./camera.png"
import searchicon from "./searchicon.png";
import upload from "./upload.jpg"
import "./dash.css";
const Dashboard = () => {
  // const [imgresult,setImgresult]=useState("")
  const [data, setData] = useState("");
  const [panel, setPanel] = useState(false);
  const [value, setValue] = useState("rose");
  const [similar,setSimilar]=useState("flex");
  // const [img,setImg]=useState("none")
  const [altvalue,setAltvalue]=useState("")
  const [display,setDispaly]=useState("none")
  const [imgsrc ,setImgsrc]=useState("");
  const [modal,setModal]=useState("none")
  console.log(data.hits, "data");
  const location = useLocation();
  console.log(location, "location");

  function SearchImg(e) {
    const a = e.target.id;
    const val = document.getElementById(a).value;
    console.log(a, "dataaagcvghchgcv");
    e.preventDefault();
    setValue(val);

    dataget();
  }
  const dataget = () => {
    const value=document.getElementById("searchvalue").value;

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

  const handledisc=(e)=>{
    console.log(e.target.id,"idvaluejkhj");
    const a=document.getElementById(e.target.id);
    const b=a.getAttribute("src");
    console.log(b,"imgsrc");
    setImgsrc(b);
    setAltvalue(a.getAttribute("alt"))
     setDispaly("block")

    document.getElementById("view").scrollIntoView();
  }
  return (
    < >
      <div className="main-section-dashbord" >
        <div className="main-nav" style={{background:"#fff"}}>
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
          <div className="serach_continer" style={{borderLeft:"none"}}>
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
                height:"40px"
              }}
            >
              <p style={{margin:"0px",cursor:"pointer"}} onClick={()=>setSimilar("none")}>x</p><span className="find_similar1">Find Similar:</span>
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
              style={{paddingLeft:"10px"}}
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
          <label className="drop" style={{border:"none"}}>
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
        <div className="main-dash">
          <div className="content">
            <div
              className="mini-dash"
              style={{ display: `${panel ? "none" : "block"}` }}
            >
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
                  <h3 style={{ textAlign: "center",textTransform:"capitalize" }}>Search result</h3>
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
                      textTransform:"capitalize"
                    }}
                    onClick={() => setPanel(!panel)}
                  >
                    {panel ? "show Panel" : "hide panel"}
                  </p>
                  <div style={{ marginRight: "30px" }}>
                    <label for="cars" style={{marginRight:"10px"}}>Sort by:</label>
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
                    data.hits.slice(0, 20).map((data,index) => (
                      <div className="col">
                        <div
                          className="card group-img"
                          style={{ width: "100%", height: "250px" }}
                        >
                          
                          <img
                            src={data.previewURL}
                            className="card-img-top group-img"
                            style={{ width: "100%", height: "100%",position:"relative" }}
                            alt={data.tags}
                            id={index}
                            onClick={(e)=>handledisc(e)}
                          />
                {/* <div id="icon" style={{width:"100%",height:"100%",background:"white",position:"absolute",display:"flex"}}>
                  <img src={heart} alt="" style={{width:"20px",height:"20px"}}/>
                  <img src={download} alt="" style={{width:"20px",height:"20px"}} />
                  <img src={camera} alt="" style={{width:"20px",height:"20px"}} />
                </div> */}

                        </div>
                      
                      </div>
                      
                    ))}
                </div>
                <div class="card mb-3" style={{display:`${display}`}} id="view">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={imgsrc} class="img-fluid rounded-start" id="imgdisc" alt="..." style={{height:"400px"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{altvalue}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        {/* <label htmlFor="imgdisc">Download</label> */}
        <div style={{display:"flex",justifyContent:'center',justifyContent:"space-around"}}>
        <button style={{width:"150px",height:"40px",border:"none"}}>
          <img src={heart} alt="" style={{width:"20px",height:"20px",marginRight:"10px"}} />
          save to Library</button><button style={{width:"180px",height:"40px",border:"none"}}>
          <img src={download} alt="" style={{width:"20px",height:"20px",marginRight:"10px"}} />
            Download Preview</button><button style={{width:"150px",height:"40px",border:"none"}}>
              <img src={upload} alt="" style={{width:"20px",height:"20px",marginRight:"10px"}} />
              Open in App</button>

        </div>
        <button style={{background:"royalblue",color:"white",border:"none",width:"200px",height:"40px",borderRadius:"10px",margin:"35px"}}>Download free with trail</button>
      </div>
    </div>
  </div>
</div>
                <div id="imageView"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{width:"100vw",height:"100vh",background:"white",position:"fixed",zIndex:"99999",marginTop:"-80px",overflow:"hidden",overflowY:"hidden",display:`${modal}`}}></div>
    </>
  );
};

export default Dashboard;
