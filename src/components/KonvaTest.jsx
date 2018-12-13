import React, { Component } from 'react';

import { timer } from 'd3-timer';

import Konva from 'konva';

import { Stage, Layer } from 'react-konva';

import Sprite from './Sprite';

class KonvaTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardCoords: [], // this.props.boardCoords  This array will reference the 'grid tiles' of our board. All collisions will refer to these indices.  This value needs to get set somehow....
      width: (window.innerWidth),
      height: (window.innerHeight /2 ),
      x: 0,
      y: 0,
      velX: 0,
      velY: 0,
      keys: [],
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      this.state.keys[e.keyCode] = true;
      console.log(this.state.keys[e.keyCode])
      // e.preventDefault()

      // This preventDefault will stop someone from scrolling with arrows while the Konva component is mounted. Better to remove this, and set a full-screen size.

    });

    window.addEventListener('keyup', (e) => {
      this.state.keys[e.keyCode] = false;

    });

   // Instantiate timer.  Timer calls our Update function every frame.
      this.timer = timer(() => this.handleUpdate());


   // Consider setting a timeOut here, if there is no key being pressed we don't need to render.

      setInterval(function() {
        console.log('tick');
      }, 10000)
    // Somehow this interval needs to be cleared.
  }

  handleUpdate() {

    const friction = 0.98;
    const speed = 2;
    let x = this.state.x;
    let y = this.state.y;
    let velX = this.state.velX;
    let velY = this.state.velY;

    if (this.state.keys[38]) {
      if (velY > -speed) {
        this.setState({velY: velY--})
      }
    }

    if (this.state.keys[40]) {
      if (velY < speed) {
        this.setState({velY: velY++});
      }
    }

    if (this.state.keys[39]) {
      if (velX < speed) {
        this.setState({velX: velX++});
      }
    }

    if (this.state.keys[37]) {
      if (velX > -speed) {
        this.setState({velX: velX--});
      }
    }

    this.setState({velY: velY *= friction});
    this.setState({y: y += velY});
    this.setState({velX: velX *= friction});
    this.setState({x: x += velX});

// Fix Canvas boundaries below.
    if (x >= 295) {
      this.setState({x: 295});
    } else if (x <= 5) {
      this.setState({x: 5});
    }

    if (y > 295) {
      this.setState({y: 295});
    } else if (y <= 5) {
      this.setState({y: 5});
    }

  };


  render() {

    const bordered = {
      border: '1px solid red',
    };

        // Go INTO Rect.  Access X and Y as PROPS, and then calculate the changes in Rect.  Move keydown to Rect/Sprite, because it will need to have access to those values in order to calculate how to animate.
    return (
      <div style={bordered}>
        <Stage width={this.state.width} height={this.state.height}>
          <Layer>
            <Sprite
              x={this.state.x}
              y={this.state.y}
              velY={this.state.velY}
              velX={this.state.velX}
              width={50}
              height={50}
              fill={'blue'}
              shadowBlur={5}
              keys={this.state.keys}


            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default KonvaTest;
