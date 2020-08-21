'use strict';

var car = {};
car.model = "BMW";
car.speed = 286;
car.run = function (){
    console.log(car.model + " едет " + car.speed + " км/час.");
}
car.stop = function (){
    console.log(car.model + " остановилась.");
}

var car1 = {};
car1["model"] = "ZAZ";
car1["speed"] = 84;
car1["run"] = function (){
    console.log(car1["model"] + " едет " + car1["speed"] + " км/час.");
}
car1["stop"] = function (){
    console.log(car1["model"] + " остановилась.");
}

var car2 = {
    model: "Nissan",
    speed: 145,
    run: function (){
        console.log(car2.model + " едет " + car2.speed + " км/час.");
    },
    stop: function (){
        console.log(car2.model + " остановилась.")
    }
}