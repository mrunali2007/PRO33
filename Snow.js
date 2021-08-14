class Snow {
constructor(x,y,width,height){
    var options = {
       isStatic : false,
       friction : 0.08,
       density : 0.04
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("snow4.webp")
    this.width = width;
    this.height = height;
    World.add(world,this.body);
   
}

 display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();

   
}
}


