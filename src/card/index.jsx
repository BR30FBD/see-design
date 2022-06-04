import React from 'react'
import "./card.css"
import stone from "./stone1.jpg"
import wood from "./wood1.jpg"
import metal from "./metal1.jpg"
import Searchbar from '../searchbar'
import { NavLink } from 'react-router-dom'
const Card = () => {
  return (
    <div>

{/* <!-- Topic Cards --> */}
    <div id="cards_landscape_wrap-2">
        
        <div class="container">
        <h1 style={{color:"black"}}>Curated asset collections</h1>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a href="">
                        <div class="card-flyer">
                        <NavLink to="/search">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src={stone} alt="" />
                                </div>
                                <div class="text-container">
                                <h6>STONE</h6>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a href="">
                        <div class="card-flyer">
                        <NavLink to="/search">
                            <div class="text-box">
                              
                                <div class="image-box">
                                    <img src={wood} alt="" />
                                </div>
                                <div class="text-container">                                    
                                    <h6>WOOD</h6>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <a href="">
                        <div class="card-flyer">
                        <NavLink to="/search">
                            <div class="text-box">
                                <div class="image-box">
                                    <img src={metal} alt="" />
                                </div>

                                <div class="text-container">
                                  <h6>METAL</h6>
                                </div>
                            </div>
                            </NavLink>
                        </div>
                    </a>
                </div>
               
            </div>
        </div>
    </div>
    <div class="modal" id="modal">
  <div class="modal-content">
    <Searchbar/>
    
    {/* <p>sample content</p>  */}
    
    <a href="#" class="close-modal">-</a>
  </div>
</div>
    </div>
  )
}

export default Card