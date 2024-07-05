import { mAllProducts } from "./modules/maquetar/allProducts.js";
import { mAbrigos } from "./modules/maquetar/abrigos.js";
import { mCamisetas } from "./modules/maquetar/camisetas.js";
import { mPantalones } from "./modules/maquetar/pantalones.js";

const openProducts = async() => {
    await mAllProducts();
}
document.openProducts = openProducts;

const openAbrigos = async() => {
    await mAbrigos();
}
document.openAbrigos = openAbrigos;

const openCamisetas = async() => {
    await mCamisetas();
}
document.openCamisetas = openCamisetas;

const openPantalones = async() => {
    await mPantalones();
}
document.openPantalones = openPantalones;