class Slingshot{
    constructor(bodyA,pointB){
    
        var options = {
            bodyA : bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        image(this.sling1,200,7)
        image(this.sling2,175,7)
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position  
            var pointB=this.pointB;  
            push(); 
            stroke(48,22,8);

            if(pointA.x<220){
            strokeWeight(7)
           line(pointA.x -25 ,pointA.y,pointB.x-10,pointB.y);
           line(pointA.x -25 ,pointA.y,pointB.x +30,pointB.y-3);
           image(this.sling3,pointA.x-25,pointA.y-10,15,30)
            }
                        
            else{
                strokeWeight(4)
                line(pointA.x -25 ,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x -25 ,pointA.y,pointB.x +30,pointB.y-3);
                image(this.sling3,pointA.x-25,pointA.y-10,15,30)

            }
           pop();
        }
    }
    fly(){
        this.sling.bodyA=null    
    }

    
}