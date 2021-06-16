class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = r
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        image(this.image,20,50,50,50);
        pop();
    }

};