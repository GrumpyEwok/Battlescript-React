import React, { Component } from 'react';

import { Stage, Layer, Rect } from 'react-konva';



class KonvaTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battleSprite: null, // This will hold our 'Sprite' image object, which has a sprite.src property.
      boardCoords: [], // This array will reference the 'grid tiles' of our board. All collisions will refer to these indices.
      x: (window.innerWidth /2 ),
      y: (window.innerHeight /2),
      keys: [],
    };
  }

  componentDidMount() {

    const battleSprite = new Image();
    battleSprite.src = 'sprite source url';

    battleSprite.onload = () => {
      this.setState({
        battleSprite: battleSprite,
      });
      // this.timer = timer(() => this.gameLoop());  Timer Logic for updating/tracking game loop.
    };

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

  // gameLoop() {
  //
  // }

  render() {


    const { battleSprite } = this.state,
          { width, height } = this.props;

    const bordered = {
      border: '1px solid red',
    };

    // width={window.innerWidth} height={window.innerHeight}; FullScreen.
    return (
      <div style={bordered}>
        <Stage width={1000} height={1000}>
          <Layer>
            <Rect
              x={400}
              y={400}
              width={50}
              height={50}
              fill={'blue'}
              shadowBlur={5}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default KonvaTest;
