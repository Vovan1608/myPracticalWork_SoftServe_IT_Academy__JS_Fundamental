'use strict';

function getMaxSalarie(salaries){
    var maxSalarie = 0;
    for(var key in salaries){
        if(maxSalarie < salaries[key]){
            maxSalarie = salaries[key];
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

