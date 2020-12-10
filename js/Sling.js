class Sling
{
    constructor(body1,point2)
    {
     var options = 
     {
         bodyA: body1,
         pointB:point2,
         stiffness: 0.40,
         length:200
     }

     this.point2 = point2;
     this.slingshot = Constraint.create(options);
     World.add(world,this.slingshot);
    }

    display()
    {
        var point1 = this.slingshot.bodyA.position;
        var point2 = this.point2;
        stroke(48,22,8);
    strokeWeight(5);
    line(point1.x ,point1.y ,point2.x ,point2.y)
    }
}