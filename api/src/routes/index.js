const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require ('./countryRouter');
const ativityRouter = require ('./activityRouter');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//mainRouter.use("/country", countryRouter);

//mainRouter.use("/activity", ativityRouter);


module.exports = mainRouter;
