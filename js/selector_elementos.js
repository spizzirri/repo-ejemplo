export class SelectorElementos {
    constructor(){}

    obtenerPorSelector(cssSelector){
        return document.querySelector(cssSelector)
    }

    agregarComportamientoAlDarClick(cssSelector, callback){
        const elemento = this.obtenerPorSelector(cssSelector)
        elemento.addEventListener('click', callback)
    }
}