import React, { useState } from "react";
import "./profile.css";
import  Axios  from "axios";
const Profile = () => {
    const url = "http://127.0.0.1:8000/login/";

  const [data, setData] = useState({
    name:"",
    primary_email: "",
    mobile:"",
    country:"",
    secondary_email:"",
    First_language:"",
    Second_language:"",


    
  });
 
  // const email=document.getElementById('typeEmailX')|| "";
  // const pass=document.getElementById('typePasswordX') || "";
  const submitdata=(e)=>{
    // const {email,pass}=document.forms[0]
    // console.log(email,"data")
    e.preventDefault();
    Axios.post(url, {
        name:data.name,
        primary_email:data.primary_email,
        Mobile:data.mobile,
        country:data.country,
        secondary_email:data.secondary_email,
        First_language:data.First_language,
        Second_language:data.Second_language,
    })
      .then((res) => {
        console.log(res.data);
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
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData,"data available");
  }
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
              <span className="font-weight-bold">username</span>
              <span className="text-white">edogaru@mail.com.my</span>
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
                    id="name"
                    value={data.name}
                    onChange={(e)=>handle(e)}
                  />
                </div>
                {/* <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname"/></div> */}
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Primary Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    id="primary_email"
                    value={data.primary}
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
                    value={data.mobile}
                    onChange={(e) => handle(e)}
                  />
                </div>
                {/* <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" value=""/></div> */}
                {/* <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                <div className="col-md-12">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter Country"
                    
                    id="country"
                    value={data.country}
                    onChange={(e) => handle(e)}
                  />
                </div>
                {/* <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div> */}
                <div className="col-md-12">
                  <label className="labels">Secondary Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    id="secondary_email"
                    value={data.secondary_email}
                    onChange={(e) => handle(e)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">First language</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First language"
                    
                    id="First_language"
                    value={data.First_language}
                    onChange={(e) => handle(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Second language</label>
                  <input
                    type="text"
                    className="form-control"
                    // value=""
                    placeholder="Second language"
                    id="Second_language"
                    value={data.Second_language}
                    onChange={(e) => handle(e)}
                  />
                </div>
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
          {/* <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience " style={{color:"#fff"}}><span>
                     TAX INFORMATION</span><span className="border px-3 p-1 add-experience" style={{fontSize:"10px"}}><i className="fa fa-plus"></i>&nbsp;TAX INFORMATION</span></div><br/>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value=""/></div> <br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value=""/></div>
            </div>
        </div> */}
        </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
