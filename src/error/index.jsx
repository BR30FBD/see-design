import React from 'react'
import {NavLink} from 'react-router-dom'
const Error = () => {
  return (
 <>
   <div class="d-flex align-items-center justify-content-center vh-100" style={{backgroundImage:`url("https://c4.wallpaperflare.com/wallpaper/765/958/389/colorful-abstract-design-background-wallpaper-preview.jpg")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div class="text-center">
                <h1 class="display-1 fw-bold" style={{color:"black"}}>404</h1>
                <p class="fs-3" style={{color:"black"}}> <span class="text-danger">Opps!</span> Page not found.</p>
                <p class="lead" style={{color:"black"}}>
                    The page you’re looking for doesn’t exist.
                  </p>
                <NavLink to="/main" class="btn btn-primary">Go Home</NavLink>
            </div>
        </div>
 </>
  )
}

export default Error