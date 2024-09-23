import { Product } from "./product";

export class Cart {
    private _products: Product [] = [];
    private _total: number = 0;


    addToCart(product: Product){
        this._total += product.price; //Atualiza o valor da compra
        this._products.push(product); // adiciona o produto ao carrinho
    }

    get products(){
        return this._products;
    }

    get total(){
        return this._total;
    }
}

