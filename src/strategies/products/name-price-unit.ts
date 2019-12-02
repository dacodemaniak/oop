import { StrategyInterface } from "./strategy-interface";
import { ProductModel } from "../../models/product-model";

export class NamePriceUnitStrategy implements StrategyInterface {

    public toString(product: ProductModel): string {
        return product.getName() + ' [par ' + product.getBaseUnit() + '] ' + product.getPrice() + '€';
    }
}