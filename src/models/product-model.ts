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

    public toString(): string {
        return this.getName() + ' [' + this.baseUnit + ']';
    }
}