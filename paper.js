class Paper {
    constructor(x,y,radius) {
        this.body=Bodies.circle(x,y,(radius-20)/2,{restitution: 0.3, isStatic: false, density: 1.2, friction: 0.5})
        World.add(world,this.body);
        this.image=loadImage("sprites/paper.png");
        this.radius=radius;
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}