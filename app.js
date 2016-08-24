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
        let parent = document.querySelector('#weatherDays');
        for (let i = 0; i < 40; i = i + 8) {
            let weekDayBox = document.createElement('div');
            weekDayBox.classList.add("weekDayBox");
            parent.appendChild(weekDayBox);

            let weekday = document.createElement('h2');
            weekday.textContent = response.list[i].dt_txt;
            weekDayBox.appendChild(weekday);

            let currentTemp = document.createElement('p');
            currentTemp.textContent = "Current Temperature: " + (response.list[i].main.temp * (9/5) - 459.67).toFixed(2) + " Fahrenheit";
            weekDayBox.appendChild(currentTemp);

            let highTemp = document.createElement('p');
            highTemp.textContent = "High for the Day: " + (response.list[i].main.temp_max * (9/5) - 459.67).toFixed(2) + " Fahrenheit";
            weekDayBox.appendChild(highTemp);

            let lowTemp = document.createElement('p');
            lowTemp.textContent = "Low for the Day: " + (response.list[i].main.temp_min * (9/5) - 459.67).toFixed(2) + " Fahrenheit";
            weekDayBox.appendChild(lowTemp);

            let conditions = document.createElement('p');
            conditions.textContent = "Weather Conditions: " + response.list[i].weather[0].description + " with a wind speed of " + response.list[i].wind.speed + "mph.";
            weekDayBox.appendChild(conditions);
        }
    });
    request.send();
}

// function objectHunt() {
//     let request = new XMLHttpRequest();
//     request.open('GET', "http://api.openweathermap.org/data/2.5/forecast?q=Birmingham,AL&appid=1f2671239fb2a0b6556a93f5873da5b1");
//     request.addEventListener('load', function() {
//     let response = JSON.parse(request.responseText);
//     console.log(response);
//     console.log(response.list[0].dt_txt);
//     console.log(response.list[8].dt_txt);
//     });

//     request.send();
// };



window.addEventListener('load', function() {
    // objectHunt();
    let searchBtn = document.querySelector("#locationBtn");
    searchBtn.addEventListener('click', function() {
        let city = document.querySelector("#city").value;
        let state = document.querySelector("#state").value;
        weekdayForecast(city, state);
    });
});

