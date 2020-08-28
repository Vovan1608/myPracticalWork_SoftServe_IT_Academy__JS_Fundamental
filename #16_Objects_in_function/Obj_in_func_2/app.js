'use strict';

function getMaxSalarie(salaries){
    var array = [];
    for(var key in salaries){
        array.push(salaries[key]);
    }
    var maxSalarie = array[0];
    for(var i = 1; i < array.length; i++){
        if(maxSalarie < array[i]){
            maxSalarie = array[i]
        }
    }
    return maxSalarie;
}

var salaries = {
    John: 100,
    Bill: 300,
    Mike: 250
};

var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};

var max = getMaxSalarie(salaries);
console.log(max); // 600

