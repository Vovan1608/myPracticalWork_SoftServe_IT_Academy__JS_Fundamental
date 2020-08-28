'use strict';

var mp3 = {
    volume: 1,
    trek: 1,
    volIncrease: function() {
        return volume++;
    },
    volDown: function(){
        return volume--;
    },
    forvard: function(){
        return trek++;
    },
}