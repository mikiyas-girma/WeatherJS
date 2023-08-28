// init Weather object
const weather = new Weather('London', 'MA');
// init UI 
const ui = new UI;

// 

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather() 
  .then(results => {
    ui.displayWeather(results);
    console.log(results)
  })
  .catch(err => console.log(err))
}