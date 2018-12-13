# Battlescript

#### Battleship, but single player

#### By Josh Gearheart, Chris Gosser, Evan Filkins, Eric Conner

## Description

This is battleship, but single player, so you don't have to worry about your sister peeking.

## Planning

### Specs

## Setup/Installation Requirements
```
cd 
```
### Pre-Install

You must have Node.js an installed on your machine. If not, follow these pre-instructions:

****

#### **Node.js Install**

##### _For OSX_

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

scanlines codepen https://codepen.io/meduzen/pen/zxbwRV
