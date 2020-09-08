'use strict';

function sumSliceArray(arr, first, second){
    var sum = arr[first - 1] + arr[second - 1];
    
    if(typeof first !== "number" || typeof second !== "number"){
        throw new Error ("Введено не число");
    }else if(first > arr.length || second > arr.length || first <= 0 || second <= 0){
        throw new Error ("Число вне диапазона массива");
    }else{
        return sum;
    }
}

function check(sumSliceArray){
    if(
        typeof first === "number" &&
        typeof second === "number" &&
        first <= arr.length &&
        second <= arr.length &&
        first > 0 && second > 0
    ){
        return ;
    }
}

var sum = check(sumSliceArray([2, 4, 5, 7, 10], 1, 5));
console.log(sum);