import { v4 as randomUUID} from "uuid";

class Product {
    private _id: string = randomUUID();
    private _category: string;
    private _name: string;
    private _price: number;
    private _img: string;

    constructor(id: string, category: string, name: string, price: number, img:string){
        this._id = id;
        this._category = category;
        this._name = name;
        this._price = price;
        this._img = img
    }
}
