
let hora = prompt('Escribe la hora');
let minutos = prompt('Escribe los minutos');
let sec = prompt('Escribe los segundos');

sec++



if (isNaN(hora) === false){
    horas = Number(hora);
}
if (isNaN(minutos) === false){
    minutos = Number(minutos);
}
if (isNaN(sec) === false){
    sec = Number(sec);
}

if (sec > 59){

    sec = 0;
    minutos++;
}
if (minutos > 59){

    minutos = 0;
    hora++;
}
if (hora > 23 ){
<<<<<<< HEAD:main6.js
    
=======
>>>>>>> a52915889065f9cd8faaa8bdbc0353d89ed517d6:Jav-script/main6.js
    hora = 0;
}


console.log(`${hora} ${minutos} ${sec}`);


<<<<<<< HEAD:main6.js
if (typeof hora === 'number' && typeof minutos === 'number' && typeof sec === 'number'){
}
=======

>>>>>>> a52915889065f9cd8faaa8bdbc0353d89ed517d6:Jav-script/main6.js
/*if (sec == 59 && minutos == 59 && hora == 23){

    hora = 0;
    minutos = 0;
    sec = 0;

    console.log(`${hora} : ${minutos} : ${sec}`);
}
/*else{
    console.log('No es un numero');
}*/