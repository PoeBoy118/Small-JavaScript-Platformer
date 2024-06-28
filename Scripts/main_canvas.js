// Initial Code to test import
// const scriptTest = () => {
//     console.log("This Button Is Working")
// }

import Player from "./player.js";
import Border from "./border.js";

//Drawing Variables
let canvas;
let ctx;

// Create Game Variables
let gameLoop;
let player;
let borders = [];

// Create Input Variables
let upKey;
let rightKey;
let downKey;
let leftKey;

// Run Code on Load
window.onload = () => {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    // Set Up Key Listeners

    setupInputs();

    // Create Player
    player = new Player(100, 400);

    // Create Borders
    
        // Ground
    for (let i = 0; i < 6; i++) {
        borders.push(new Border(0 + 100 * i, 620, 100, 100, 1))
    };

        // Border on Ground
    borders.push(new Border(0, 520, 100, 100, 2))

        // Border on Right of Ground
    for (let i = 0; i < 3; i++) {
        borders.push(new Border(600, 420 + 100 * i, 100, 100, 2))
    }

    // Start Game Loop, Runs Step Function Every Number In Miliseconds
    gameLoop = setInterval(globalStep, 1000/30);
};

// Main Canvas step? (Step seems to be something you want to have updated in an interval, not sure)

function globalStep() {
    // console.log("step")
    
    // Player Step
    player.step();

    // Draw Everything
    draw();
};

function draw() {
    // Clear Canvas
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 1280, 720) //numbers go x placement, y placement, size x, size y, with y being reversed

    // Draw The Player
    player.draw(ctx);

    // Draw The Borders
    for (let i = 0; i < borders.length; i++) {
        borders[i].draw(ctx);
    };
};

function setupInputs() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = true;
            console.log("upKey is:", upKey)

        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = true;
            console.log("leftKey is:", leftKey)

        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = true
            console.log("downKey is", downKey)

        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = true
            console.log("rightKey is", rightKey)

        }
    });

    document.addEventListener("keyup", function(event) {
        if (event.key === "w" || event.key === "ArrowUp") {
            upKey = false
            console.log("upKey is:", upKey)

        } else if (event.key === "a" || event.key === "ArrowLeft") {
            leftKey = false
            console.log("leftKey is:", leftKey)

        } else if (event.key === "s" || event.key === "ArrowDown") {
            downKey = false
            console.log("downKey is", downKey)

        } else if (event.key === "d" || event.key === "ArrowRight") {
            rightKey = false
            console.log("rightKey is", rightKey)
        }
    });


}

export {leftKey, rightKey, upKey, downKey}