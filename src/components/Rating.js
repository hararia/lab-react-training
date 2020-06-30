import React from 'react';


const Rating = props => {

	const emptyStar = '☆'
	const fullStar = '★'

	const fillRate = (rating) => {
		let rate = ''
		let j = Math.round(props.children)
		let i = 0
		while(i<5){
			if(j>0){
				rate+=fullStar
				i++
				j--
			}
			if(j===0){
				if(i<5){
				rate+=emptyStar
				i++
				}
			}
		}
	return rate
	}

	const starStyle = {
		fontSize: 45+'px'
	}

  return (
    <div style={starStyle}>
    	{fillRate(props.children)}
    </div>
  );
};

export default Rating

