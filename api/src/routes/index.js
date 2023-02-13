const { Router } = require('express');
const countryRouter = require ('./countryRouter');
const activityRouter = require ('./activityRouter');
const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/countries', countryRouter);

mainRouter.use("/activity", activityRouter);

module.exports = mainRouter;
