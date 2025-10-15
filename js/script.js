import { SelectorElementos } from "./selector_elementos.js"
import { Renderizador } from "./renderizador.js"
import { mostrarAlerta } from "./callback.js"

const selector = new SelectorElementos(document);
const bodyElement = selector.obtenerPorSelector("body");

selector.agregarComportamientoAlDarClick("#btn-prueba", mostrarAlerta);

const renderizador = new Renderizador();
renderizador.renderizarCabecera(bodyElement, "PrograWebI");