const BikeFactory = function(color, march, rim) {
    return {
        color,
        march,
        rim,
        pedal(){
            console.log('Pedal executed');
        }
    }
}

module.exports = BikeFactory;