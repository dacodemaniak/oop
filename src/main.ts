import { ProductModel } from "./models/product-model";

/**
 * @name Main
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @package /
 * @version 1.0.0
 * Entry point of the application
 */

 let produit1: ProductModel = new ProductModel();
produit1.setName('Farine');
produit1.setBaseUnit('kg');

let produit2: ProductModel = new ProductModel();
produit2.setName('Lait');
produit2.setBaseUnit('l');

console.log('Pour faire des crèpes, j\'ai besoin de : \n');
console.log(produit1.toString());
console.log(produit2.toString());

console.log('Produit 1 : ' + produit1.getName());