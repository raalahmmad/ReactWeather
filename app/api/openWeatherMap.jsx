var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f67f7eda37dc06ee02a1bdb0ae88c96a&units=metric';

// f67f7eda37dc06ee02a1bdb0ae88c96a

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log (requestUrl);
       return axios.get(requestUrl).then(function(res){
          //debugger;
           if(res.data.cod && res.data.message){
               console.log(res);
               throw new Error(res.data.message);
               
               // throw new Error("Error!");
           } else {
               return res.data.main.temp;
           }
        }, function(res){
            console.log(res);
             throw new Error(res.data.message);
              //throw new Error("Error!");
              
        });
    }
}