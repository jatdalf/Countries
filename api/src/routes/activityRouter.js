const {Router} = require("express");
const getActivityHandler = require ("../Handlers/getActivity")
const postActivityHandler = require ("../Handlers/postActivity")
const activityRouter = Router();

activityRouter.get("/", getActivityHandler);

activityRouter.post("/", postActivityHandler);

activityRouter.put("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el PUT de Actividades")
));

activityRouter.delete("/", (req, res)=>(
    res.status(200).send("sin implementar: ruta para el DELETE de Actividades")
));

module.exports = activityRouter;