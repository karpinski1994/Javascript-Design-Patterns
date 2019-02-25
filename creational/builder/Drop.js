class Drop {
  constructor(name) {
    this.name = name;
  }
}

class DropBuilder {
  constructor(name) {
    this.drop = new Drop(name);
  }

  setStartPos(x, y) {
    this.drop.startX = x;
    this.drop.startY = y;
    console.log('this z dropBuildera: ', this)
    return this;
  }

  setVelocity(x, y) {
    this.drop.velX = x;
    this.drop.velY = y;
    return this;
  }
  
  build() {
    return this.drop;
  }
}

const helloDrop = 
  new DropBuilder('Dropka')
    .setStartPos(10, 5)
    .setVelocity(10, 2);

const helloDrop2 = 
  new DropBuilder('Dropka2')
    .setStartPos(10, 5);

    
console.log(helloDrop);
console.log(helloDrop2);