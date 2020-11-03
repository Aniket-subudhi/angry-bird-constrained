class Chain {
    constructor(bodyA,bodyB){
var options = {
bodyA:bodyA,
bodyB:bodyB,
length:4,
stiffness : 0.4


}
console.log(Constrained)
this.chain=Constrained.create(options)
World.add(world,this.chain)

 

    }
display(){
var point_a  = this.chain.bodyA.position
var point_b = this.chain.bodyB.position
line(point_a.x,point_a.y,point_b.x,point_b.y)
 
}




}