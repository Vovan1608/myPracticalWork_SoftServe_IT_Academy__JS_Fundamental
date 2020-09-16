'use strict';

function Device(name){
    this._name = name;
    this._power = true;
    this._melody = 1;
}

Device.prototype._isNumber = function(number){
    if(typeof number === "number"){
        return true;
    }else{
        return false;
    }
}

Device.prototype.getName = function(){
    return this._name;
}

Device.prototype.on = function(){
    this._power = true;
}

Device.prototype.off = function(){
    this._power = false;
}

Device.prototype.getPower = function(){
    return this._power;
}

Device.prototype.getMelody = function(){
    return this._melody;
}

Device.prototype.setMelody = function(number){
    if(this._isNumber(number) && number >=0 && number <= 10){
        this._melody = number;
    }
}

function Bell(name){
    Device.call(this, name);
    this._volume = 5;
}

Bell.prototype = Object.create(Device.prototype);
Bell.prototype.constructor = Bell;

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

function Clock(name){
    Device.call(this, name);
    this._hours = 0;
    this._minutes = 0;
}

Clock.prototype = Object.create(Device.prototype);
Clock.prototype.constructor = Clock;

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

function SmartHouse(name){
    this._name = name;
    this._devices = [];
}

SmartHouse.prototype.getName = function(){
    return this._name;
}

SmartHouse.prototype.addDevice = function(device){
    this._devices.push(device);
}

SmartHouse.prototype.getDevices = function(){
    return this._devices;
}

SmartHouse.prototype.getDeviceByName = function(name){
    return this._devices.find(function(item){
        if(item._name == name){
            return item;
        }
    });
}

SmartHouse.prototype.deleteDeviceByName = function(name){
    this._devices.splice(this._devices.findIndex(function(item){
        if(item._name == name){
            return item;
        }
    }), 1);
}

SmartHouse.prototype.offAllDevice = function(){
    this._devices.forEach(function(item){
        this._power = false;
        return item;
    });
}



var sh = new SmartHouse("My house");
sh.addDevice(new Bell("Sony"));
sh.addDevice(new Clock("Citizen"));
console.log(sh.getDevices());
console.log(sh.getDeviceByName("Citizen"));
sh.getDeviceByName("Sony").on();
sh.offAllDevice();
console.log(sh.getDevices());