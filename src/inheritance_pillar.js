class Animal{
    constructor(color, size){
        this.color = color;
        this.size = size;
    }

    sleep(){
        console.log('Sleep');
    }
}

class Dog extends Animal{
    constructor(color, size, ears){
        super(color, size);
        this.ears = ears;
    }

    run(){
        console.log('Run');
    }

    growl(){
        console.log("Growl");
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

class Parrot extends Bird{
    constructor(color, size, beak, knowSpeak){
        super(color, size, beak);
        this.knowSpeak = knowSpeak;
    }

    speak(){
        console.log('Speak');
    }
}

module.exports = { Dog, Bird, Parrot };