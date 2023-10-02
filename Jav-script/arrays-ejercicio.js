/*const marcas = ['Nisan', 'Volvo', 'Masserati'];

marcas[marcas.length] = 'Ford';

console.log(marcas[2]);

marcas.push(['Mercedes', 'clio']);


console.log(marcas[4][1]);

const cochePequeño = marcas[4];
const duplicado = [...cochePequeño];
console.log(cochePequeño);
//const nuevasMarcas = [...marcas,['Audi', 'Seat']];
//console.log(nuevasMarcas[4][1]);*/

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
}