
class Director {
  construct(builder) {
    builder.startBuilding();
    builder.addFloor();
    builder.addRoof();
    return builder.get();
  }
}

class BuildingBuilder {
  constructor() {
    this.building = null;
  }
  startBuilding() {
    this.building = new Building();
  }
  addFloor() {
    this.building.addFloor();
  }
  addRoof() {
    this.building.addRoof();
  }
  get() {
    return this.building;
  }
  
}

class Building {
  constructor() {
    this.flors = 0;
    this.roof = false;
  }
  addFloor() {
    this.flors += 1;
  }
  addRoof() {
    if (!this.roof) 
      this.roof = true; 
  }
  pickUp(){
    console.log(`Building floors: ${this.flors},roof ${this.roof} - constructed!`)
  }
}

const director = new Director();
const buildingBuilder = new BuildingBuilder();
const building = director.construct(buildingBuilder);

building.pickUp();