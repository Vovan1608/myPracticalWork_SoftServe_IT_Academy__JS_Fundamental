'use strict';

function Pleer(soundVolume){
    if(this.__soundVolumeValid(soundVolume)){
        this.__soundVolume = soundVolume;
    }
}
Pleer.prototype.__soundVolumeValid = function(soundVolume){
    if(soundVolume >= 0 && soundVolume < 100){
        return true;
    } else{
        return false;
    }
}

Pleer.prototype.getSoundVolume = function(){
    return this.__soundVolume;
}
Pleer.prototype.setSoundVolume = function(soundVolume){
    if(this.__soundVolumeValid(soundVolume)){
        return this.__soundVolume = soundVolume;
    }
}


var sony = new Pleer(50);
console.log(sony.setSoundVolume(36)); // 36
console.log(sony.getSoundVolume()); // 36
console.log(sony.setSoundVolume(126)); // undefined
console.log(sony.getSoundVolume()); // 36 - осталось старое значение, т.к. 126 вне диапазона

// uniform method
Pleer.prototype.soundVolume = function(soundVolume){
    if(soundVolume === undefined){
        return this.__soundVolume;
    }else if(this.__soundVolumeValid(soundVolume)){
        return this.__soundVolume = soundVolume;
    }
}

var sony1 = new Pleer(23);
console.log(sony1.soundVolume()); // 23
console.log(sony1.soundVolume(25)); // 25
console.log(sony1.soundVolume()); // 25
console.log(sony1.soundVolume(125)); // undefined
console.log(sony1.soundVolume()); // 25 