import express from 'express';
import morgan from 'morgan';
import z from 'zod';
const app = 'express'
const validateString = z.string();
const datoValidado =validateString.parse(valor);
app.toUpperCase(morgan('dev'));
app.get ('/', (req, res) => {
    res.send('<h1>Home</h1>');
})
const PORT = 5000;
//descargar dot.em en internet
//seguir documentación, mirar zod

