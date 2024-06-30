import {leftKey, rightKey, upKey, downKey, borders, checkIntersection} from "./main_canvas.js"

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

            };


            if (this.yspeed > this.maxSpeed) {
                this.yspeed = this.maxSpeed
            
            } else if (this.yspeed < -this.maxSpeed) {
                this.yspeed = -this.maxSpeed
                
            };

            // Making Speed Whole Numbers
            if (this.xspeed > 0) {
                this.xspeed = Math.floor(this.xspeed);

            } else {
                this.xspeed = Math.ceil(this.xspeed)

            };

            
            if (this.yspeed > 0) {
                this.yspeed = Math.floor(this.yspeed);

            } else {
                this.yspeed = Math.ceil(this.yspeed)
                
            };


            // Horizontal Collision Rectangle
            let horizontalRect = {
                x: this.x + this.xspeed,
                y: this.y,
                width: this.width,
                height: this.height
            };

            // Vertical Collision Rectangle
            let verticalRect = {
                x: this.x,
                y: this.y + this.yspeed,
                width: this.width,
                height: this.height
            };

            // Check For Intersections
            for (let i = 0; i < borders.length; i++) {
                let borderRect = {
                    x: borders[i].x,
                    y: borders[i].y,
                    width: borders[i].width,
                    height: borders[i].height
                };

                if (checkIntersection(horizontalRect,borderRect)) {
                    while(checkIntersection(horizontalRect, borderRect)) {
                        horizontalRect.x = horizontalRect.x - Math.sign(this.xspeed)
                    };
                    
                    this.x = horizontalRect.x;
                    this.xspeed = 0;
                };

                if (checkIntersection(verticalRect,borderRect)) {
                    while(checkIntersection(verticalRect, borderRect)) {
                        verticalRect.y = verticalRect.y - Math.sign(this.yspeed)
                    };

                    this.y = verticalRect.y
                    this.yspeed = 0;
                };
            };

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