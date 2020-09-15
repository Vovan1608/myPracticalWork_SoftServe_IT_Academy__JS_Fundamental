'use strict';

class Circle{
    constructor(centerX, centerY, radius){
        this._centerX = centerX;
        this._centerY = centerY;
        this._radius = radius;
    }
    calcCircumference(){
        let circumference = 2 * this._radius * Math.PI;
        return circumference;
    }
    static calcCircuit(radius){
        return 2 * radius * Math.PI;
    }

}

let c = new Circle(5, 5, 6);
console.log(c);
console.log(c.calcCircumference())
console.log(Circle.calcCircuit(5))