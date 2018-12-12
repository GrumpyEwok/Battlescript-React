import React, { Component } from 'react';
import Konva from 'konva';
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


class Sprite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardCoords: this.props.boardCoords, // This array will reference the 'grid tiles' of our board. All collisions will refer to these indices.
      battleSprite: null,  // This will hold our 'Sprite' image object src ref.
      x: this.props.x,
      y: this.props.y,
      velX: this.props.velX,
      velY: this.props.velY,
      keys: [],
    };
  }

  componentDidMount() {

  }

  render() {

    return(
      <Image fill={'blue'} image={this.state.battleSprite} x={this.props.x} y={this.props.y} width={100} height={100}/>
    )
  }
}

export default Sprite;
