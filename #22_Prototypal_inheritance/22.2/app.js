'use strict';

function Square(side){
    if(this.__isNumber(side)){
        this.__side = side;
    }else{
        this.__side = 1;
    }
}

Square.prototype.__isNumber = function(number){
    if (typeof number === "number" && number > 0) {
        return true;
    }else{
        return false;
    }
}

Square.prototype.setSide = function(side){
    if(this.__isNumber(side)){
        this.__side = side;
    }
}

Square.prototype.getSide = function(){
    return this.__side;
}

Square.prototype.calcPerimeter = function(){
    this.perimeter = this.__side * 4;
}

Square.prototype.getPerimeter = function(){
    this.calcPerimeter();
    return this.perimeter;
}

function Cube(side){
    Square.call(this, side);
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

// Без расширения (полностью переопределить метод родителя)
// Cube.prototype.calcPerimeter = function(){
//     this.perimeter = this.__side * 12;
// }
// var c = new Cube(5);
// console.log(c.getPerimeter());


// С расширением (использовать результат метода родителя для дальнейших расчетов).

Cube.prototype.calcPerimeterCube = function(){
    this.calcPerimeter();
    this.perimeter *= 3;
}

Cube.prototype.getPerimeterCube = function(){
    this.calcPerimeterCube();
    return this.perimeter;
}
var c2 = new Cube(10);
console.log(c2.getPerimeterCube());