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
        if(this._isNumber(number) && number >=0 && number <= 10){
            this._melody = number;
        }
    }
}

class Bell extends Device{
    constructor()
}