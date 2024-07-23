function preguntar(pregunta) {
    let respuesta = prompt(pregunta);
    if (respuesta === '' || respuesta === null || respuesta === ' ') {
        respuesta = preguntar(pregunta);
    }
    return respuesta;
} 

alert('Bienviendo a CODECAFE')

let nombre = preguntar("Brindeme su nombre para poder atenderlo ");

alert(' bienvenido' + " " + nombre);

let producto = preguntar('Tenemos cafe espresso y cafe americano, ¿Cual desea?');

if (producto == "cafe espresso") {
    alert(' Exelente decicion, su cafe espreso esta siendo preparado');
}

if (producto === "cafe americano") {
    alert("Exelente decicion, su cafe amricano esta siendo preparado")
}

let respuesta = confirm('¿Desea hacer otro pedido?')
if (respuesta == true) {
    alert("Precione en pedir nuevamente por favor.")
    
}else {
    alert(' Gracias por su compra, vuelva pronto.');
}
