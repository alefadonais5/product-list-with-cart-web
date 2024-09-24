import { v4 as randomUUID} from "uuid";

export class Product {
    private _id: string = randomUUID();
    private _name: string;
    private _price: number;
    private _category: string;
    private _imageUrl: string;
    private _quantity: number = 0;

    constructor(name: string, price: number, category: string, imageUrl:string){
        this._name = name;
        this._price = price;
        this._category = category;
        this._imageUrl = imageUrl
    }

    get id(){
        return this._id;
    }
    get quantity(){
        return this._quantity;
    }

    set quantity(quantity: number){
        this._quantity += quantity;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    toHTML() {
        const postContainer = document.createElement("div");
        postContainer.className = "post-container";
        postContainer.id = this._id;
    
        const postImage = `
        <div class="post-image">
            <img title="${this._name}" src="${this._imageUrl}" alt="${this._name}">
        </div>`;
    
    
        const postInformation = `
        <div class="post-information">
            <span class="category">${this._category}</span>
            <span class="name">${this._name}</span>
            <span class="value">$${this._price}</span>
        </div>`;
    
        const postBottom = `
        <div class="post-bottom">
            <button><img src="assets/images/icon-add-to-cart.svg" alt="add to cart">Add to Cart</button>
        </div>`;
    
        postContainer.innerHTML = postImage + postInformation + postBottom;

        document.body.appendChild(postContainer); // Certifique-se de que o elemento é anexado corretamente ao DOM
    }
    
}

