'use strict';

function Square(side){
    if(this.__isNumber(side)){
        this._side = side;
    }else{
        this._side = 1;
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
        this._side = side;
    }
}

Square.prototype.getSide = function(){
    return this._side;
}

Square.prototype.getPerimeter = function(){
    return this._side * 4;
}

function Cube(side){
    Square.call(this, side);
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;

// Без расширения (полностью переопределить метод родителя)
// Cube.prototype.getPerimeter = function(){
//     return this._side * 12;
// }
// var c = new Cube(5);
// console.log(c.getPerimeter());


// С расширением (использовать результат метода родителя для дальнейших расчетов).

Cube.prototype.getPerimeter = function(){
    return Square.prototype.getPerimeter.call(this) * 3;
}

var c2 = new Cube(10);
console.log(c2.getPerimeter());