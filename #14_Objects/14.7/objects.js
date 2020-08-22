﻿'use strict';

var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};

function countAverage(object){
    var countSalary = 0;
    var countEmployee = 0;
    for(var key in object){
        countSalary +=object[key];
        countEmployee++;
    }
    return countSalary / countEmployee;
}

console.log(countAverage(salaries));
