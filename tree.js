class Tree{

    constructor(x,y){
     var options={
         isStatic: true
     }
    
        this.body = Bodies.rectangle(x,y,100,20,options);
        World.add(world,this.body);
        this.image = loadImage("Project28-Supplement/tree.png");
    }
    
    display(){

      var pos = this.body.position

      imageMode(CENTER);
      image(pos.x,pos.y,100,20);


    }
    
 
}