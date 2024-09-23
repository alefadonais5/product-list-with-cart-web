import data from "../data.json"
import { Cart } from "./entities/cart";
import { Product } from "./entities/product"


const cart = new Cart();

for (const product of data) {

    const newProduct = new Product (
        product.name, 
        product.price, 
        product.category, 
        product.image.desktop);
    
    newProduct.toHTML();
}


// const product1 = new Product (
//     data[0].name,
//     data[0].price,
//     data[0].category,
//     data[0].image.desktop
// );

// const product2 = new Product (
//     data[1].name,
//     data[1].price,
//     data[1].category,
//     data[1].image.desktop
// );

// const cart = new Cart();

// cart.addToCart(product1);
// cart.addToCart(product2);
// console.log(cart)
// console.log(cart.products);
// console.log(cart.products.length);



