//Open Close Principle
//making a base class instead adding new figures classes
class Shape {
  area() {
    throw new Error("Area method should be implemented");
  }
}
//Inherit from base class
class Square extends Shape {
  constructor(size) {
    super();
    //this.type = "square";
    this.size = size;
  }
  area() {
    return this.size * 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    // this.type = "circle";
    this.radius = radius;
  }
  area() {
    return this.radius ** 2 * Math.PI;
  }
}

//console.log(new Circle(5));
class Rect extends Shape {
  constructor(width, height) {
    super();
    //this.type = "rect";
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }
  area() {
    return (this.a * this.b) / 2;
  }
}
class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }
  sum() {
    return this.shapes.reduce((acc, shape) => {
      /*  if (this.type === "circle") {
        acc += shape.radius ** 2 * Math.PI;
      } else if (shape.type === "square") {
        acc += shape.size ** 2;
      } else if (shape.type === "rect") {
        acc += shape.width * shape.height;
      }
      return acc; */
      acc += shape.area();
    }, 0);
  }
}

const calc = new AreaCalculator(
  [new Square(10), new Circle(5), new Circle(4)],
  new Rect(10, 20),
  new Triangle(10, 15)
);

console.log(calc.sum());
// Class AreaCalculaot open for adding new features, but method sum is close and doesn't changed and
//could be useful for other figure classes
//video finished at 35:30
