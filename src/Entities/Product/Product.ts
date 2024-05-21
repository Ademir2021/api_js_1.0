import { IProduct, IBrand, ISector } from "../../Interfaces/Product/Product";
import { ProductDAO } from "./ProductDAO";

class Product extends ProductDAO implements IProduct {
    valMax = 0
    valMin = 0
    fkBrand = new Brand().id
    fkSector = new Sector().id
    barCode = ""
    image = ""
    constructor(id:number, name:string, valMax:number, valMin:number, fkBrand:number, fkSector:number, barCode:string, image:string  ) {
        super()
        this.id = id // id_product
        this.name = name // descric_product
        this.valMax = valMax
        this.valMin = valMin
        this.fkBrand = fkBrand
        this.fkSector = fkSector
        this.barCode = barCode
        this.image = image
    }
}

class Brand extends ProductDAO implements IBrand {
    constructor() {
        super()
    }
    getId() {
        return this.id
    }
    setId(id: number) {
        this.id = id
    }
};

class Sector extends ProductDAO implements ISector {
    constructor() {
        super()
    }
    getId() {
        return this.id
    }
    setId(id: number) {
        this.id = id
    }
}

export { Product }