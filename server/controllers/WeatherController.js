
const axios = require('axios');
/*
configuartion data for accessing the weather API: 
https://www.weatherapi.com/ 
*/
const api = {
    // if this wasn't a home-assigment I would have placed the key inside .env file 
    key: "f0590670e28f43129d763516222806",
    base: "https://api.weatherapi.com/v1/"
}

module.exports.fetch = async function(req,resp){
    const city = req.query.city;
    let result;
    try {
            result = await axios.get(`${api.base}current.json?key=${api.key}&q=${city}&aqi=no`);
            resp.json(result.data);
    } catch (err) {
            console.error(`failed city api due to ${err.message}`);
    }
};
