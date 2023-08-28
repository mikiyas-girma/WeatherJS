// init UI 
const ui = new UI;
// init Storage
const storage = new Storage;
// Get stored location data
const weatherLocation = storage.getLocationData();

// init Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// get Weather in dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location  event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  
    // Change location
    weather.changeLocation(city, country );

    // Set location in LS
    storage.setLocationData(city, country);
  
    // Get and display weather
    getWeather();
  
    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather() 
  .then(results => {
    ui.displayWeather(results);
    // console.log(results)
  })
  .catch(err => console.log(err))
}
