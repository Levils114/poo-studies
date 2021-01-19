class Product{
    constructor(description, price){
        this.description = description;
        this.price = price;
    }

    seeDescription(){
        console.log(`${this.description} - R$ ${parseFloat(this.price).toFixed(2)}`);
    }
}

module.exports = Product