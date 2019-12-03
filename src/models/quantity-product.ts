import { ProductModel } from "./product-model";

/**
 * @name QuantityProduct
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @package models
 * @version 1.0.0
 * 
 * Specify quantities and unit of a product for a receipe
 */
export class QuantityProduct extends ProductModel {
    /**
     * @var number
     * 
     * Required quantity of the product for the receipe
     */
    private quantity: number;

    /**
     * @var string
     * 
     * Unit for the quantity
     */
    private unit: string;

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public setUnit(unit: string): void {
        this.unit = unit;
    }
}