import React from 'react'

class Character extends React.Component {
	render() {
		return( 
            <div className="card m-4 col-4" style={{width:"280px", height : "350px"}}>
            <img className="rounded img-fluid" style={{width:"100%", height:"200px",objectFit: "cover"}} src={this.props.image}/>
            <div className="container text-center mt-4">
              <h4><b>{this.props.name}</b></h4>
              <p>{this.props.title}</p>
            </div>
          </div>
		)
	}
}

export default Character