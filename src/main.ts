import { ProductModel } from "./models/product-model";
import { StrategyInterface } from "./strategies/products/strategy-interface";
import { NameStragegy } from "./strategies/products/name-strategy";
import { NamePriceStragegy } from "./strategies/products/name-price-strategy";
import { NamePriceUnitStrategy } from "./strategies/products/name-price-unit";
import { Recette } from "./models/recette";
/**
 * @name Main
 * @author Aélion - Déc. 2019 - jla.webprojet@gmail.com
 * @package /
 * @version 1.0.0
 * Entry point of the application
 */

 const strategy: StrategyInterface = new NameStragegy();

 let produit1: ProductModel = new ProductModel();
 produit1.setStrategy(strategy);
produit1.setName('Farine');
produit1.setBaseUnit('kg');
produit1.setPrice(1.80);

let produit2: ProductModel = new ProductModel();
produit2.setStrategy(strategy);
produit2.setName('Lait');
produit2.setBaseUnit('l');
produit2.setPrice(0.94);

const lesCrepes: Recette = new Recette('Crèpes');
lesCrepes.addProduct(produit1);
lesCrepes.addProduct(produit2);

const lesGaufres: Recette = new Recette('Gauffres');
lesGaufres.addProduct(produit1);

console.log(lesCrepes.toString());

console.log(lesGaufres.toString());