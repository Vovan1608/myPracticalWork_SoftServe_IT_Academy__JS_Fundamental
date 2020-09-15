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
    }
}

Bell.prototype.volumeDown = function(){
    if(this._volume > 0){
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

function Clock(name){
    this._name = name;
    this._power = true;
    this._hours = 0;
    this._minutes = 0;
    this._melody = 1;
}

Clock.prototype.getName = function(){
    return this._name;
}

Clock.prototype.on = function(){
    this._power = true;
}

Clock.prototype.off = function(){
    this._power = false;
}

Clock.prototype.getPower = function(){
    return this._power;
}

Clock.prototype._isNumber = function(number){
    if(typeof number === "number"){
        return true;
    }else{
        return false;
    }
}

Clock.prototype.setHours = function (number){
    if(this._isNumber(number) && number >=0 && number <= 23){
        this._hours = number;
    }
}

Clock.prototype.setMinutes = function (number){
    if(this._isNumber(number) && number >=0 && number <= 59){
        this._minutes = number;
    }
}

Clock.prototype.getTime = function (){
    return (this._hours + ":" + this._minutes);
}

Clock.prototype.getMelody = function(){
    return this._melody;
}

Clock.prototype.setMelody = function(number){
    if(this._isNumber(number) && number >=0 && number <= 10){
        this._melody = number;
    }
}