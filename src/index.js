const {userES5, userES6} = require('./object_literal');

console.log(userES5);
userES5.showUser();

userES6.username = 'José';
userES6.height = 1.79;
userES6.sayHi = () => console.log('Hi!');

console.log(userES6);
userES6.showUser();
userES6.sayHi();