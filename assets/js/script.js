var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f4ce1d986e6fe51c9fed10dd756f803b";

var currentCity = document.getElementById("current-city");
var currentDate = document.getElementById("current-date");
var currentIcon = document.getElementById("current-icon");
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById("current-wind");
var currentHumidity = document.getElementById("current-humidity");
var searchButton = document.getElementById("search-btn");
var citySearchText = document.getElementById("city-search");
var pastCitiesList = document.getElementById("past-cities");

var day1Date = document.getElementById("day-1-date");
var day1Icon = document.getElementById("day-1-icon");
var day1Temp = document.getElementById("day-1-temp");
var day1Wind = document.getElementById("day-1-wind");
var day1Humidity = document.getElementById("day-1-humidity");

var day2Date = document.getElementById("day-2-date");
var day2Icon = document.getElementById("day-2-icon");
var day2Temp = document.getElementById("day-2-temp");
var day2Wind = document.getElementById("day-2-wind");
var day2Humidity = document.getElementById("day-2-humidity");

var day3Date = document.getElementById("day-3-date");
var day3Icon = document.getElementById("day-3-icon");
var day3Temp = document.getElementById("day-3-temp");
var day3Wind = document.getElementById("day-3-wind");
var day3Humidity = document.getElementById("day-3-humidity");

var day4Date = document.getElementById("day-4-date");
var day4Icon = document.getElementById("day-4-icon");
var day4Temp = document.getElementById("day-4-temp");
var day4Wind = document.getElementById("day-4-wind");
var day4Humidity = document.getElementById("day-4-humidity");

var day5Date = document.getElementById("day-5-date");
var day5Icon = document.getElementById("day-5-icon");
var day5Temp = document.getElementById("day-5-temp");
var day5Wind = document.getElementById("day-5-wind");
var day5Humidity = document.getElementById("day-5-humidity");

var currentLat;
var currentLon;

var pastCities = [];

function init(){

    //pull data from local storage in a new variable
    var storedCities = JSON.parse(localStorage.getItem("pastSearches"));
    // fill the pastCities array with the local storage data storedCities
    if(storedCities !== null){
        pastCities = storedCities;
    } else {
        return;
    }
    
    // check if there are more than 8 items, if so, delete the oldest one/ index 0 to bring it down to 8 length
    if(pastCities.length > 8){
        pastCities.shift();
    }

    // loop through the array and create a button for each city saved in the array
    for (let i = 0; i < pastCities.length; i++) {
        var newButton = document.createElement("button");
        newButton.className = "list-group-item list-group-item-action city-button"
        newButton.innerText = pastCities[i];
        pastCitiesList.appendChild(newButton);


        
    }
}

//runs when the search button is clicked to dynamically update the cards on the webpage
function getAPIData(request){
    fetch(request).then(function(response){
        return response.json();
    })
    .then(function(data){
        currentLat = data[0].lat;
        currentLon = data[0].lon;
        var currentAPICall = "https://api.openweathermap.org/data/2.5/weather?lat=" + currentLat + "&lon=" + currentLon + "&appid=f4ce1d986e6fe51c9fed10dd756f803b&units=imperial"
        var forecastAPICall = "https://api.openweathermap.org/data/2.5/forecast?lat=" + currentLat + "&lon=" + currentLon + "&appid=f4ce1d986e6fe51c9fed10dd756f803b&units=imperial";
        //fetches the current weather data
        fetch(currentAPICall).then(function(response){
            return response.json();
        })
        .then(function(data){
            //displays the current weather data from the API
            currentTemp.innerText = data.main.temp;
            currentIcon.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            currentWind.innerText = data.wind.speed;
            currentHumidity.innerText = data.main.humidity;
            
            //fetches the forecast data from the API
            fetch(forecastAPICall).then(function(response){
                return response.json();
            })
            .then(function(data){
                //displays the forecast data to the corresponding HTML elements for each card

                day1Date.innerText = data.list[3].dt_txt;
                day1Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png")
                day1Temp.innerText = data.list[3].main.temp;
                day1Wind.innerText = data.list[3].wind.speed;
                day1Humidity.innerText = data.list[3].main.humidity;

                day2Date.innerText = data.list[11].dt_txt;
                day2Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[11].weather[0].icon + ".png")
                day2Temp.innerText = data.list[11].main.temp;
                day2Wind.innerText = data.list[11].wind.speed;
                day2Humidity.innerText = data.list[11].main.humidity;

                day3Date.innerText = data.list[19].dt_txt;
                day3Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[19].weather[0].icon + ".png")
                day3Temp.innerText = data.list[19].main.temp;
                day3Wind.innerText = data.list[19].wind.speed;
                day3Humidity.innerText = data.list[19].main.humidity;

                day4Date.innerText = data.list[27].dt_txt;
                day4Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[27].weather[0].icon + ".png")
                day4Temp.innerText = data.list[27].main.temp;
                day4Wind.innerText = data.list[27].wind.speed;
                day4Humidity.innerText = data.list[27].main.humidity;

                day5Date.innerText = data.list[35].dt_txt;
                day5Icon.setAttribute("src", "http://openweathermap.org/img/w/" + data.list[35].weather[0].icon + ".png")
                day5Temp.innerText = data.list[35].main.temp;
                day5Wind.innerText = data.list[35].wind.speed;
                day5Humidity.innerText = data.list[35].main.humidity;
            })
        })
        
    })
}

function searchForCity(event){
    event.preventDefault();
    var city = citySearchText.value;
    storeCityInLocal(city);
    currentCity.innerText = city;
    var APICall = "http://api.openweathermap.org/geo/1.0/direct?q=" +city+ "&limit=1&appid=f4ce1d986e6fe51c9fed10dd756f803b"
    if (city === ""){
        alert("You must type in a city name");
        return;
    }
    getAPIData(APICall);

    citySearchText.value = "";
    
    

}

function storeCityInLocal(city){
    //add a searched city to the pastCities array
    pastCities.push(city);
    //check if pastCities is greater than 8, if so, delete first item to make it 8 again
    if (pastCities.length > 8){
        pastCities.shift();
    }
    //check if there are already 8 buttons, if so delete the top button
    if (pastCitiesList.childElementCount === 8){
        pastCitiesList.removeChild(pastCitiesList.firstElementChild);
    }
    //create an append a new button at the bottom of the button list
    var newButton = document.createElement("button");
    newButton.className = "list-group-item list-group-item-action city-button"
    newButton.innerText = city;
    pastCitiesList.appendChild(newButton);
    //store the array in local storage as pastSearches
    localStorage.setItem("pastSearches", JSON.stringify(pastCities));

    

}

// getAPI(requestURL);

searchButton.addEventListener("click", searchForCity);

init();