"https://api.openweathermap.org/data/2.5/weather?q=&appid=9b1f679911ac53cd9b7ab5c58e255fce"
const apiKey = "9b1f679911ac53cd9b7ab5c58e255fce"

function fetchWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        apiKey)
    
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        
}
// Use this data inside of `json` to do DOM manipulation
// console.log(json)
function displayWeather (data){ 
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;
document.querySelector('.city')
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











