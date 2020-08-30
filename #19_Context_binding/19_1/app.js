'use strict';

var user = {
    name: "Tom"
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}


// Function
var tomFormat = function(a, b){
    format.call(user, a, b);
}
tomFormat("<<<", ">>>"); //"<<<Tom>>>"


// bind()
// var tomFormat = format.bind(user);
// tomFormat ("<<<", ">>>"); // "<<<Tom>>>"
