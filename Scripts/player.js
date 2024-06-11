function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 100;

    this.step = () => {
        console.log("player step")
    };

    this.draw = (ctx) => {
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    };
};

export default Player