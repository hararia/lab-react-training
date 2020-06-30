import React from 'react';


const Random = props => {
    let val = Math.random() * (props.max - props.min) + props.min;
  return (
    <div>
    <h3>Random value between {props.min} and {props.max} => {Math.floor(val)}</h3>
    </div>
  );
};

export default Random

