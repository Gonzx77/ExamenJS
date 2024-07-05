import { mAllProducts } from "./modules/maquetar/allProducts.js";
import { mAbrigos } from "./modules/maquetar/abrigos.js";
import { mCamisetas } from "./modules/maquetar/camisetas.js";
import { mPantalones } from "./modules/maquetar/pantalones.js";

import { numCarrito, plusCarritoA, plusCarritoC, plusCarritoP } from "./modules/carrito.js";
import { mCarrito } from "./modules/maquetar/carrito.js";

let cleanBtn = document.querySelector(".cleanCar");
cleanBtn.style.display = "none";

await mCarrito();
await numCarrito();

const openProducts = async() => {
    cleanBtn.style.display = "none";
    await mAllProducts();
}
document.openProducts = openProducts;

const openAbrigos = async() => {
    cleanBtn.style.display = "none";
    await mAbrigos();
}
document.openAbrigos = openAbrigos;

const openCamisetas = async() => {
    cleanBtn.style.display = "none";
    await mCamisetas();
}
document.openCamisetas = openCamisetas;

const openPantalones = async() => {
    cleanBtn.style.display = "none";
    await mPantalones();
}
document.openPantalones = openPantalones;

const openCarrito = async() => {
    cleanBtn.style.display = "flex";
    await mCarrito();
}
document.openCarrito = openCarrito;




const addPantalon = async(element) =>{
    let id = element.id;
    await plusCarritoP(id);
}
document.addPantalon = addPantalon;

const addAbrigo = async(element) => {
    let id = element.id;
    await plusCarritoA(id);
}
document.addAbrigo = addAbrigo;

const addCamiseta = async(element) => {
    let id = element.id;
    await plusCarritoC(id);
}
document.addCamiseta = addCamiseta;


const cleanCar = async() => {
    localStorage.clear();
    await mCarrito();
    await numCarrito();
}
document.cleanCar = cleanCar;