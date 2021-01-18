const { Ostrich, Parrot } = require('./polymorphism_pillar');

const parrot = new Parrot('Azul', 12, 'Pontudo', true);
const ostrich = new Ostrich('Branco', 2, 'Grande');

parrot.fly();

ostrich.buryHead();
ostrich.fly();