const nuevoH1 = document.createElement('h1');
nuevoH1.innerHTML = 'Soy un h1 guachi';
const bodyGuardado = document.querySelector('body')
bodyGuardado.prepend(nuevoH1);
const boton = document.querySelector('button');

const nuevoButton = document.createElement('button');
nuevoButton.innerHTML = 'Haz click aquí';
const bodyNuevo = document.querySelector('body');
nuevoh1.after(nuevoButton);
//bodyNuevo.append(nuevoButton); para llevar algo al final
nuevoButton.className = 'rounded';
nuevoButton.style.color = 'white';
nuevoButton.style.backgroundColor = 'tomato';
nuevoButton.setAttribute('data-id', '1234');
nuevoH1.setAttribute('title', 'soy un titulo');