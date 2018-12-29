# Battlescript

#### A new take on Battleship.

#### By Josh Gearheart, Chris Gosser, Evan Filkins, and Eric Conner

## Description

A canvas-based Battleship simulator, built in React.  Players use the arrow keys to move a 'ship' sprite to the appropriate grid tile they'd like to launch an attack on.  State is constantly aware of the sprite's X and Y position, and uses them (along with speed, velocity and friction) to calculate how to animate the object moving.

## Minimum Viable Product

We began with the intention of having a two player game, that maps a character's boardCoords (i.e. where their opponent's ships are placed) to a unique ID in firebase. The ability to launch an attack (i.e. dispatch an action with a payload of the sprite's pos X and pos Y) and receive a response of 'Hit' or 'Miss' is our most basic playable functionality.  MVP should also have a way of alerting a player if the game is finished, i.e. all of one player's ships have been sunk.

### Specs

* Incorporates a Konva canvas, leveraging React-Konva for animation.
* Generates a board (an array of 10 arrays) that contain ships appropriately placed.  In a minimum viable product these are placed randomly, but Konva allows for drag-and-drop functionality which would allow players to place their own ships.

## Setup/Installation Requirements

Clone this repo, navigate to the directory in which it has been stored via terminal, install dependencies and host locally.

```
git clone http://github.com/GrumpyEwok/Battlescript-React

cd ~/path/to/battlescript-react

npm install

npm run start
```

# Presentation Notes:
  * Evan starts, maybe, talks about Concept and (potential) failure to implement some reducer logic.  Demo Konva.

  * Josh + Eric talk about what we can do (i.e. a board is generated, and filled correctly, which is cool -- people just can't see it out of console, but we can emphasize the point that it's there) and what was particularly challenging about what we couldn't.

  * We should also talk about our original '2player' intention, and how firebase could have facilitated that by storing battlefield arrays under unique keys (likely referenced in a uniquely ID'd player object's "curentGames" key.)


## Support and contact details
- For questions or insights please open an Issue in this repo, and we will happily address it.

## Technologies Used
- This app was bootstrapped with create-react-app, which comes with a set of pre-loaded dependencies for various environments, and was developed in Javascript. React-Konva (a canvas library) was used to implement animation.  

### License
This software is available under Apache 2.0 Software Licensure.
Please refer to [this page](https://www.apache.org/licenses/LICENSE-2.0) for further information.



Links:

Best Konva Tutorial: https://blog.logrocket.com/creating-canvas-graphics-in-react-cad70cd5b210

Water Movement Demo: http://jsfiddle.net/loktar/dMYvG/

Fullscreen/Responsive Canvas: https://konvajs.github.io/docs/sandbox/Responsive_Canvas.html

Batch Draw: https://konvajs.github.io/docs/performance/Batch_Draw.html

Keydown Stack: https://stackoverflow.com/questions/22262130/javascript-game-move-character-while-key-down

Continuous Movement: https://gamedev.stackexchange.com/questions/130576/how-can-i-make-my-movement-continuous

Water-Canvas Filter Effect: http://code.almeros.com/code-examples/water-effect-canvas/#.XBAHkRNKi3K

CRT Scanline Codepen: https://codepen.io/meduzen/pen/zxbwRV  -- This must be refactored. As implemented it's not ideal.
