
let edad = 8;
let pregunta = prompt('Escribe tu edad para saber los descuentos')

if (edad < 6){
    console.log('¡Entras gratis!');
}
else if (edad >= 6 && edad < 14){
    console.log('Pagas 4€');
}
else if (edad >= 14 && edad < 65) {
    console.log('pagas 7€');
}
else if (edad > 65){
    console.log('Entras gratis')
}
else {
    console.log('No es un número');
}
