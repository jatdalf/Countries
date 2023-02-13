const { Router } = require('express');
const countryRouter = Router();
const { Country, Activity } = require('../db');

countryRouter.get('/', (req , res)=>(
    res.send("get de countries modularizado")
));

countryRouter.post("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el POST de countrys")
));

countryRouter.put("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el PUT de countrys")
));

countryRouter.delete("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el DELETE de countrys")
));


module.exports = countryRouter;