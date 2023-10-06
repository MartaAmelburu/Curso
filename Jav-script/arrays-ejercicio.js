/*const marcas = ['Nisan', 'Volvo', 'Masserati'];

marcas[marcas.length] = 'Ford';

console.log(marcas[2]);

marcas.push(['Mercedes', 'clio']);


console.log(marcas[4][1]);

const cochePequeño = marcas[4];
const duplicado = [...cochePequeño];
console.log(cochePequeño);
//const nuevasMarcas = [...marcas,['Audi', 'Seat']];
//console.log(nuevasMarcas[4][1]);

const fruteria = ['🍎','🍐','🍌','🍇'];
const frutota = [];

for (i = 0; i < fruteria.length; i++) {
  

   const frutita = fruteria[i];
    
    if (i % 2 === 1){ 
        frutota.push(fruteria[i]);
        console.log(frutota);
        
    }
        
}

for (i = 0; i < fruteria.length; i++) {
    fruteria[i] + 5;
}*/

//BUCLE ADIVINAR NUMERO

// const numSecreto = Math.floor((Math.random() * 100) + 1);
// let intentos = 6;
// let numeroUsuario;
// const maxIntentos = 6;
// do { 
//     numeroUsuario = prompt('Introduce un número');
//     if (isNaN(numeroUsuario)){
//     console.log('No es un numero');
//     }
// }
// while (numeroUsuario == null || isNaN(numeroUsuario) || numeroUsuario.trim() == '');


// let hasGanado = false;

// for (let i = 1; i < intentos; i++) {
//     if (numeroUsuario == numSecreto && intentos <= maxIntentos){
//         hasGanado = true;
//         break;
//     }
//     else if(numeroUsuario > numSecreto && intentos <= maxIntentos){
//         console.log('El número es más pequeño');
//         numeroUsuario = prompt('Introduce un número más pequeño');
//     }
//     else if (numeroUsuario < numSecreto  && intentos <= maxIntentos){
//         console.log('El número es más grande');
//         numeroUsuario = prompt('Introduce un número más grande');
//     }
    
//     else{
//         console.error('No es un término válido');
//         numeroUsuario = prompt('Introduce un número');
//     }
    
// }

// if (hasGanado == false) {
//     console.log('Fallaste');
    
// }

//ejercicio arrays y bucles

// let nums = [2,4,6,3,4];
// let pares = '';
// let impares= '';

// for (let i = 0; i < nums; i++){
//     nums * Math.random() * 10;

//     if (i % 2 === 1){
//         pares = nums.push('i');
//     }
//     else {
//         impares = nums.push('i');
//     }
// }
// console.log(`${nums} ${pares} ${impares}`)


//CORRECCIÓN

let nums = [2,4,6,3,4];
let pares = [];
let impares= [];

for (let i = 0; i < nums.length; i++){
    let numero = nums[i];
    let random = Math.ceil(Math.random() * 10);
    let multiplicacion = numero * random;
   
    if (multiplicacion % 2 === 0){
        pares.push(multiplicacion);
    }
    else {
        impares.push(multiplicacion);
    }
   
}
console.log(`${nums}`);
console.log(`${pares}`);
console.log(`${impares}`);


