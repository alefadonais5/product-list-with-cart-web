import data from "../data.json"
import { Cart } from "./entities/cart";
import { Product } from "./entities/product"

for (const product of data) {
    new Product (
        product.name, 
        product.price, 
        product.category, 
        product.image.desktop);
}

const product1 = new Product (
    data[0].name,
    data[0].price,
    data[0].category,
    data[0].image.desktop
);

const product2 = new Product (
    data[1].name,
    data[1].price,
    data[1].category,
    data[1].image.desktop
);

const cart = new Cart();

cart.addToCart(product1);
cart.addToCart(product2);
console.log(cart)
console.log(cart.products);
console.log(cart.products.length);


// toHTML(){
//     const postContainer = document.createElement("div");
//     postContainer.className = "post-container";
//     postContainer.id = this._id;
   
    
    
// }

