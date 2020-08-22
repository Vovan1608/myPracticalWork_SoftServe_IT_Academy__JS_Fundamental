'use strict';

function isEmpty(obj){
    var count = 0;
    for (var key in obj){
        count++;
    }
    if(count === 0){
        return true;
    }else{
        return false;
    }
}

var user = {
    name: "Bib"
}

console.log(isEmpty(user));