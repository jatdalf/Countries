const { Router } = require('express');
const { Country, Activity } = require('../db');
const countryRouter = Router();

countryRouter.get('/countries', (req , res)=>(
    res.send("get de countries")
));

// countryRouter.post("/", (req, res)=>(
//     res.status(200).send("sin implementar: ruta para el POST de countrys")
// ));

// countryRouter.put("/", (req, res)=>(
//     res.status(200).send("sin implementar: ruta para el PUT de countrys")
// ));

// countryRouter.delete("/", (req, res)=>(
//     res.status(200).send("sin implementar: ruta para el DELETE de countrys")
// ));

