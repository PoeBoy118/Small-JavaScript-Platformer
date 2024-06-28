import {leftKey, rightKey, upKey, downKey} from "./main_canvas.js"

function Player(x, y) {
    //Player Variables
    this.x = x;
    this.y = y;
    
    this.xspeed = 0;
    this.yspeed = 0;
    this.friction = 0.6;
    this.maxSpeed = 20;

    this.width = 50;
    this.height = 100;
    
    this.active = true;
    
    this.step = () => {
        // Test if pleyer is working
        // console.log("player step")

        // Movement
        if (this.active) {
            // Horizontal Movement
            
            if (!leftKey && !rightKey || leftKey && rightKey) {
                // Slowdown
                this.xspeed = this.xspeed * this.friction;

            } else if (rightKey) {
                // Updating Movement Right Speed
                this.xspeed ++;

            } else if (leftKey) {
                // Updating Movement Left Speed
                this.xspeed --;
            };

            // Vertical Movement

            if (upKey) {
                // Check for Ground Placement

                this.yspeed = this.yspeed - 15
            };

            // Apply Gravity
            this.yspeed = this.yspeed + 5;

            // Speed Limiter
            if (this.xspeed > this.maxSpeed) {
                this.xspeed = this.maxSpeed
            
            } else if (this.xspeed < -this.maxSpeed) {
                this.xspeed = -this.maxSpeed

            }


            if (this.yspeed > this.maxSpeed) {
                this.yspeed = this.maxSpeed
            
            } else if (this.yspeed < -this.maxSpeed) {
                this.yspeed = -this.maxSpeed
                
            }
            
            // Changing Screen Position (Actual Movement)
            this.x = this.x + this.xspeed;
            this.y = this.y + this.yspeed;

            // console.log("xspeed", this.xspeed)
        }
    };

    this.draw = (ctx) => {
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    };
};

export default Player