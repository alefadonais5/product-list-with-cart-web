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

const banana = new Product("Banana", 10, "Fruta", "htpp:image5.com")
const uva = new Product("Uva", 5, "Fruta", "htpp:image5.com")

banana.incrementQuantity();
banana.incrementQuantity();
banana.incrementQuantity();
uva.incrementQuantity();
uva.incrementQuantity();

console.log(Cart);
Cart.removerProduct(banana);
console.log(Cart);





// const product2 = new Product (
//     data[1].name,
//     data[1].price,
//     data[1].category,
//     data[1].image.desktop
// );

// const product4 = new Product (
//     data[4].name,
//     data[4].price,
//     data[4].category,
//     data[4].image.desktop
// );
// const product3 = new Product (
//     data[3].name,
//     data[3].price,
//     data[3].category,
//     data[3].image.desktop
// );
// const product5 = new Product (
//     data[1].name,
//     data[1].price,
//     data[1].category,
//     data[1].image.desktop
// );


// cart.addToCart(product1);
// cart.addToCart(product2);
// cart.addToCart(product3);
// cart.addToCart(product4);
// cart.addToCart(product5);
// console.log(cart)
// console.log(cart.products);
// console.log(cart.products.length);



