'use strict';

function sumSliceArray(arr, first, second){
    var sum = arr[first - 1] + arr[second - 1];
    
    if(typeof first !== "number" || typeof second !== "number"){
        throw new Error ("Введено не число");
    }else if(first > arr.length || second > arr.length || first <= 0 || second <= 0){
        throw new Error ("Число вне диапазона массива ");
    }else{
        return sum;
    }
}

try{
    var sum = sumSliceArray([2, 4, 5, 7, 10], 11, 5);
    console.log(sum);
}catch (error){
    console.log(error.message);
}