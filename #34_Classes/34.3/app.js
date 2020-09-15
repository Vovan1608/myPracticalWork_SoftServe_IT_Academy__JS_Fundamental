'use strict';

class Square{
    constructor(side){
        this._side = side;
    }
    static isNumber(number){
        if (typeof number === "number" && number > 0) {
            return true;
        }else{
            return false;
        }
    }
    set side (side){
        if(Square.isNumber(side)){
            this._side = side;
        }
    }
    get side (){
        return this._side;
    }
    calcPerimeter(){
        return this._side * 4;
    }
}

class Cube extends Square{

    // Без расширения (полностью переопределить метод родителя)
    // calcPerimeter(){
    //     return this._side * 12;
    // }
    // С расширением (использовать результат метода родителя для дальнейших расчетов).
    calcPerimeter (){
        return super.calcPerimeter() * 3;
    }
}

var c = new Cube(5);
console.log(c.calcPerimeter());