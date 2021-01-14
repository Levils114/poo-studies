const { Dog, Bird, Parrot } = require('./inheritance_pillar');

const dog = new Dog('Branco', 30, 'Grandes e caídas');
const bird = new Bird('Amarelo', 10, 'Rachado');
const parrot = new Parrot('Azul', 12, 'Pontudo', true);

parrot.fly();

console.log(dog, bird);