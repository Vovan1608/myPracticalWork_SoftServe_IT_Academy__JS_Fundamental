'use strict';

var user = {
    name: "Tom"
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}


// Function
user.func = format;
var tomFormat = function(){
    user.func.call(user, "<<<", ">>>");
};
tomFormat("<<<", ">>>");


// bind()
// var tomFormat = format.bind(user);
// tomFormat ("<<<", ">>>"); // "<<<Tom>>>"
