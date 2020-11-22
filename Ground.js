class Ground{
    constructor(x, y, width, height){
        var obj_option = {isStatic: true};
        this.body = Bodies.rectangle(x, y, width, height, obj_option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rect(pos.x, pos.y, this.width, this.height);
    }
    
}