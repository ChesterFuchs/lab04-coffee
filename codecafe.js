function preguntar(pregunta) {
    let respuesta = prompt(pregunta);
    if (respuesta === '' || respuesta === null || respuesta === ' ') {
        respuesta = preguntar(pregunta);
    }
    return respuesta;
} 

alert('Bienviendo a CODECAFE');

let nombre = preguntar("Brindeme su nombre para poder atenderlo ");

alert(' bienvenido' + " " + nombre);

let producto = preguntar('Tenemos cafe espresso y cafe americano, ¿Cual desea?');

if (producto == "cafe espresso") {
    alert(' Exelente decicion.');
}

if (producto === "cafe americano") {
    alert("Exelente decicion.");
}

function cafe() {
    let cantidad = prompt("¿cuantos cafes desea?");
    cantidad = parseInt(cantidad);

    if(cantidad > 6) {
        alert("Lo siento, exedio el limite por pedido.");
        return cafe();
    }

    for(i = 1; i < cantidad; i++) {
        document.write( i+
            "<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG></img>"
        );
    }

}

cafe();

function presentacion() {
    let tamaño = prompt("Que tamaño desea incluir a su pedido?");
    
    while(tamaño !== "mediano" && tamaño !== "grande") {
        alert("Lo siento, porel momento no contamos con ese tamaño.");
        
        tamaño = prompt("por favor, vuelva a elegir un tamaño diferente");
    }

    alert("Su pedido esta siendo preparado.")
} 

presentacion();

let respuesta = confirm('¿Desea hacer otro pedido?');

if (respuesta == true) {
    alert("Precione en pedir nuevamente por favor.");

}else {
    alert(' Gracias por su compra, vuelva pronto.');
}
