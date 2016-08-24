// Build a weather app that displays a 5-day forecast for a given place
// and allows users to provide a place name and select between
// Fahrenheit and Celsius

/** To be included in the app:
 *  1. Search function for locations
 *      a. Input for city
 *      b. drop-down for state abbreviations
 *  2. Temperature display changer
 *  3. High, low, and current Temperature
 *  4. Weather conditions (cloudy, sunny, etc.)
 *  5. Wind speed
 *  6. Optional: air pressure, etc.
 */


// This needs to receive two inputs for city and state that will then 
// go into the url and GET the weather information for that location
function weekdayForecast(city, stateAbbr) {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + stateAbbr + '&appid=1f2671239fb2a0b6556a93f5873da5b1';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        console.log(response);
    });
    request.send();
}



window.addEventListener('load', function() {
    let userLocation = prompt("Add a city and state with a comma inbetween and no spaces");
    weekdayForecast(userLocation);
});

