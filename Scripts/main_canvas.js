// Initial Code to test import
// const scriptTest = () => {
//     console.log("This Button Is Working")
// }

import Player from "./player.js";

//Drawing Variables
let canvas;
let ctx;

// Create Game Variables
let gameLoop;
let player;

// Run Code on Load
window.onload = () => {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");

    // Set Up Key Listeners

    

    // Create Player
    player = new Player(100, 400);

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
};