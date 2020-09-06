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


