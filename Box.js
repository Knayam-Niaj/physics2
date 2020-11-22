class Box{
    constructor(x, y, width, height){
        var option = {isStatic: false, restitution: 0.5, density: 4, friction: 0.4}
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y); 
        rotate(angle);
        angleMode(RADIANS);
        rectMode(CENTER);
        fill("blue");

        rect(0, 0, this.width, this.height);
        pop();
    }
}