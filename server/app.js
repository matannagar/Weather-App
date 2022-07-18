const express = require('express');

const app = express();
//process.env.PORT allows heroku to choose the port
const port = process.env.PORT || 3001;


const controller = require('./controllers/WeatherController')


//Allowing CORS - cross origin resource sharing
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
Allowing access to the server through /getWeatherCity/ request and extracting the city name
*/
app.get('/getWeatherCity/', controller.fetch);

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})
