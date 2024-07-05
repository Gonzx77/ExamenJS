import { getAllProducts } from "../app.js";


const productsDiv = document.querySelector(".productsGrid");
export const mAllProducts = async() =>{
    productsDiv.innerHTML = "";
    
    let data = await(getAllProducts());
    let products = data[0];
    let abrigos = products.abrigo;
    let camisetas = products.camiseta;
    let pantalones = products.pantalon;

    let abrigosCantidad = abrigos.length;
    let camisetasCantidad = camisetas.length;
    let pantalonesCantidad = pantalones.length;

    for (let i = 0; i < abrigosCantidad; i++){
        let abrigo = abrigos[i];

        let id = abrigo.id;
        let namee = abrigo.nombre;
        let imagen = abrigo.imagen;
        let precio = abrigo.precio;

        console.log(imagen);

        let plantilla = `
        <div class="productDiv">
            <div class="productDivSection">
                <img class="productImg" src="${imagen}">
            </div>
            <div class="productDivSection">
                <p class="productName">${namee}</p>
                <p class="productPrice">$${precio}</p>
                <div onclick="addAbrigo(this)" class="productBtn" id="${id}">Agregar</div>
            </div>
        </div>`;

        productsDiv.innerHTML += plantilla;
    }

    for (let i = 0; i < camisetasCantidad; i++){
        let camiseta = camisetas[i];

        let id = camiseta.id;
        let namee = camiseta.nombre;
        let imagen = camiseta.imagen;
        let precio = camiseta.precio;

        console.log(imagen);

        let plantilla = `
        <div class="productDiv">
            <div class="productDivSection">
                <img class="productImg" src="${imagen}">
            </div>
            <div class="productDivSection">
                <p class="productName">${namee}</p>
                <p class="productPrice">$${precio}</p>
                <div onclick="addCamiseta(this)" class="productBtn" id="${id}">Agregar</div>
            </div>
        </div>`;

        productsDiv.innerHTML += plantilla;
    }

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