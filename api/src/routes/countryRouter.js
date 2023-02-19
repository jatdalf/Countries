const { Router } = require('express');
const countryRouter = Router();
const getCountriesHandler = require("../Handlers/getCountries")
const getCountryByIdHandler = require("../Handlers/getCountryById")

countryRouter.get('/', getCountriesHandler)

countryRouter.get('/:id', getCountryByIdHandler)

module.exports = countryRouter;