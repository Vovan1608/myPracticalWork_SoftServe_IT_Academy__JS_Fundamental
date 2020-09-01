'use strict';

function Adder(firstNumber, secondNumber, result){
    if(this.__isNumber(firstNumber)){
        this.__firstNumber = firstNumber;
    }else{
        this.__firstNumber = 0;
    }
    if(this.__isNumber(secondNumber)){
        this.__secondNumber = secondNumber;
    }else{ 
        this.__secondNumber = 0;
    }
    this.result = result;
}

Adder.prototype.__calc = function(){
    this.result = this.__firstNumber + this.__secondNumber;
    return this.result;
}

Adder.prototype.firstNumber = function(firstNumber){
    if(firstNumber === undefined){
        return this.__firstNumber;
    }else if(this.__isNumber(firstNumber)){
        this.__firstNumber = firstNumber;
    }
}

Adder.prototype.__isNumber = function(number){
    if(typeof number === "number"){
        return true;
    }else{
        return false;
    }
}

Adder.prototype.secondNumber = function(secondNumber){
    if(secondNumber === undefined){
        return this.__secondNumber;
    }else if(this.__isNumber(secondNumber)){
        this.__secondNumber = secondNumber;
    }
}

var res = new Adder(5, 10);
console.log(res.__calc()); // 15 = 5 + 10
res.firstNumber(10);
console.log(res.__calc()); // 20 = 10 +10
res.secondNumber(50);
console.log(res.__calc()); // 60 = 10 + 50
res.firstNumber("hju");
console.log(res.__calc()); // 60 - первый параметр не число
res.secondNumber(undefined);
console.log(res.__calc()); // 60 - второй параметр не число 