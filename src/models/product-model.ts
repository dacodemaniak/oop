import { StrategyInterface } from "src/strategies/products/strategy-interface";
import { StrategyInterface } from "src/strategies/products/strategy-interface";

/**
 * @name ProductModel
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @version 1.0.0
 * @package models
 */
export class ProductModel {
    /**
     * @var string
     * 
     * Name of the product (i.e : Lait, Farine, Oeuf, ...)
     */
    private name: string;

    /**
     * @var string
     * 
     * Base unit for the quantities of a product (i.e : l, kg, unity, ...)
     */
    private baseUnit: string;

    /**
     * @var number
     * 
     * Price of a product
     */
    private price: number;

    private strategy: StrategyInterface;

    public constructor(strategy: StrategyInterface) {
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