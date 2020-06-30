import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    likes:0,
    color: 'red'
  }

  addLike = () => {
    this.setState({likes:this.state.likes+1})
  }

  changeColor = () => {
    if(this.state.color==='red'){
      this.setState({color:'green'})
    }
    else{
      this.setState({color:'red'})
    }
  }

  render() {
    const buttonStyle = {
    width: 100+'px',
    height: 50+'px',
    backgroundColor: this.state.color
  }

    return (
      <div>
      <button style={buttonStyle} onClick={() => { this.addLike(); this.changeColor();}}>Likes {this.state.likes}</button>

      </div>
    );
  }
}

export default LikeButton;