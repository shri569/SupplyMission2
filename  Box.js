class Box
{
    constructor(x,y,width,height)
    {
        var options = 
        {
          isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = 20;
        this.height = height;
        World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
        }
        };



