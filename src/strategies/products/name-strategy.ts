import { StrategyInterface } from "./strategy-interface";
import { ProductModel } from "./../../models/product-model";

export class NameStragegy implements StrategyInterface {
    public toString(product: ProductModel): string {
        return product.getName();
    }
}