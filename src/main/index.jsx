import React from 'react'
import Card from '../card'
import Searchbar from '../searchbar'
import "./main.css"
const Main = () => {
  return (
    <>
  
  <div className="background">

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
    </>
  )
}

export default Main