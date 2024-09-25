import { Product } from "./product";

export class Cart {
    private static _products: Product [] = [];
    private static _total: number = 0;


    // static addToCart(product: Product){

    //     const existingProduct = Cart._products.find(item => item.name === product.name); //comparação deveria ser pelo o ID, mas ele muda aleatóriamente

    //     if(existingProduct){
            
    //         existingProduct.quantity = product.quantity + 1
    //     }else{
    //         Cart._products.push(product); // adiciona o produto ao carrinho
    //         product.quantity = 1;
    //     }
    //     Cart._total += product.price; //Atualiza o valor da compra
        
    // }

    static addToCart(product: Product){
        //Atualiza o valor da compra
        this._total += product.total

        // Adiciona o produto ao carrinho
        this._products.push(product);
       
        
        //const existingProduct = this._products.findIndex(item => item.name === product.name);
        //verifica se o produto existe no carrinho;
        // Se caso existir, sobrescrever o valor
    }

    static get products(){
        return this._products;
    }

    static get total(){
        return this._total;
    }
}

