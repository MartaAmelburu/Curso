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

const numSecreto = Math.floor((Math.random() * 100) + 1);
let intentos = 6;
let numeroUsuario;
const maxIntentos = 6;
do { 
    numeroUsuario = prompt('Introduce un número');
    if (isNaN(numeroUsuario)){
    console.log('No es un numero');
    }
}
while (numeroUsuario == null || isNaN(numeroUsuario) || numeroUsuario.trim() == '');


let hasGanado = false;

for (let i = 1; i < intentos; i++) {
    if (numeroUsuario == numSecreto && intentos <= maxIntentos){
        hasGanado = true;
        break;
    }
    else if(numeroUsuario > numSecreto && intentos <= maxIntentos){
        console.log('El número es más pequeño');
        numeroUsuario = prompt('Introduce un número más pequeño');
    }
    else if (numeroUsuario < numSecreto  && intentos <= maxIntentos){
        console.log('El número es más grande');
        numeroUsuario = prompt('Introduce un número más grande');
    }
    
    else{
        console.error('No es un término válido');
        numeroUsuario = prompt('Introduce un número');
    }
    
}

if (hasGanado == false) {
    console.log('Fallaste');
    
}

