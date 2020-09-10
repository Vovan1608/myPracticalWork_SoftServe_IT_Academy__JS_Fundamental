'use strict';

function Bell(name){
    this._name = name;
    this._power = true;
    this._volume = 5;
    this._melody = 1;
}

Bell.prototype.getName = function(){
    return this._name;
}

Bell.prototype.on = function(){
    this._power = true;
}

Bell.prototype.off = function(){
    this._power = false;
}

Bell.prototype.getPower = function(){
    return this._power;
}

Bell.prototype._isNumber = function(number){
    if(typeof number === "number"){
        return true;
    }else{
        return false;
    }
}

Bell.prototype.getVolume = function(){
    return this._volume;
}

Bell.prototype.volumeUp = function(){
    if(this._volume < 20){
        this._volume++;
    }else{
        this._volume = 0;
    }
}

Bell.prototype.volumeDown = function(){
    if(this._volume > 0 && this._volume <= 20){
        this._volume--;
    }
}

Bell.prototype.getMelody = function(){
    return this._melody;
}

Bell.prototype.setMelody = function(number){
    if(this._isNumber(number) && number >=0 && number <= 10){
        this._melody = number;
    }
}

var myBell = new Bell("MyModel");
console.log(myBell)