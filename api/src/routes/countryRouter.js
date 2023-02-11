const {Router} = require("express");

const countryRouter = Router();

countryRouter.get("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el GET de countrys")
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

