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
  
<h5 style={{textAlign:"center",color:"black",marginTop:"50px"}}>CURATED ASSET COLLECTIONS</h5>
<p style={{textAlign:"center",color:"black",margin:"auto",fontSize:"30px",fontFamily:"monospace"}}>Explore diverse collections of our most<br/> incredible high-resolution, royalty-free, stock<br/> assets</p>
  
  <main class="gallery gallery__content--flow " style={{padding:"10px",marginTop:"0px"}}>
<NavLink to='/stone'>
        <figure>
            <img class="imgg" src="https://previews.123rf.com/images/jonnysek/jonnysek1209/jonnysek120900021/15300859-color-stones-as-very-nice-natural-background.jpg"
                alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
                title="Photo by Giacomo Lucarini for Unsplash" />
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Stone Gallery</h1>
                <h2 class="title title--secondary">6k+ images</h2>
            </figcaption>
        </figure>
        </NavLink>
<NavLink to='/wood'>
        <figure>
            <img class="imgg" src="https://i.pinimg.com/originals/d4/63/f2/d463f2743917dbef8f995e7a8873cc8d.jpg"
                alt="A tabby kitten with green eyes. " title="Photo by Sergey Semin for Unsplash" />
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Wooden Gallery</h1>
                <h2 class="title title--secondary">8k+ images</h2>
            </figcaption>
        </figure>
        </NavLink>
<NavLink to='/metal'>
        <figure>
            <img class="imgg" src="https://images.unsplash.com/photo-1567093322503-341d262ad8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXJvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="A light brown puppy standing on a white and tan woven pet bed. "
                title="Photo by Sergey Semin for Unsplash"/>
            <figcaption class="header__caption" role="presentation">
                <h1 class="title title--primary">Metal Gallery</h1>
                <h2 class="title title--secondary">13k+ images</h2>
            </figcaption>
        </figure>
        </NavLink>
     
    </main>
    </div>
  )
}

export default Card