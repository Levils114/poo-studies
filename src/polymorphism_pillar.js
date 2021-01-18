class Animal{
    constructor(color, size){
        this.color = color;
        this.size = size;
    }

    sleep(){
        console.log('Sleep');
    }
}

class Bird extends Animal{
    constructor(color, size, beak){
        super(color, size);
        this.beak = beak
    }

    fly(){
        console.log('Fly');
    }
}

class Ostrich extends Bird{
    constructor(color, size, beak){
        super(color, size, beak);
    }

    buryHead(){
        console.log("Bury Head");
    }

    fly(){
        console.log('An ostrich dont fly');
    }
}

class Parrot extends Bird{
    constructor(color, size, beak, knowSpeak){
        super(color, size, beak);
        this.knowSpeak = knowSpeak;
    }

    speak(){
        console.log('Speak');
    }
}

module.exports = { Bird, Ostrich, Parrot };