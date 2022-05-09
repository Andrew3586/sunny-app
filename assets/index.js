let city = localStorage.getItem('city')
let favourites = JSON.parse(city) || [];
console.log(city)

const apiKey = "9b1f679911ac53cd9b7ab5c58e255fce"


function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey)

        .then((response) => response.json())
        .then((data) => {

            if (favourites.length) {
                let txt = favourites.map(w => createCityButton(w)).join(' ');
                document.querySelector(".cities").innerHTML = txt;
            }

            displayWeather(data)
        })


}

function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
    document.querySelector('.city').innerText = `Weather In ${name}`
    document.querySelector('.icon').src =
        "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector('.temp').innerText = temp + "°C"
    document.querySelector('.description').innerText = description
    document.querySelector('.humidity').innerText =
        "Humidity: " + humidity + "%"
    document.querySelector('.wind').innerText = "Wind Speed: " + speed + "km/h";
    document.querySelector('.country').innerText = " Country Code " + country
    document.querySelector(".weather").classList.remove("loading")
    document.body.style.backgroundImage =
        "url('https://source.unsplash.com/2000x1000/?" + name + "')"
}

let getWeatherByCity = function () {
    const city = document.querySelector('.search-bar').value
    fetchWeather(city)
    localStorage.setItem('city', JSON.stringify(favourites));
}

document
    .querySelector("#favouritesButton")
    .addEventListener("click", function () {
        const city = document.querySelector(".search-bar").value;
        let txt = "";
        if (favourites.length < 5) {
            if (!favourites.includes(city)) {
                favourites.push(city);
                txt = favourites.map(w => createCityButton(w)).join(' ');
                document.querySelector(".cities").innerHTML = txt;
                localStorage.setItem('city', JSON.stringify(favourites));
            } else {
                result = 'NOT positive'
                alert("You have already entered the same city name")
            }
        }
        else {
            result = 'NOT positive'
            alert("You have reached your favourites limit")
        }



    });

function createCityButton(value) {
    return `<h4 onclick='fetchCityWeather(event,"${value}")'> ${value} <button onclick='deleteCity(event,"${value}")'>x</button></h4> `;
}

function deleteCity(event, city) {
    favourites = favourites.filter((tempCity) => tempCity != city)
    localStorage.setItem('city', JSON.stringify(favourites));
    event.target.parentNode.remove()

}

function fetchCityWeather(event, cityName) {

    document.querySelector('.search-bar').value = cityName
    fetchWeather(cityName)

}

document.querySelector(".search button").addEventListener("click", getWeatherByCity);

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            getWeatherByCity()

        }

    })


fetchWeather("Melbourne, Au")

