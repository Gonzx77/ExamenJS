import { getAllProducts } from "../app.js";


const productsDiv = document.querySelector(".productsGrid");
export const mAbrigos = async() =>{
    productsDiv.innerHTML = "";
    
    let data = await(getAllProducts());
    let products = data[0];
    let abrigos = products.abrigo;

    let abrigosCantidad = abrigos.length;

    for (let i = 0; i < abrigosCantidad; i++){
        let abrigo = abrigos[i];

        let id = abrigo.id;
        let namee = abrigo.nombre;
        let imagen = abrigo.imagen;
        let precio = abrigo.precio;

        let plantilla = `
        <div class="productDiv">
            <div class="productDivSection">
                <img class="productImg" src="${imagen}">
            </div>
            <div class="productDivSection">
                <p class="productName">${namee}</p>
                <p class="productPrice">$${precio}</p>
                <div class="productBtn" id="${id}">Agregar</div>
            </div>
        </div>`;

        productsDiv.innerHTML += plantilla;
    }
}