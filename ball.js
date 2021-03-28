class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.options = {
      isStatic: false,
      restitutison: 0.3,
      friction: 0.5,
      density: 1.2
    };
    this.body = Bodies.circle(this.x, this.y, diameter / 2, this.options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    ellipse(pos.x, pos.y, diameter, diameter);
    pop();
  }
}