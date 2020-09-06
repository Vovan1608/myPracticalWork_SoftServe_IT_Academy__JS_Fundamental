'use strict';

function GeometricFigure(centerX, centerY){
    if(this.__isNumber(centerX)){
        this.__centerX = centerX;
    }else{
        this.__centerX = 0;
    }
    if(this.__isNumber(centerY)){
        this.__centerY = centerY;
    }else{
        this.__centerY = 0;
    }
    
}

GeometricFigure.prototype.__isNumber = function (number) {
    if (typeof number === "number" && number >= 0) {
        return true;
    }else{
        return false;
    }
}

GeometricFigure.prototype.setCenterX = function(centerX){
    if(this.__isNumber(this.__centerX)){
        this.__centerX = centerX
    }
}

GeometricFigure.prototype.getCenterX = function(){
    return this.__centerX;
}

GeometricFigure.prototype.setCenterY = function(centerY){
    if(this.__isNumber(this.__centerY)){
        this.__centerY = centerY
    }
}

GeometricFigure.prototype.getCenterX = function(){
    return this.__centerY;
}

function Rectangle(centerX, centerY, diagonal){
    GeometricFigure.call(this, centerX, centerY);
    if(this.__isNumber(diagonal)){
        this.__diagonal = diagonal;
    }else{
        this.__diagonal = 1;
    }
}

Rectangle.prototype = Object.create(GeometricFigure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setDiagonal = function(diagonal){
    if(this.__isNumber(this.__diagonal)){
        this.__diagonal = diagonal;
    }
}

Rectangle.prototype.getDiagonal = function(){
    return this.__diagonal;
}

Rectangle.prototype.info = function (){
    console.log("Rectangle: ");
    console.log("X is: " + this.__centerX);
    console.log("Y is: " + this.__centerY);
    console.log("Diagonal is: " + this.__diagonal);
}

function Circle(centerX, centerY, radius){
    GeometricFigure.call(this, centerX, centerY);
    if(this.__isNumber(radius)){
        this.__radius = radius;
    }else{
        this.__radius = 1;
    }
}

Circle.prototype = Object.create(GeometricFigure.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setRadius = function(radius){
    if(this.__isNumber(this.__radius)){
        this.__radius = radius;
    }
}

Circle.prototype.getRadius = function(){
    return this.__radius;
}

Circle.prototype.info = function (){
    console.log("Circle:");
    console.log("X is: " + this.__centerX);
    console.log("Y is: " + this.__centerY);
    console.log("Radius is: " + this.__radius);
}


var ract = new Rectangle(3, 5, 8);
ract.info();

var circ = new Circle(8, 9, 10);
circ.info()