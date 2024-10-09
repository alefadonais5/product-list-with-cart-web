import data from "../data.json"
import { Cart } from "./entities/cart";
import { Product } from "./entities/product"


const cart = new Cart();

for (const product of data) {

    new Product (
        product.name, 
        product.price, 
        product.category, 
        product.image.desktop
    ).toHTML();
}




