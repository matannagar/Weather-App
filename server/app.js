const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

/*
configuartion data for accessing the weather API: 
https://www.weatherapi.com/ 
*/
const api = {
    // if this wasn't a home-assigment I would have placed the key inside .env file 
    key: "f0590670e28f43129d763516222806",
    base: "https://api.weatherapi.com/v1/"
}

/*
Allowing CORS
*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
Allowing access to the server through /getWeatherCity/ request and extracting the city name
*/
app.get('/getWeatherCity/', async (req, resp) => {
    const city = req.query.city;
    let result;
    try {
        result = await axios.get(`${api.base}current.json?key=${api.key}&q=${city}&aqi=no`);
        resp.json(result.data);
    } catch (err) {
        console.error(`failed city api due to ${err.message}`);
    }
});

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})
