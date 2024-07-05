import { getAllProducts } from "../app.js";


const productsDiv = document.querySelector(".productsGrid");
export const mCamisetas = async() =>{
    productsDiv.innerHTML = "";
    
    let data = await(getAllProducts());
    let products = data[0];
    let camisetas = products.camiseta;

    let camisetasCantidad = camisetas.length;

    for (let i = 0; i < camisetasCantidad; i++){
        let camiseta = camisetas[i];

        let id = camiseta.id;
        let namee = camiseta.nombre;
        let imagen = camiseta.imagen;
        let precio = camiseta.precio;

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