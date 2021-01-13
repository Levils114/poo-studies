class Sofa{
    constructor(number_space, reclining, color){
        this.number_space = number_space,
        this.reclining = reclining,
        this.color = color
    }

    recline(){
        if(!!this.reclining){
            console.log('reclined');
        }else{
            console.log('sofa is not reclining')
        }
    }
}

module.exports = Sofa;