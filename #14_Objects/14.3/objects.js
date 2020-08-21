'use strict';

var mp3 = {
    currentChannel: 1,
    nextChannel: function (){
        return tv.currentChannel++;
    },
    previousChannel: function(){
        return tv.currentChannel--;
    },
    setChannel: function (number){
        return tv.currentChannel = number;
    }
}