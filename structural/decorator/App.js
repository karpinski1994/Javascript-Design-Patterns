
class Mouse {
  constructor(name, speed) {
    name,
    speed,
    this.noise = 'pipipi';
  }
  makeNoise() {
    console.log(this.noise);
  }
}

class GuineaPig {
  constructor(name, speed) {
    name,
    speed
    this.noise = 'kwi...kwii..kwiii!';
  }
  makeNoise() {
    console.log(this.noise);
  }
}

class SuperHiper {
  constructor(animal){
    this.name = `SuperHiper${animal.name}`;
    this.speed = animal.speed + 5;
    this.noise = animal.noise.toUpperCase();
  }
  makeNoise() {
    console.log(this.noise);
  }
}
  
const pig = new GuineaPig('Mariusz', 2);
const mouse = new Mouse('Błażej', 1.5);

pig.makeNoise();
mouse.makeNoise();

const superPig = new SuperHiper(pig);

superPig.makeNoise();


