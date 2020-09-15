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
    perimeter(){
        this.perimeter = this._side * 4;
        return this.perimeter;
    }
}

class Cube extends Square{

    // Без расширения (полностью переопределить метод родителя)
    // perimeter(){
    //     this.perimeter = this._side * 12;
    //     return this.perimeter;
    // }
    // С расширением (использовать результат метода родителя для дальнейших расчетов).
    perimeter (){
        super.perimeter();
        this.perimeter *= 3;
        return this.perimeter;
    }
}

var c = new Cube(5);
console.log(c.perimeter());