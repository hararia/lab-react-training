import React from 'react';


const BoxColor = props => {
	const divStyle = {
		width: 500,
		height: 50,
		backgroundColor:'rgb(' + props.r + ',' + props.g + ',' + props.b+ ')',
		margin:5+'px'
	}
    
  return (
    <div style={divStyle}>
   		<h6>rgb({props.r},{props.g},{props.b}</h6>
    </div>
  );
};

export default BoxColor

