var APIKey = "f4ce1d986e6fe51c9fed10dd756f803b";
var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f4ce1d986e6fe51c9fed10dd756f803b";

var currentCity = document.getElementById("current-city");
var currentDate = document.getElementById("current-date");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumidity = document.getElementById("current-humidity");
var searchButton = document.getElementById("search-btn");
var citySearchText = document.getElementById("city-search");

var currentLat;
var currentLon;

function getAPIData(request){
    fetch(request).then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data[0].lat, data[0].lon);
        currentLat = data[0].lat;
        currentLon = data[0].lon;
        console.log(currentLat, currentLon);
        var newAPICall = "https://api.openweathermap.org/data/2.5/forecast?lat=" + currentLat + "&lon=" + currentLon + "&appid=f4ce1d986e6fe51c9fed10dd756f803b&units=imperial";
        fetch(newAPICall).then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data, data.list[0]);
        })
    })
}

function searchForCity(event){
    event.preventDefault();
    var currentCity = citySearchText.value;
    var APICall = "http://api.openweathermap.org/geo/1.0/direct?q=" +currentCity+ "&limit=1&appid=f4ce1d986e6fe51c9fed10dd756f803b"
    if (currentCity === ""){
        alert("You must type in a city name");
        return;
    }
    getAPIData(APICall);

    citySearchText.value = "";
    
    

}

// getAPI(requestURL);

searchButton.addEventListener("click", searchForCity);