'use strict';

class Device{
    constructor(name){
        this._name = name;
        this._power = true;
        this._melody = 1;
    }
    static isNumber(number){
        if(typeof number === "number"){
            return true;
        }else{
            return false;
        }
    }
    get name(){
        return this._name
    }
    on(){
        this._power = true;
    }
    off(){
        this._power = false;
    }
    get power(){
        return this._power;
    }
    get melody(){
        return this._melody;
    }
    set melody(number){
        if(Device.isNumber(number) && number >=0 && number <= 10){
            this._melody = number;
        }
    }
}

class Bell extends Device{
    constructor(name){
        super(name);
        this._volume = 5;
    }
    get volume(){
        return this._volume;
    }
    volumeUp(){
        if(this._volume < 20){
            this._volume++;
        }
    }
    volumeDown(){
        if(this._volume > 0){
            this._volume--;
        }
    }
}

class Clock extends Device{
    constructor(name){
        super(name);
        this._hours = 0;
        this._minutes = 0;
    }
    set hours(number){
        if(Device.isNumber(number) && number >=0 && number <= 23){
            this._hours = number;
        }
    }
    set minutes(number){
        if(Device.isNumber(number) && number >=0 && number <= 59){
            this._minutes = number;
        }
    }
    get time(){
        return (this._hours + ":" + this._minutes);
    }
}

class SmartHouse{
    constructor(name){
        this._name = name;
        this._devices = [];
    }
    get name(){
        return this._name;
    }
    addDevice(device){
        this._devices.push(device);
    }
    get devices(){
        return this._devices;
    }
    getDeviceByName(name){
        return this.devices.find(item =>{
            if(item.name == name){
                return item;
            }
        });
    }
    deleteDeviceByName(name){
        this.devices.splice(this.devices.findIndex(item => {
            if(item.name == name){
                return item;
            }
        }), 1);
    }
    offAllDevice(){
        this.devices.forEach(item => item.off());
    }
}

var sh = new SmartHouse("My house");
sh.addDevice(new Bell("Sony"));
sh.addDevice(new Clock("Citizen"));
console.log(sh.devices);
console.log(sh.getDeviceByName("Citizen"));
sh.getDeviceByName("Sony").on();
sh.offAllDevice();
console.log(sh.devices);