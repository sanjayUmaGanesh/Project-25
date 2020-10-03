class ball{

    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 0.5,
            density: 0.5,
        }

        this.r = 50;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, this.r/2, options)


        

        World.add(world, this.body,this.image,);
        

    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("green");
        rectMode(CENTER)
        imageMode(CENTER);
        strokeWeight(4);
        image(this.image,0, 0, this.r,);
        pop();
      }
    }
    


