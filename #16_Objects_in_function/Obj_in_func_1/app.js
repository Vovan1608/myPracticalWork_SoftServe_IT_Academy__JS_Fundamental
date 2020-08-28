'use strict';

function createMP3(volume, trek){
    return {
        volume: volume,
        trek: trek,
        volIncrease: function() {
            this.volume++;
        },
        volDown: function(){
            this.volume--;
        },
        forvard: function(){
            this.trek++;
        }
    }
}