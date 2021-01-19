const Product = require('./object_literal');

const product = new Product('Santos 20/21 T-Shirt', 200);

const productLiteral = {
    description: 'Santos 19/20 T-Shirt',
    price: 180,
    seeDescription: function() {
        console.log(`${this.description} - R$ ${parseFloat(this.price).toFixed(2)}`);
    }
}

product.seeDescription();
productLiteral.seeDescription();