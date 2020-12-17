class Stone{

    constructor(x,y,width,height){
     var options={
         isStatic: false,
         restitution:0,
         friction:2,
         density:1.2
     }
    
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.image = loadImage("Project28-Supplement/stone.png");
    }
    
    display(){

      var pos = this.body.position

      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);


    }
    
 
}