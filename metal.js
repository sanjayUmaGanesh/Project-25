class Metal {
    constructor(x, y, height, angle) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, 2, height, options);
      this.width = 2;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };