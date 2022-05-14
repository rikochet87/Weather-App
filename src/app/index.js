const {Weather} = require("./weather");
const {UI} = require("./UI");
const {Store} = require("./store");

const store = new Store();
const {city, countryCode} = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

require("./index.css");

async function fechWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
};

document.getElementById("weather-change-btn").addEventListener("click", (e)=>{
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("country-code").value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fechWeather();
    e.preventDefault();
});

document.addEventListener("DOMContentLoader", fechWeather());