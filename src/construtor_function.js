const Car = function(){
    const maxSpeed = 500;
    let kilometersTraveled = 0;

    this.color = 'Cinza';
    this.model = 'Duster';
    this.speed = 0;

    this.accelerate = function(){
        const speed = this.getSpeed() + 250;

        if(speed > maxSpeed){
            this.setSpeed(maxSpeed);

            return setKilometersTraveled(0.25);
        }

        this.setSpeed(speed);

        setKilometersTraveled(0.25);
    }

    this.getSpeed = function(){
        return this.speed;
    }

    this.setSpeed = function(speed){
        this.speed = speed;
    }

    var setKilometersTraveled = function(value){
        kilometersTraveled += value;
        console.log(kilometersTraveled);
    }
}

module.exports = Car;