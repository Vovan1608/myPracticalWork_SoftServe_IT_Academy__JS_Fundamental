'use strict';

var mp3 = {
    model: "Onda",
    price: 1182,
    memory: 64,
    workingTime: 20,
    slot: "MicroSD",
    display: "Mono",
    volume: 1,
    volIncrease: function() {
        return volume++;
    },
    volDown: function(){
        return volume--;
    },
    trek: 1,
    forvard: function(){
        return trek++;
    },
}

console.log(mp3);