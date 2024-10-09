import { v4 as randomUUID} from "uuid";
import { Cart } from "./cart";

export class Product {
    private _id: string = randomUUID();
    private _name: string;
    private _price: number;
    private _category: string;
    private _imageUrl: string;
    private _quantity: number = 0;
    private _total: number = 0;

    constructor(name: string, price: number, category: string, imageUrl:string){
        this._name = name;
        this._price = price;
        this._category = category;
        this._imageUrl = imageUrl
    }
    toHTML() {
      const productListHTML = document.getElementById("product-list");
  
      if (!productListHTML) return;
  
      const productHTML = document.createElement("li");
      productHTML.id = this._id;
  
      productHTML.innerHTML = `
          <div class="product-card">
              <img src="${this._imageUrl}" alt="${this._name}" class="product-image"/>
              <div class="product-details">
                  <span class="product-category">${this._category}</span>
                  <h3 class="product-name">${this._name}</h3>
                  <span class="product-price">$${this._price.toFixed(2)}</span>
                  <button class="button-add-to-cart">Add to Cart</button>
              </div>
          </div>
      `;
  
      productHTML.querySelector(".button-add-to-cart")?.addEventListener("click", () => {
          this.incrementQuantity();
          Cart.addToCart(this);
      });
  
      productListHTML.appendChild(productHTML);
  }

    updateTotal(){
        this._total = this._price * this._quantity;
    }

    incrementQuantity(){
        this._quantity += 1;
        this.updateTotal();

        Cart.addToCart(this);
    }

    decrementQuantity(){
        this._quantity -= 1;
        this.updateTotal();
        
    }


    get total(){
        return this._total
    }


    get id(){
        return this._id;
    }
    get quantity(){
        return this._quantity;
    }

    set quantity(quantity: number){
        this._quantity = quantity; //this._quantity += quantity;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }
    
}

