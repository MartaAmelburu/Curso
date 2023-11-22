const express = require('express');
const arrayUsers = [];
const app = express();
const {z} = require('zod');
const personaSchema = z.object({
    nombre: z.string(),
    edad: z.number().min(18),
});
const datosValidados = {
    nombre:'Juan',
    edad: 25,
};
const datosInvalidados = {
    nombre: 'Ana',
    edad: 15,
};

try {
    const personaValida = personaSchema.parse(datosValidados);
    console.log('Datos válidos:', personaValida);

} catch (error){
    console.log('Error en datos válidos', error.errors);
}

try {
   
  const personaInvalida = personaSchema.parse(datosInvalidos);
  console.log('Datos inválidos:', personaInvalida);
} catch (error) {
  
  console.error('Error en datos inválidos:', error.errors);

};

app.use(express.json());

app.get('/', (req,res) => {
    res.send(arrayUsers);
});

app.post('/', (req, res) => {
    const newUser = req.body;
    arrayUsers.push(newUser);
    res.status(201).send('Push hecho');
})

app.listen(3000, ()=> {
    console.log('puerto escucha');
});


