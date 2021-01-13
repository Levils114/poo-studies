const TV = require('./encapsulation_pillar');

const tv = new TV([2, 5, 7, 10], 5, 80);

tv.active_channel = 7;

console.log(tv.active_channel);