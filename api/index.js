//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country   } = require('./src/db.js');
const axios = require('axios')
const getCountries = require("./src/Controllers/countries")

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    //cargo los datos de la db en una constante
    const  getAllCountries = async()=> {await getCountries()};
    console.log(getAllCountries.length); 
    //si hay datos en la db no los vuelvo a traer, sino... cargo la db con los datos de la api
    try {
      if(!getAllCountries.length){ 
        const apiCountries = await axios.get('https://restcountries.com/v3/all');
        var apiCountriesFullfilled = apiCountries.data.map((e) => {
          return {
            ID: e.cca3,
            name: e.name.common,
            flag_img: e.flags[0],
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : 'Not found',
            subregion: e.subregion,
            area: e.area,
            population: e.population
          }
        })
            await Country.bulkCreate(apiCountriesFullfilled);
            console.log('Db llena')
      }
    } catch (error) {
      console.log(error) 
    }    
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
