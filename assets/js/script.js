var APIKey = "f4ce1d986e6fe51c9fed10dd756f803b";
var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f4ce1d986e6fe51c9fed10dd756f803b";

var currentCity = document.getElementById("current-city");
var currentDate = document.getElementById("current-date");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumidity = document.getElementById("current-humidity");

function getAPI(request){
    fetch(request).then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

getAPI(requestURL);