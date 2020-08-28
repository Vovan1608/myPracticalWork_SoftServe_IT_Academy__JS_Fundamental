'use strict';

function PleerMP3(volume, trek){

    this.volume = volume;
    this.trek = trek;
    this.volIncrease = function() {
        return this.volume++;
    };
    this.volDown = function(){
        return this.volume--;
    };
    this.forvard = function(){
        return this.trek++;
    }
}

var sony = new PleerMP3(5, 3);
console.log(sony);
sony.volIncrease();
sony.volIncrease();
sony.volIncrease();
console.log(sony.volIncrease());
