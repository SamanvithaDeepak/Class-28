class Constraint{
    constructor(body1,point){
        var options ={
            bodyA:body1,
            pointB:point,
            length:10,
            stiffness:0.04
        }

        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain);
    }

    display(){
       var bodyA = this.chain.bodyA.position;
       var pointB = this.chain.pointB
        if(this.chain.bodyA){

        push()
        strokeWeight(4);
        line(bodyA.x, bodyA.y,pointB.x,pointB.y);
        pop()
    }}

    fly(){
        this.chain.bodyA = null;
    }
}