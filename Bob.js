class Bob{
constructor(x,y,Radius){
var option ={
    isStatic:false,
  restitution:1,
  friction:0,
   density:0.8
}
this.body=Bodies.circle(x,y,Radius,option);
this
this.Radius=Radius;
  World.add(world,this.body);
}
display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y);
    fill(250,150,180);
    ellipseMode(CENTER);
    ellipse(0,0,this.Radius);
pop();
}

}