import React, { Component } from 'react';
import { Image } from 'react-konva';

// const sprite = new Image();
//
// sprite.src = '#';
//
// sprite.onload = () => {
//   this.setState({
//     battleSprite: sprite,
//   });
// };
const friction = 0.98;
const speed = 2;

class Sprite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardCoords: this.props.boardCoords, // This array will reference the 'grid tiles' of our board. All collisions will refer to these indices.
      battleSprite: null,  // This will hold our 'Sprite' image object src ref.
      x: this.props.x,
      y: this.props.y,
      velX: 0,
      velY: 0,
      keys: []
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      this.state.keys[e.keyCode] = true;
      console.log(this.state.keys[e.keyCode])
      // e.preventDefault()  This preventDefault will stop someone from scrolling with arrows while the Konva component is mounted.
    });

    window.addEventListener('keyup', (e) => {
      this.state.keys[e.keyCode] = false;
      console.log(this.state);
    });
  }

  render() {

    return(
      <Image fill={'blue'} image={this.state.battleSprite} x={this.state.x} y={this.state.y} width={200} height={200}/>
    )
  }
}

export default Sprite;
