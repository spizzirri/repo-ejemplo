import { SelectorElementos } from "./selector_elementos.js"

const selector = new SelectorElementos();
selector.agregarComportamientoAlDarClick("#btn-prueba", ()=>{
    alert("Javascript está funcionando")
})