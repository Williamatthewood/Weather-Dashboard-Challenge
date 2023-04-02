var APIKey = "f4ce1d986e6fe51c9fed10dd756f803b";
var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f4ce1d986e6fe51c9fed10dd756f803b";

var currentCity = document.getElementById("current-city");
var currentDate = document.getElementById("current-date");
var currentIcon = document.getElementById("current-icon");
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
        currentLat = data[0].lat;
        currentLon = data[0].lon;
        var currentAPICall = "https://api.openweathermap.org/data/2.5/weather?lat=" + currentLat + "&lon=" + currentLon + "&appid=f4ce1d986e6fe51c9fed10dd756f803b&units=imperial"
        var forecastAPICall = "https://api.openweathermap.org/data/2.5/forecast?lat=" + currentLat + "&lon=" + currentLon + "&appid=f4ce1d986e6fe51c9fed10dd756f803b&units=imperial";
        fetch(currentAPICall).then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log("This is the current weather:", data);
            currentTemp.innerText = data.main.temp;
            currentIcon.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            currentWind.innerText = data.wind.speed;
            currentHumidity.innerText = data.main.humidity;
            
            fetch(forecastAPICall).then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log("this is the forecast:", data, data.list[0]);
            })
        })
        
    })
}

function searchForCity(event){
    event.preventDefault();
    var city = citySearchText.value;
    currentCity.innerText = city;
    var APICall = "http://api.openweathermap.org/geo/1.0/direct?q=" +city+ "&limit=1&appid=f4ce1d986e6fe51c9fed10dd756f803b"
    if (city === ""){
        alert("You must type in a city name");
        return;
    }
    getAPIData(APICall);

    citySearchText.value = "";
    
    

}

// getAPI(requestURL);

searchButton.addEventListener("click", searchForCity);