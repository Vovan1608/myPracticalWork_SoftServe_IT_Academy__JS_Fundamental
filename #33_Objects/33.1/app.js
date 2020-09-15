'use strict';

let tv = {
    currentChannel: 1,
    nextChannel() {
        this.currentChannel++;
    },
    previousChannel() {
        this.currentChannel--;
    },
    setChannel(number){
        this.currentChannel = number;
    }
}