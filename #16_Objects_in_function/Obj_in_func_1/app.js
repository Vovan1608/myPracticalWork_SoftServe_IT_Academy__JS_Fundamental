'use strict';

function createMP3(volume, trek){
    return {
        volume: volume,
        trek: trek,
        volIncrease: function() {
            return this.volume++;
        },
        volDown: function(){
            return this.volume--;
        },
        forvard: function(){
            return this.trek++;
        }
    }
}