export class Renderizador {
    constructor(){}

    renderizarCabecera(nodoRaiz, titulo){
        const cabecera = document.createElement('header');
        cabecera.innerHTML = `<h1>${titulo}</h1>`;
        nodoRaiz.insertBefore(cabecera, nodoRaiz.firstChild);
    }
}