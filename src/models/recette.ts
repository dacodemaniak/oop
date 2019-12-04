import { QuantityProduct } from "./quantity-product";

export class Recette {
    private ingredients: Array<QuantityProduct> = new Array<QuantityProduct>();

    private title: string;

    /**
     * @var number
     * 
     * Total price for the receipe
     */
    private receipePrice: number = 0;

    /**
     * @var number
     * 
     * Price for a unit of the receipe
     */
    private unitPrice: number = 0;

    /**
     * @var number
     * 
     * Production quantity
     */
    private quantity: number = 1;


    public constructor(title: string) {
        this.title = title;
    }

    public addProduct(product: QuantityProduct): void {
        product.setUnitPrice();
    
        this.receipePrice += product.getUnitPrice();

        this.ingredients.push(product);

        this.unitPrice = this.receipePrice / this.quantity;
    }


    public getReceipePrice(): number {
        return this.receipePrice;
    }

    public getUnitPrice(): number {
        return this.unitPrice;
    }
    
    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    public toString(): string {
        let theRecette: string = `La recette des ${this.title}\n`;

        // Loop over ingredients array
        this.ingredients.forEach((value: QuantityProduct) => {
            theRecette += value.toString() + '\n';
            // ASA theRecette = theRecette + value.toString()
        });

        theRecette += `Coût de production pour 1 unité : ${this.unitPrice}`;

        return theRecette;
    }
}