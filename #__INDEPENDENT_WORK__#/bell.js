'use strict';

function Bell(name){
    this._name = name;
    this._power = false;
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
    ++this._volume;
}

Bell.prototype.volumeDown = function(){
    --this._volume;
}



