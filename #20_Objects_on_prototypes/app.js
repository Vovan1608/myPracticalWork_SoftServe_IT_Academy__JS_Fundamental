'use strict';

function PleerMP3(volume, trek){
    this.volume = volume;
    this.trek = trek;
}
PleerMP3.prototype.volIncrease = function(){
    return ++this.volume;
}
PleerMP3.prototype.volDown = function(){
    return --this.volume;
}
PleerMP3.prototype.forvard = function(){
    return ++this.trek;
}

var sony = new PleerMP3(5, 1);
console.log(sony.volIncrease()); // 6
console.log(sony.volIncrease()); // 7
console.log(sony.volDown());     // 6

var sumsung = new PleerMP3(1, 3);
console.log(sumsung.forvard()); // 4
console.log(sumsung.forvard()); // 5
console.log(sumsung.forvard()); // 6