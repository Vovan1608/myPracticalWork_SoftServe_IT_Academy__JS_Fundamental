'use strict';

function sumSliceArray(arr, first, second){
    
    if(typeof first !== "number" || typeof second !== "number"){
        throw new Error ("Введено не число");
    }else if(first > arr.length || second > arr.length || first <= 0 || second <= 0){
        throw new Error ("Число вне диапазона массива");
    }else{
        return arr[first - 1] + arr[second - 1];
    }
}

var arr = [2, 4, 5, 7, 10];
var first = 2;
var second = 5;
if(
    typeof first !== "number" ||
    typeof second !== "number" ||
    first > arr.length ||
    second > arr.length ||
    first <= 0 || second <= 0
){
    first = 1;
    second = arr.length;
}

var sum = sumSliceArray(arr, first, second);
console.log(sum);