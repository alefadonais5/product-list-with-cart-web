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

    static toHtml() {
        const cartListHTML = document.getElementById("cart-list");
        const cartTotalItemsHTML = document.getElementById("cart-total-items");
        const cartTotalPriceHTML = document.getElementById("cart-total-price");
    
        if (!cartListHTML || !cartTotalItemsHTML || !cartTotalPriceHTML) return;
    
        cartListHTML.innerHTML = "";
        let totalItems = 0;
    
        for (const product of this._products) {
            const liHTML = document.createElement("li");
            liHTML.innerHTML = `
                <span>${product.name}</span>
                <div>
                    <span>${product.quantity}x</span>
                    <span>@$${product.price.toFixed(2)}</span>
                    <span>$${product.total.toFixed(2)}</span>
                </div>
            `;
    
            cartListHTML.appendChild(liHTML);
            totalItems += product.quantity;
        }
    
        cartTotalItemsHTML.textContent = totalItems.toString();
        cartTotalPriceHTML.textContent = `$${this._orderTotal.toFixed(2)}`;
    }



    static get products(){
        return this._products;
    }

    static get total(){
        return this._orderTotal;
    }
}

