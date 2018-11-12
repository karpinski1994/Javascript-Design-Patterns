const Heart = require('./Heart');

class Pig {
  constructor(heart){
   this.heart = heart;
  }

  live() {
    this.heart.beat();
  }
}
const heart = new Heart();
const malwinka = new Pig(heart);

malwinka.live();
