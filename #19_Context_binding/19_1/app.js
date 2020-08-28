'use strict';

var user = {
    name: "Tom"
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}


// Function
var tomFormat = function(){
    format.call(user, "<<<", ">>>");
}
tomFormat();


// bind()
// var tomFormat = format.bind(user);
// tomFormat ("<<<", ">>>"); // "<<<Tom>>>"
