import { StrategyInterface } from "./../strategies/products/strategy-interface";
import { NameStragegy } from "./../strategies/products/name-strategy";

/**
 * @name ProductModel
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @version 1.0.0
 * @package models
 */
export abstract class ProductModel {
    /**
     * @var string
     * 
     * Name of the product (i.e : Lait, Farine, Oeuf, ...)
     */
    protected name: string;

    /**
     * @var string
     * 
     * Base unit for the quantities of a product (i.e : l, kg, unity, ...)
     */
    protected baseUnit: string;

    /**
     * @var number
     * 
     * Quantity for baseUnit
     */
    protected quantityUnit: number;

    /**
     * @var number
     * 
     * Price of a product
     */
    protected price: number;

    /**
     * @var StrategyInterface
     * @see strategies\products\StrategyInterface
     * 
     * Strategy to use to print product
     * 
     */
    private strategy: StrategyInterface = new NameStragegy();

    /**
     * 
     * @param strategy StrategyInterface
     * 
     */
    public setStrategy(strategy: StrategyInterface): void {
        this.strategy = strategy;
    }

    public setName(name: string): void {
        if (this.name == null) {
            this.name = name;
        }
    }

    public getName(): string {
        return this.name.toUpperCase();
    }

    public setBaseUnit(baseUnit: string): void {
        this.baseUnit = baseUnit;
    }

    public getBaseUnit(): string {
        return this.baseUnit;
    }

    public setQuantityUnit(quantity: number): void {
        this.quantityUnit = quantity;
    }
    
    
    public setPrice(price: number): void {
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }

    public toString(): string {
        return this.strategy.toString(this);
    }
}