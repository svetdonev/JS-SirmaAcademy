class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

     calcArea(){
        return this.height * this.width;
    }
}

let rect = new Rectangle(10, 10);

console.log(rect.calcArea());