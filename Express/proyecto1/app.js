const express = require('express');
const arrayUsers = [];
const app = express();
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

