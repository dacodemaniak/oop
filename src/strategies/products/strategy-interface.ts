import { ProductModel } from "./../../models/product-model";

export interface StrategyInterface {
    toString(product: ProductModel): string;
}