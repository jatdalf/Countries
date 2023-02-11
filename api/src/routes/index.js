const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require ('./countryRouter');
const activityRouter = require ('./activityRouter');
const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.get('/countries', (req , res)=>(
    res.send('get de countries')
))
//mainRouter.use('/countries', countryRouter);

//mainRouter.use("/activity", activityRouter);
mainRouter.get('/activity', (req, res)=>(
    res.send('get de actividades')
))

module.exports = mainRouter;
