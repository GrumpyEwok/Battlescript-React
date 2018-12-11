import React, { Component } from 'react';

import { Stage, Layer, Text } from 'react-konva';

import ColoredRect from './ColoredRect';


class KonvaTest extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Click on me if thou darest." />
          <ColoredRect />
        </Layer>
      </Stage>
    );
  }
}

export default KonvaTest;
