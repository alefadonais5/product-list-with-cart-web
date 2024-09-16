import { v4 as randomUUID} from "uuid";

class Product {
    private _id: string = randomUUID();
    private _category: string;
    private _name: string;
    private _value: number;
    private _img: string;

    constructor(id: string, category: string, name: string, value: number, img:string){
        this._id = id;
        this._category = category;
        this._name = name;
        this._value = value;
        this._img = img
    }
}

const produto1 = new Produc(category, name);
}