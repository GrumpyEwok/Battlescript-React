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
      width: window.innerWidth,
      height: 1000,
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
      e.preventDefault()

      // This preventDefault will stop someone from scrolling with arrows while the Konva component is mounted. Better to remove this, and set a full-screen size.

    });

    window.addEventListener('keyup', (e) => {
      this.state.keys[e.keyCode] = false;

    });

   // Instantiate timer.  Timer calls our Update function every frame.
      this.timer = timer(() => this.handleUpdate());


   // Consider setting a timeOut here, if there is no key being pressed we don't need to render.

  }

  handleUpdate() {

    const friction = 0.98;
    const speed = 3;
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
    if (x >= this.state.width - 104) {
      this.setState({x: this.state.width - 104});
    } else if (x <= 0) {
      this.setState({x: 0});
    }

    if (y >= this.state.height - 100) {
      this.setState({y: this.state.height - 100});
    } else if (y <= 0) {
      this.setState({y: 0});
    }

  };


  render() {

    const bordered = {
      border: '1px solid green',
    };

    const marginBot = {
      marginBottom: '10px',
    };

        // We pass our x and y values from state, which represent the sprite's coordinates relative to the canvas. This is incredibly cool.  Some of the props passed are likely unnecessary, and should be factored out.

    return (
      <div>
        <h2 style={marginBot}>X: {Math.floor(this.state.x)} --- Y: {Math.floor(this.state.y)}</h2>
        <div style={bordered} className="battlefield">
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
      </div>
    );
  }
}

export default KonvaTest;
