'use strict';

class Mp3 {
    constructor(volume, trek){
        this.volume = volume;
        this.trek = trek;
    }
    volIncrease() {
        this.volume++;
    }
    volDown(){
        this.volume--;
    }
    forvard(){
        this.trek++;
    }
}