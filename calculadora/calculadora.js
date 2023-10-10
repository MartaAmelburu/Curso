

const sumar = document.querySelector('.boton-sumar');
const restar = document.querySelector('.boton-restar');
const multiplicar = document.querySelector('.boton-multi');
const dividir = document.querySelector('.boton-dividir');

let valorSumar = input1.valorSumar.value;

let input1 = document.querySelector('number1');
let input2 = document.querySelector('number2');

umar.onclkick = () => {
    const num1 = input1.valueAsNumber;
    const num2= input2.value;
}
sumar.validateInput = () => {

    if(num1.trim() === '' || isNaN(num1) || isNaN(num2)){
        console.log('tienes que escribir un numero');
        return;
    }

    console.log(num1, num2);
};
const resultado = num1 +num2;
output.innerText = resultado;

restar.addEventListener('click', function () {
    
});
multiplicar.addEventListener('click', function () {
    
});
dividir.addEventListener('click', function () {
    
});
