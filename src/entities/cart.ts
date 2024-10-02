import { Product } from "./product";

export class Cart {
    private static _products: Product [] = [];
    private static _orderTotal: number = 0;
    private static _quantityTotal: number = 0;

    static calculateTotal(){
        this._orderTotal = 0;
        this._quantityTotal = 0;

        this._products.forEach((item) =>{
            this._orderTotal += item.total
            this._quantityTotal += item.quantity
        });
    }

    static removerProduct(product: Product){
        //remove um produto do carrinho
        this._products = this._products.filter((item) => item.id !== product.id)
        this.calculateTotal();
    }

    static addToCart(product: Product){

        //verifica se o produto existe no carrinho;
        const existingProduct = this._products.includes(product);

        //Se o produto não estiver no carrinho, execute
        if(!existingProduct){
            // Adiciona o produto ao carrinho
            this._products.push(product);
        }
        
        //Atualiza o valor da compra
        this.calculateTotal();

        //Atualiza o carrinho de compra no HTML
        this.toHtml();

    }

  static toHtml(){
    const cartHTML = document.getElementById("cart");

    if(!cartHTML) return;

    const quantityTotalHTML = cartHTML.firstElementChild?.firstElementChild;

    if(!quantityTotalHTML) return;

    quantityTotalHTML.innerHTML = this._quantityTotal.toString();

    const cartListHTML = cartHTML.querySelector("li");

    if(!cartListHTML) return;

    cartListHTML.innerHTML = "";

    for (const product of this._products) {
        
    }
  } 



    static get products(){
        return this._products;
    }

    static get total(){
        return this._orderTotal;
    }
}

