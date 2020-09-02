'use strict';

function Adder(firstNumber, secondNumber){
    // 1. Приватное свойство __firstNumber;
    if(this.__isNumber(firstNumber)){
        this.__firstNumber = firstNumber;
    }else{
        this.__firstNumber = 0;
    }

    // 2. Приватное свойство __secondNumber;
    if(this.__isNumber(secondNumber)){
        this.__secondNumber = secondNumber;
    }else{ 
        this.__secondNumber = 0;
    }

    // 3. Публичное свойство result;
    this.result = 0;
}


Adder.prototype.sum = function(){
    return this.result;
}
// 4. Приватный метод __calc(), который записывает в result сумму свойств __firstNumber и __secondNumber;
Adder.prototype.__calc = function(){
    this.result = this.__firstNumber + this.__secondNumber;
}

// 5. методы геттер-сеттер для свойств __firstNumber и __secondNumber
Adder.prototype.firstNumber = function(firstNumber){
    if(firstNumber === undefined){
        return this.__firstNumber;
    }else {
        if(this.__isNumber(firstNumber)){
            this.__firstNumber = firstNumber;
        }
    }
}

Adder.prototype.secondNumber = function(secondNumber){
    if(secondNumber === undefined){
        return this.__secondNumber;
    }else {
        if(this.__isNumber(secondNumber)){
            this.__secondNumber = secondNumber;
        }
    }
}

// валидация
Adder.prototype.__isNumber = function(number){
    if(typeof number === "number"){
        return true;
    }else{
        return false;
    }
}

var res = new Adder(5, 10);

console.log(res.sum()); // 0 возвращает значение из 19 строки
