import React from 'react'
import Card from '../card'
// import Modal from '../modal'
import Searchbar from '../searchbar'
import "./main.css"
const Main = () => {
  return (
    <>
  
  <div className="background" style={{backgroundImage:`url("https://slp-statics.astockcdn.net/static_assets/staging/22summer/homepage/hero/hero-1.jpg?width=1555&format=webp")`,backgroundPosition:"center",backgroundSize:"cover"}}>

<div className="container">
		<div className="row">
			<div className="col-lg-12">
			
				<div id="content">
					
					<h1 className='h1-text'>The Little Sweet World</h1>
					<h3>"All you need is love.</h3>
					<h3>But a little chocolate now and then doesn't hurt"</h3>
		<Searchbar/>




					<hr/>
					
			</div>
		</div>
	</div>
</div>
</div>
<Card/>
<div class="card text-center">

  <div class="card-body" style={{height:"300px"}}>
    <h2 class="card-title text-primary mt-0" style={{fontSize:"50px"}}>Satisfied customers are our best ads.</h2>
    <p class="card-text text-dark m-full" style={{fontSize:"20px",textAlign:"center"}}>
    To earn the respect (and eventually love) of your customers,<br/> you first have to respect those customers. That is why Golden <br/>Rule behavior is embraced by most of the winning companies."
    </p>
    <a href="#" class="btn btn-primary" style={{borderRadius:"12px"}}>Learn More</a>
  </div>
  <div class="card-footer text-muted" style={{height:"300px",backgroundImage:`url("https://media.istockphoto.com/photos/blue-ridge-mountains-scenic-panorama-vista-view-picture-id1149570178?b=1&k=20&m=1149570178&s=170667a&w=0&h=KVZCmu8NkDKlBi5hN-05yVZYRGIgXEE0fV0dn9C--Ic=")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

  </div>
</div>
{/* <Modal/> */}
    </>
  )
}

export default Main