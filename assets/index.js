"https://api.openweathermap.org/data/2.5/weather?q=&appid=9b1f679911ac53cd9b7ab5c58e255fce"
const apiKey = "9b1f679911ac53cd9b7ab5c58e255fce"

function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            // Use this data inside of `json` to do DOM manipulation
            console.log(json)

        })
}
fetchWeather('Melbourne, AU')
