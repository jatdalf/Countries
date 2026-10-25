require("dotenv").config();
const axios = require("axios");

async function checkCountries() {
  const key = process.env.REST_COUNTRIES_API_KEY;

  if (!key) {
    throw new Error("Falta REST_COUNTRIES_API_KEY en el .env");
  }

  const response = await axios.get(
    "https://api.restcountries.com/countries/v5",
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
      params: {
        limit: 1,
      },
      timeout: 20000,
    }
  );

  console.log(JSON.stringify(response.data, null, 2));
}

checkCountries().catch((error) => {
  console.error(
    "No se pudo consultar la API:",
    error.response?.status || error.code || error.message
  );
  process.exitCode = 1;
});