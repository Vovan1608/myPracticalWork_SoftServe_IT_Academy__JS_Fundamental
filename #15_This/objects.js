'use strict';

var calculator = {

    firstNum: 5,
    secondNum: 9,

    read: function(){
        this.firstNum = Number(prompt("Введите первое число", "3"));
        this.secondNum = Number(prompt("Введите второе число", "5"));
    },

    sum: function(){
        return this.firstNum + this.secondNum;
    },

    mul: function(){
        return this.firstNum * this.secondNum;
    },
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());