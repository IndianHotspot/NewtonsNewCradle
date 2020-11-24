class Bob{
    constructor(x,y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }
        this.x=x
        this.y=y
        this.radius=radius;
        
        this.body = Bodies.circle(x,y,radius, options);
        World.add(world, this.body);
      }
      display(){
        
        var pos =this.body.position;
        //var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        fill("brown");
        ellipse(0,0, this.radius,this.radius);
        pop();
        
      }
    };