import React from 'react';


const IdCard = props => {

	const formattedBirth = props.birth.toString().substring(0,15)

	const divStyle = {
		display:'flex'
	}

  return (
    <div style={divStyle}>
    	<img src = {props.picture} />
    	<ul>
    	<li><b>First Name: </b>{props.firstName}</li>
    	<li><b>Last Name: </b>{props.lastName}</li>
    	<li><b>Gender: </b>{props.gender}</li>
    	<li><b>Height: </b>{props.height}m</li>
    	<li><b>Birth: </b>{formattedBirth}</li>
    	</ul>
    </div>
  );
};

export default IdCard