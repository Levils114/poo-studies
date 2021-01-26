Object.prototype.atribbute4 = 'd';

const animal = {
    atribbute1: 'a'
}

const bird = {
    __proto__: animal,
    atribbute2: 'b'
}

const parrot = {
    __proto__: bird,
    atribbute3: 'c'
}

module.exports = { animal, bird, parrot };