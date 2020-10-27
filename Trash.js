class Trash
{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
            
            this.body = Bodies.circle(x,y,r,options);  
            this.r = r;
            this.image = loadImage("paper.png");
            World.add(world,this.body);   
    }
        display() 
        {    

    var paperpos=this.body.position;
    var angle = this.body.angle;
    push();
    translate(paperpos.x,paperpos.y);
    rotate(angle);
    imageMode (CENTER);
    image (this.image,0,0,55,55);
    pop();
        }
    }