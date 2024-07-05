import { getAllProducts } from "../app.js";


const productsDiv = document.querySelector(".productsGrid");
export const mPantalones = async() =>{
    productsDiv.innerHTML = "";
    
    let data = await(getAllProducts());
    let products = data[0];
    let pantalones = products.pantalon;

    let pantalonesCantidad = pantalones.length;

    for (let i = 0; i < pantalonesCantidad; i++){
        let pantalon = pantalones[i];

        let id = pantalon.id;
        let namee = pantalon.nombre;
        let imagen = pantalon.imagen;
        let precio = pantalon.precio;

        let plantilla = `
        <div class="productDiv">
            <div class="productDivSection">
                <img class="productImg" src="${imagen}">
            </div>
            <div class="productDivSection">
                <p class="productName">${namee}</p>
                <p class="productPrice">$${precio}</p>
                <div onclick="addPantalon(this)" class="productBtn" id="${id}">Agregar</div>
            </div>
        </div>`;

        productsDiv.innerHTML += plantilla;
    }
}