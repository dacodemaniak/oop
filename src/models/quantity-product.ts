import { ProductModel } from "./product-model";
import { ConvertHelper } from "./../helpers/convert-helper";

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

    /**
     * @var number 
     * 
     * Pricing of the product for a receipe
     */
    private unitPrice: number = 0;

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setUnit(unit: string): void {
        this.unit = unit;
    }

    public getUnit(): string {
        return this.unit;
    }
    
    public setUnitPrice(): void {
        const convertedQuantity: number = ConvertHelper.convert(this.baseUnit,this.unit,this.quantity);
        
        if (this.quantityUnit != null) {
            this.unitPrice = (this.price / this.quantityUnit) * convertedQuantity;
        } else {
            this.unitPrice = (this.price * convertedQuantity);
        }
    }

    public getUnitPrice(): number {
        return this.unitPrice;
    }
}