'use strict';

class Circle{
    constructor(centerX, centerY, radius){
        this._centerX = centerX;
        this._centerY = centerY;
        this._radius = radius;
    }
    calcCircumference(){
        return 2 * this._radius * Math.PI;
    }
    static calcCircuit(radius){
        return 2 * radius * Math.PI;
    }
    copyCircle(){
        return new Circle(
            Object.assign({}, this)._centerX, 
            Object.assign({}, this)._centerY, 
            Object.assign({}, this)._radius
        );
    }
    static getCircle(centerX, centerY, radius){
        return new Circle(centerX, centerY, radius);
    }
    isInCircle(x, y){
        if(
            Math.abs(this._centerX - x) < this._radius &&
            Math.abs(this._centerY - y) < this._radius
        ){
            return true;
        }else{
            return false;
        }
    }
    toString(){
        return `centerX: ${this._centerX}, centerY: ${this._centerY}, radius: ${this._radius}`;
    }
}

let c = new Circle(1, 7, 3);
console.log(c);


// console.log(c.calcCircumference())
// console.log(Circle.calcCircuit(5))
console.log(Circle.getCircle(3, 5, 8))
// console.log(Circle.getCircle(2, 3, 6))
// console.log(c.isInCircle(-2, 4),)
// console.log(c.toString())
console.log(c.copyCircle())