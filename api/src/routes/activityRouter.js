const {Router} = require("express");
const { Country, Activity } = require('../db');

const activityRouter = Router();

activityRouter.get("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el GET de Actividades")
));

// activityRouter.post("/", (req, res)=>(
//     res.status(200).send("sin implementar: ruta para el POST de Actividades")
// ));

// activityRouter.put("/", (req, res)=>(
//     res.status(200).send("sin implementar: ruta para el PUT de Actividades")
// ));

// activityRouter.delete("/", (req, res)=>(
//     res.status(200).send("sin implementar: ruta para el DELETE de Actividades")
// ));