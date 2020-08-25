'use strict';

function isEmpty(obj){
    
    for(var key in obj){
        if(obj[key]){
            return false;
        }
    }
    return true;
}

var user = {
    name: "Bib"
}

console.log(isEmpty(user));