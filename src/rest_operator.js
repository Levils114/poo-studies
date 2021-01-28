function Sum(...params){
    const sumParams = params.reduce((a,b) => a + b);

    console.log(sumParams);
}

function Mult(valorToMult, ...rest){
    const multNumbers = rest.map(value => (value * valorToMult));

    const sumMultNumbers = multNumbers.reduce((a,b) => a + b);

    console.log(sumMultNumbers);
}

module.exports = {Sum, Mult};