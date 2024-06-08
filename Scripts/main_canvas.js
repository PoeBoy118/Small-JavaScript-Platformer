// Initial Code to test import
// const scriptTest = () => {
//     console.log("This Button Is Working")
// }

//Drawing Variables
// var canvas;
// var ctx;

// Run Code on Load
window.onload = function() {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");

    // ctx.fillStyle = "red"
    // ctx.fillRect(10, 10, 50 ,50)

    // Main Canvas Code
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 1280, 720) //numbers go x placement, y placement, size x, size y, with y being reversed
}