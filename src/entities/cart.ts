import { Product } from "./product";

export class Cart {
    private _products: Product [] = [];
    private _total: number = 0;


    addToCart(product: Product){

        const existingProduct = this._products.find(item => item.name === product.name); //comparação deveria ser pelo o ID, mas ele muda aleatóriamente

        if(existingProduct){
            
            existingProduct.quantity = product.quantity + 1
        }else{
            this._products.push(product); // adiciona o produto ao carrinho
            product.quantity = 1;
        }
        this._total += product.price; //Atualiza o valor da compra
        
    }

    get products(){
        return this._products;
    }

    get total(){
        return this._total;
    }
}

