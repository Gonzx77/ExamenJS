import { getAllProducts } from "../app.js";


const productsDiv = document.querySelector(".productsGrid");
export const mCarrito = async() =>{
    productsDiv.innerHTML = "";

    let data = await(getAllProducts());
    let products = data[0];

    let pantalonesC = 0;
    let abrigosC = 0;
    let camisetasC = 0;

    let pantalonesID = [];
    let camisetasID = [];
    let abrigosID = [];

    for (let i = 1; i < 6; i++){
        if (localStorage.getItem(`${i}--P`)){
            pantalonesC++;
            pantalonesID.push(localStorage.getItem(`${i}--P`));
        }
        if (localStorage.getItem(`${i}--A`)){
            abrigosC++;
            abrigosID.push(localStorage.getItem(`${i}--A`));
        }
        if (localStorage.getItem(`${i}--C`)){
            camisetasC++;
            camisetasID.push(localStorage.getItem(`${i}--C`));
        }
    }

    console.log(pantalonesID);
    console.log(camisetasID);
    console.log(abrigosID);


    for (let i = 0; i < 5; i++){
        let pantalones = products.pantalon;
        let pantalon = pantalones[i];
        let id = pantalon.id;


        if (pantalonesID.includes(`${id}`)){
            let pName = pantalon.nombre;
            let pImage = pantalon.imagen;
            let pPrice = pantalon.precio;

            let plantilla = `
            <div class="productDiv">
                <div class="productDivSection">
                    <img class="productImg" src="${pImage}">
                </div>
                <div class="productDivSection">
                    <p class="productName">${pName}</p>
                    <p class="productPrice">$${pPrice}</p>
                </div>
            </div>`;
    
            productsDiv.innerHTML += plantilla;
        }
    }
    for (let i = 0; i < 5; i++){
        let abrigos = products.abrigo;
        let abrigo = abrigos[i];
        let id = abrigo.id;


        if (abrigosID.includes(`${id}`)){
            let pName = abrigo.nombre;
            let pImage = abrigo.imagen;
            let pPrice = abrigo.precio;

            let plantilla = `
            <div class="productDiv">
                <div class="productDivSection">
                    <img class="productImg" src="${pImage}">
                </div>
                <div class="productDivSection">
                    <p class="productName">${pName}</p>
                    <p class="productPrice">$${pPrice}</p>
                </div>
            </div>`;
    
            productsDiv.innerHTML += plantilla;
        }
    }
    for (let i = 0; i < 5; i++){
        let camisetas = products.camiseta;
        let camiseta = camisetas[i];
        let id = camiseta.id;


        if (camisetasID.includes(`${id}`)){
            let pName = camiseta.nombre;
            let pImage = camiseta.imagen;
            let pPrice = camiseta.precio;

            let plantilla = `
            <div class="productDiv">
                <div class="productDivSection">
                    <img class="productImg" src="${pImage}">
                </div>
                <div class="productDivSection">
                    <p class="productName">${pName}</p>
                    <p class="productPrice">$${pPrice}</p>
                </div>
            </div>`;
    
            productsDiv.innerHTML += plantilla;
        }
    }
}