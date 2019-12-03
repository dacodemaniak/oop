import { QuantityProduct } from "./quantity-product";

export class Recette {
    private ingredients: Array<QuantityProduct> = new Array<QuantityProduct>();

    private title: string;

    public constructor(title: string) {
        this.title = title;
    }

    public addProduct(product: QuantityProduct): void {
        this.ingredients.push(product);
    }

    public toString(): string {
        let theRecette: string = 'La recette des ' + this.title + '\n';

        // Loop over ingredients array
        this.ingredients.forEach((value: QuantityProduct) => {
            theRecette += value.toString() + '\n';
            // ASA theRecette = theRecette + value.toString()
        });
        return theRecette;
    }
}