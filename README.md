# Battlescript


#### A new take on Battleship.

#### By Josh Gearheart, Chris Gosser, Evan Filkins, and Eric Conner

## Description

A canvas-based Battleship simulator, built in React.  Players use the arrow keys to move a 'ship' sprite to the appropriate grid tile they'd like to launch an attack on.  State is constantly aware of the sprite's X and Y position, and uses them (along with speed, velocity and friction) to calculate how to animate the object moving.

## Minimum Viable Product

We began with the intention of having a two player game, that maps a character's boardCoords (i.e. where their opponent's ships are placed) to a unique ID in firebase. The ability to launch an attack (i.e. dispatch an action with a payload of the sprite's pos X and pos Y) and receive a response of 'Hit' or 'Miss' is our most basic playable functionality.  MVP should also have a way of alerting a player if the game is finished, i.e. all of one player's ships have been sunk.

### Specs
>>>>>>> 6cf07bac19d57699c2484411201fcaf7e465d51f

* Incorporates a Konva canvas, leveraging React-Konva for animation.
* Generates a board (an array of 10 arrays) that contain ships appropriately placed.  In a minimum viable product these are placed randomly, but Konva allows for drag-and-drop functionality which would allow players to place their own ships.

## Setup/Installation Requirements

Clone this repo, navigate to the directory in which it has been stored via terminal, install dependencies and host locally.

```
git clone http://github.com/GrumpyEwok/Battlescript-React

cd ~/path/to/battlescript-react

npm install

<<<<<<< HEAD
- First, install Homebrew if it is not installed on your computer already.
  - To install Homebrew, enter the following in order in terminal:
  - `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`

##### _For other operating systems_

Head on over to the [Node website](https://nodejs.org/en/download/) to download and install the appropriate installer for your computer.

##### _Install Node.js_

Now install Node.js like this in terminal: `$ brew install node`.

****

#### **Windows Users**

If you have a windows machine, you may also need a terminal program.  If so, download and install Git BASH at msysgit.github.io, and open it before continuing.

****

### Install

- Open terminal and enter `$ cd Desktop` (or your preferred destination).
- Then enter `$ git clone https://github.com/gearjosh/beeriodic-table.git`.
- Enter `$ cd beeriodic-table`.
- Enter `$ npm install`
- Finally, enter `$ npm run start`.

## Notes
- It's hard to tell how to form the components in my beeriodic cells.  Because the grid will take in the master keg list, it could just populate the entire grid within a single component.  And since the grid will show on every screen, it's not like I'll be reusing that code outside the component itself...

## Known Bugs
- No known bugs. But... it's still a work in progress, so it doesn't yet have full CRUD functionality yet, only the CR_D.  I still need to build out the edit functionality.

## Support and contact details
- For questions or support open an issue right here in this repo!

## Technologies Used
- This uses React, Webpack, Javascript, npm, and more!

### License
This software is licensed under GNU GPLv3.



Links:

Best Konva Tutorial https://blog.logrocket.com/creating-canvas-graphics-in-react-cad70cd5b210

Water Movement Demo http://jsfiddle.net/loktar/dMYvG/

Fullscreen/Responsive Canvas https://konvajs.github.io/docs/sandbox/Responsive_Canvas.html

Batch Draw https://konvajs.github.io/docs/performance/Batch_Draw.html

Keydown Stack https://stackoverflow.com/questions/22262130/javascript-game-move-character-while-key-down

Continuous Movement https://gamedev.stackexchange.com/questions/130576/how-can-i-make-my-movement-continuous

Water-Canvas Filter Effect http://code.almeros.com/code-examples/water-effect-canvas/#.XBAHkRNKi3K

=======
npm run start

```

# Presentation Notes:
  * Evan starts, maybe, talks about Concept and (potential) failure to implement some reducer logic.  Demo Konva.

  * Josh + Eric talk about what we can do (i.e. a board is generated, and filled correctly, which is cool -- people just can't see it out of console, but we can emphasize the point that it's there) and what was particularly challenging about what we couldn't.

  * We should also talk about our original '2player' intention, and how firebase could have facilitated that by storing battlefield arrays under unique keys (likely referenced in a uniquely ID'd player object's "curentGames" key.)


## Support and contact details
- For questions or support open an issue right here in this repo!

## Technologies Used
- This uses React, Webpack, Javascript, npm, and more!

### License
This software is licensed under GNU GPLv3.



Links:

Best Konva Tutorial https://blog.logrocket.com/creating-canvas-graphics-in-react-cad70cd5b210

Water Movement Demo http://jsfiddle.net/loktar/dMYvG/

Fullscreen/Responsive Canvas https://konvajs.github.io/docs/sandbox/Responsive_Canvas.html

Batch Draw https://konvajs.github.io/docs/performance/Batch_Draw.html

Keydown Stack https://stackoverflow.com/questions/22262130/javascript-game-move-character-while-key-down

Continuous Movement https://gamedev.stackexchange.com/questions/130576/how-can-i-make-my-movement-continuous

Water-Canvas Filter Effect http://code.almeros.com/code-examples/water-effect-canvas/#.XBAHkRNKi3K

>>>>>>> 6cf07bac19d57699c2484411201fcaf7e465d51f
scanlines codepen https://codepen.io/meduzen/pen/zxbwRV
