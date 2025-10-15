export class SelectorElementos {
    constructor(root){
        this._root = root;
    }

    get root(){
        return this._root
    }

    obtenerPorSelector(cssSelector){
        return this._root.querySelector(cssSelector)
    }

    agregarComportamientoAlDarClick(cssSelector, callback){
        const elemento = this.obtenerPorSelector(cssSelector)
        elemento.addEventListener('click', callback)
    }
}