// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor (attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.heigth = attributes.heigth;
  }
  volume(){
    return this.length * this.width * this.heigth; 
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.heigth + this.width * this.heigth);
  }
}

const cuboid2 = new CuboidMaker2({length: 4, width:5, heigth:5});

console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
// Test your volume and surfaceArea methods by uncommenting the logs below:


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.