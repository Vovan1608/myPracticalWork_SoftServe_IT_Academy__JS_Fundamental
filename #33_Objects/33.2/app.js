'use strict';

let mp3 = {
    volume: 1,
    trek: 1,
    volIncrease() {
        this.volume++;
    },
    volDown(){
        this.volume--;
    },
    forvard(){
        this.trek++;
    },
}