let cantidadDiv = document.querySelector("#cantidad");

export const plusCarritoP = async(id) => {
    localStorage.setItem(`${id}--P`, id);
    let cantidad = localStorage.length;
    cantidadDiv.innerHTML = cantidad;
}
export const plusCarritoA = async(id) => {
    localStorage.setItem(`${id}--A`, id);
    let cantidad = localStorage.length;
    cantidadDiv.innerHTML = cantidad;
}
export const plusCarritoC = async(id) => {
    localStorage.setItem(`${id}--C`, id);
    let cantidad = localStorage.length;
    cantidadDiv.innerHTML = cantidad;
}

export const numCarrito = async() =>{
    let cantidad = localStorage.length;
    cantidadDiv.innerHTML = cantidad;
}