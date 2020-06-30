import React from 'react';
import Rating from './Rating'


const DriverCard = props => {

	const divStyle = {

		width: 75+'%',
		height:150+'px',
		backgroundColor: 'blue',
		margin: 15+'px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}

	const imgStyle = {
		width: 100+'px',
		height: 100+'px',
		borderRadius: 50+'%'
	}

	const nameStyle = {
		color:'white',
		fontSize: 25+'px'
	}

  return (
    <div style={divStyle}>
    	<img style = {imgStyle} src={props.img}/>
    	<div style = {nameStyle}>
    		<span style = {nameStyle}>{props.name}</span>
    		<Rating style = {nameStyle}>{props.rating}</Rating>
    	</div>
    </div>
  );
};

export default DriverCard

