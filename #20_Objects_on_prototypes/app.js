'use strict';

function PleerMP3(volume, trek){
    this.volume = volume;
    this.trek = trek;
}
PleerMP3.prototype.volIncrease = function(){
    ++this.volume;
}
PleerMP3.prototype.volDown = function(){
    --this.volume;
}
PleerMP3.prototype.forvard = function(){
    ++this.trek;
}
PleerMP3.prototype.installVolInc = function(){
    return this.volume;
}
PleerMP3.prototype.installVolD = function(){
    return this.volume;
}
PleerMP3.prototype.installTrek = function(){
    return this.trek;
}

var sony = new PleerMP3(5, 1);
sony.volIncrease();
sony.volIncrease();
sony.volDown();
console.log(sony.installVolInc()); // 6
sony.forvard();
console.log(sony.installTrek()); // 2
