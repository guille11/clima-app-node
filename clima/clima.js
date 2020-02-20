const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=1b69e9020c1755c70811cd45e6bab4cd&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
};