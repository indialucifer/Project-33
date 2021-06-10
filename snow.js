class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 1,
            denstity:0.001,
            isStatic:false
        }
        this.r = 5;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,this.r,this.r);
        pop();
    }
};