'use strict';

class GeometricFigure{
    constructor(centerX, centerY){
        this._centerX = centerX;
        this._centerY = centerY;
    }
    static isNumber(number) {
        if (typeof number === "number" && number > 0) {
            return true;
        }else{
            return false;
        }
    }
    set centerX (centerX){
        if(GeometricFigure.isNumber(centerX)){
            this._centerX = centerX;
        }
    }
    get centerX (){
        return this._centerX;
    }
    set centerY (centerY){
        if(GeometricFigure.isNumber(centerY)){
            this._centerY = centerY;
        }
    }
    get centerY (){
        return this._centerY;
    }
}

class Rectangle extends GeometricFigure{
    constructor(centerX, centerY, diagonal){
        super(centerX, centerY);
        this._diagonal = diagonal;
    }
    set diagonal (diagonal){
        if(GeometricFigure.isNumber(diagonal)){
            this._diagonal = diagonal;
        }
    }
    get diagonal(){
        return this._diagonal;
    }
    info (){
        console.log(`Rectangle: 
        X is: ${this._centerX}, Y is: ${this._centerY}, Diagonal is: ${this._diagonal}`);
    }
}

class Circle extends GeometricFigure{
    constructor(centerX, centerY, radius){
        super(centerX, centerY);
        this._radius = radius;
    }
    set radius (radius){
        if(GeometricFigure.isNumber(radius)){
            this._radius = radius;
        }
    }
    get radius(){
        return this._radius;
    }
    info (){
        console.log(`Circle: 
        X is: ${this._centerX}, Y is: ${this._centerY}, Radius is: ${this._radius}`);
    }
}

let rect = new Rectangle(6, 9, 8);
console.log(rect.info());
let circ = new Circle(2, 3, 5);
console.log(circ.info());