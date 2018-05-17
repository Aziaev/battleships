## React Battleship App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information about this project<br>

##Table of Contents
- [How to start](#how-to-start)
- [How to play](#how-to-play)
- [Gameplay video](#gameplay-video)
- [Sending Feedback](#sending-feedback)
- [Project Structure](#project-structure)
- [Design document](#design-document)
- [Supported Browsers](#supported-browsers)
- [Supported Devices](#supported-devices)

## How to start
1. Clone this repository:
    ```git clone https://Ziaev@bitbucket.org/Ziaev/battleships.git``` 
2. Install all dependecies:
    ```npm install```
3. Start application:
    ```npm start```
4. Open in your browser [http://localhost:3000/](http://localhost:3000/)

##How to play
For start - press [Start new game] on center of battlefield. For restart game press reset in desktop mode or press application name in tablet and phone mode.

##Gameplay video
[Desktop mode](https://youtu.be/h8oCAoSDTp0)
[Tablet mode](https://youtu.be/u4tn8XlQfws)
[Phone mode](https://youtu.be/3k3QLbknZHs)

##Sending Feedback
My email is [your feedback](aziaev@gmail.com).

##Project Structure
After creation, your project will look like this:
```
this-app-folder/
  build/
  node_modules/
  public/
      index.html
      favicon.ico
      manifest.json
  src/
    app/
        components/
            BattleField.js
            Cell.js
            Flotilla.js
            Hitpoints.js
            Nav.js
            Scores.js
            StartButton.js
            Stats.js
        constants/
            constants.js
        helpers/
            generateBattleField.js
            getMaxHits.js
        App.js
    assets/
        css/
            App.css
        img/
            Aircraft Shape.png
            Battleship Shape.png
            Carrier Shape.png
            Cruiser Shape.png
            Hit.png
            Hit small.png
            Miss.png
            Miss small.png
            Submarine Shape.png
        js/
            bootstrap.bundle.js
            bootstrap.js
    Coding Task frontend.docx
    index.js
    registerServiceWorker.js
  package.json
  README.md  
```

#####Structure description:
This folder contains JS files of React. There are folders with components - ```components```, constants with initial data - ```constants.js```, helpers folder with JS functions for randomly  battlefield genereation - ```generateBattleField.js``` and utility functions in ```getMaxHits.js```.

Assets folder contains images and cascade style tables.

React main entry point is ```index.js```

##Design document
Design document is located in ```src``` folder of project - ```Coding Task frontend.docx```

##Supported Browsers
By default, the generated project uses the latest version of React. This project is developed and supports latest Google Chrome.

##Supported devices
Mobile phones, tablets and desktop computers. Application has 3 different screen modes: phone, tablet and desktop
