const Heart = require('./services/Heart');

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
