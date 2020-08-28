'use strict';

function PleerMP3(volume, trek){

    this.volume = volume;
    this.trek = trek;
    this.volIncrease = function() {
        this.volume++;
    };
    this.volDown = function(){
        this.volume--;
    };
    this.forvard = function(){
        this.trek++;
    }
}

var sony = new PleerMP3(5, 3);
console.log(sony);
