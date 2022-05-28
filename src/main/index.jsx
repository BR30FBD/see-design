import React from 'react'
import Searchbar from '../searchbar'
import "./main.css"
const Main = () => {
  return (
    <>
  
  <div className="background">

<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<Searchbar/>
				<div id="content">
					
					<h1 className='h1-text'>The Little Sweet World</h1>
					<h3>"All you need is love.</h3>
					<h3>But a little chocolate now and then doesn't hurt"</h3>
					<hr/>
					<button className="btn btn-default btn-lg" style={{background:"white"}}><a href="/#" style={{color:"black", textDecoration:"none"
}}>Get started!</a></button>
			</div>
		</div>
	</div>
</div>
</div>
    </>
  )
}

export default Main