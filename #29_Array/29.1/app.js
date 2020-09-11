'use strict';

let musicStyle = ["Джаз", "Блюз"];
console.log(musicStyle);

musicStyle.push("Рок-н-Ролл");
console.log(musicStyle);

musicStyle.splice(musicStyle.length - 2, 1, "Классика");
console.log(musicStyle);

musicStyle.splice(0, 1);
console.log(musicStyle);

musicStyle.unshift("Рэп", "Регги");
console.log(musicStyle);