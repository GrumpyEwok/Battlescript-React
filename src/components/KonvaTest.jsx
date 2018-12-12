import React, { Component } from 'react';

import { Stage, Layer, Rect } from 'react-konva';

import Sprite from './Sprite';



class KonvaTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardCoords: [], // This array will reference the 'grid tiles' of our board. All collisions will refer to these indices.
      x: (window.innerWidth),
      y: (window.innerHeight /2 ),
      keys: [],
    };
  }


  render() {
    
    const bordered = {
      border: '1px solid red',
    };

        // Go INTO Rect.  Access X and Y as PROPS, and then calculate the changes in Rect.  Move keydown to Rect/Sprite, because it will need to have access to those values in order to calculate how to animate.
    return (
      <div style={bordered}>
        <Stage width={this.state.x} height={this.state.y}>
          <Layer>
            <Sprite
              x={450}
              y={200}
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
