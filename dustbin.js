class Dustbin {
    constructor(x,y,width,height) {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic: true});
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.image=loadImage("sprites/dustbin.png");
    }

    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}