
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure= document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  displayWeather(result) {
    this.location.textContent = result.name + ' , ' + weatherLocation.country;
    this.desc.textContent = result.weather[0].description;
    this.string.textContent = result.main.temp + ' ℃';
    this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`);  
    this.humidity.textContent = `Relative Humidity: ${result.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${result.main.feels_like}℃`;
    this.pressure.textContent = `Pressure: ${result.main.pressure} hPa`;
    this.wind.textContent = `Wind: ${result.wind.speed} meter/sec`;

  }
}