# Weather-Dashboard-Challenge

## User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

## Acceptance Criteria 

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Description

The Weather Dashboard takes the users search request and uses 2 APIs. The GeoCoder API to find the latitude and longitude and then uses that information to query the OpenWeather API to find the current and projected weather conditions for the given city. Search results are saved into local storage with some slight validation to help the user get the correct data. On the left, the user can simply click previous searches to get those results again. 


## Screenshots



## Deployed Application