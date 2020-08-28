'use strict';

var mp3 = {
    volume: 1,
    trek: 1,
    volIncrease: function() {
        mp3.volume++;
    },
    volDown: function(){
        mp3.volume--;
    },
    forvard: function(){
        mp3.trek++;
    },
}
var volUp = mp3.volIncrease;
var volD = mp3.volDown;
volUp();
volUp();
volUp();
volUp();
volD();
console.log(mp3.volume)