import React, { useEffect, useState } from "react";
import "./profile.css";
import { NavLink, useNavigate } from 'react-router-dom';
// import "./header.css";
import  Axios  from "axios";
const Profile = () => {
  const nav=useNavigate();
    const url = "http://127.0.0.1:8000/updateprofile/";
const [value,setvalue]=useState({
  username_id:"",
  email:"",
  mobile:"",
  zipcode:"",
  gst:"",
  first_name:"",
  last_name:""
})
  // const [data, setData] = useState({
  //   name:"",
  //   primary_email: "",
  //   mobile:"",
  //   country:"",
  //   secondary_email:"",
  //   First_language:"",
  //   Second_language:"",

  const token=localStorage.getItem("token");
    
  // });
 
  // const email=document.getElementById('typeEmailX')|| "";
  // const pass=document.getElementById('typePasswordX') || "";
  const submitdata=(e)=>{
    
    // e.preventDefault();
    fetch(url,{
      method:"POST",
      headers:{
       'Content-Type': 'application/json',
       "Authorization":`Token ${token}`
      },
      body:JSON.stringify({
      //  username_id:value.username_id,
       email:value.email,
       mobile:value.mobile,
       zipcode:value.zipcode,
       gst:value.gst,
       first_name:value.first_name,
       last_name:value.last_name
       })
      })
      .then((res) => {
        console.log(res,"sucess");
        // setmsg(res.data.message)
        // setModal("show-modal1")
        // if(res.data.message==="Login Successful"){
        //   setTimeout(
        //     ()=>{
        //       nav("/")
        //     },5000
        //   )
        // }

       
        
      })
      .catch((error) => {
        console.error(error);
        // setmsg(error.message)
      });
  }
  function handle(e) {
    const newData = { ...value };
    newData[e.target.id] = e.target.value;
    setvalue(newData);
    console.log(newData,"data available");
  }
 console.log("token",token)
  // const newtoken="51272d6ad7880abd893e910202299263a0edc678";
  const dataget=()=>{
    Axios.get("http://127.0.0.1:8000/getprofile/",{
      // method:"GET",
      headers:{
        'Content-Type': 'application/json',
        "Authorization":`Token ${token}`
      }, 
    }).then(data=>{
      console.log(data.data.data,"getdata")
      setvalue(data.data.data);
    }).catch(err=>{
      console.log(err)
    })
  }
  // console.log(value,"value");
  useEffect(()=>{
    dataget();
  },[]);
  return (
    <>
      <div
        className="container rounded bg-white mt-5 mb-5"
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/378757.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        
          <form onSubmit={(e)=>submitdata(e)}>

<div className="row">
          <div className="col-md-3 border-right">
            <div
              className="d-flex flex-column align-items-center text-center p-3 py-5"
              style={{ color: "#fff" }}
            >
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{value.username_id}</span>
              <span className="text-white">{value.email}</span>
              <span> </span>
            </div>
          </div>
          
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right" style={{ color: "#fff" }}>
                  Profile Settings
                </h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <label className="labels">Account Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    id="username_id"
                    disabled
                    value={value.username_id}
                    onChange={(e)=>handle(e)}
                  />
                </div>
                {/* <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname"/></div> */}
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Primary Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email id"
                    id="email"
                    value={value.email}
                    onChange={(e) => handle(e)}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    id="mobile"
                    value={value.mobile}
                    onChange={(e) => handle(e)}
                  />
                </div>
                {/* <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value=""/></div> */}
                {/* <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                <div className="col-md-12">
                  <label className="labels">ZipCode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zipcode"
                    
                    id="zipcode"
                    value={value.zipcode}
                    onChange={(e) => handle(e)}
                  />
                </div>
                {/* <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                <div className="col-md-12">
                  <label className="labels">GST</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="gst"
                    id="gst"
                    value={value.gst}
                    onChange={(e) => handle(e)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels"> Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    
                    id="first_name"
                    value={value.first_name}
                    onChange={(e) => handle(e)}
                  />
                </div>
                {/* <div className="col-md-12">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    
                    id="first_name"
                    value={value.last_name}
                    onChange={(e) => handle(e)}
                  />
                </div> */}
              </div>
            
              <div className="mt-5 text-center">
                <input
                  className="btn btn-primary profile-button"
                  type="submit"
                  value="save profile"
                />
                 
              </div>
            </div>
          </div>
         
        </div>

        
        </form>
      </div>
      
    </>
  );
};

export default Profile;
