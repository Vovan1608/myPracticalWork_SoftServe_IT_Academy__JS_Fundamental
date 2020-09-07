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
    if(this.__isNumber(centerX)){
        this.__centerX = centerX
    }
}

GeometricFigure.prototype.getCenterX = function(){
    return this.__centerX;
}

GeometricFigure.prototype.setCenterY = function(centerY){
    if(this.__isNumber(centerY)){
        this.__centerY = centerY
    }
}

GeometricFigure.prototype.getCenterY = function(){
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

// свой метод, т.к. сторона строго больше 0
Rectangle.prototype.__isNumber = function (number) {
    if (typeof number === "number" && number > 0) {
        return true;
    }else{
        return false;
    }
}

Rectangle.prototype.getCenterX = function(){
    GeometricFigure.prototype.getCenterX.call(this);
    return this.__centerX;
}

Rectangle.prototype.getCenterY = function(){
    GeometricFigure.prototype.getCenterY.call(this);
    return this.__centerY;
}

Rectangle.prototype.setDiagonal = function(diagonal){
    if(this.__isNumber(diagonal)){
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

Circle.prototype.__isNumber = Rectangle.prototype.__isNumber;

Circle.prototype.getCenterX = function(){
    GeometricFigure.prototype.getCenterX.call(this);
    return this.__centerX;
}

Circle.prototype.getCenterY = function(){
    GeometricFigure.prototype.getCenterY.call(this);
    return this.__centerY;
}

Circle.prototype.setRadius = function(radius){
    if(this.__isNumber(radius)){
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

var rect = new Rectangle(2, 5, 0);
rect.info();

var circ = new Circle(4, 6, 10);
circ.info()