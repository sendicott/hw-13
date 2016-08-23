// Build a weather app that displays 5-day forecast for a given place
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

function weekdayForecast() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=Charlotte,NC&appid=1f2671239fb2a0b6556a93f5873da5b1');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        console.log(response);
        console.log(request);
    });
    request.send();
}



window.addEventListener('load', function() {
    weekdayForecast();
});

// testing testing