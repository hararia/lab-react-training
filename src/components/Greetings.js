import React from 'react';


const Greetings = props => {
    let greet=''

    if(props.lang==='fr'){
        greet = 'Bonjour'
    }

    if(props.lang==='de'){
        greet='Hallo'
    }

  return (
    <div>
    <h3>{greet} {props.children}</h3>
    </div>
  );
};

export default Greetings

