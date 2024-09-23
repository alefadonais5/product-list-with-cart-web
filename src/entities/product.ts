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

}
