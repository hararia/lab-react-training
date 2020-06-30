import React from 'react';


const CreditCard = props => {

	const ccNumberDisplay = props.number[12]+props.number[13]+props.number[14]+props.number[15]

	const ccExpirationDisplay = '0'+ props.expirationMonth + '/' + props.expirationYear.toString()[2] + props.expirationYear.toString()[3]

	const divStyle = {
		width: 400,
		height: 250,
		backgroundColor:props.bgColor,
		color: props.color,
		margin:5+'px',
		display:'flex',
		flexDirection: 'row-reverse',
	}

	const bankStyle = {
	}
    
    const ccNumberStyle ={
    }


  return (
    <div style={divStyle}>
    <span style={bankStyle}>{props.type}</span>
    <span style={ccNumberStyle}>**** **** **** {ccNumberDisplay}</span>
    <span>Expires: {ccExpirationDisplay}   {props.bank}</span>
    <span>{props.owner}</span>
    </div>
  );
};

export default CreditCard

