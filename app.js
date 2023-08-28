// init Weather object

const weather = new Weather('Adama', 'MA');

// 

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather() 
  .then(results => console.log(results))
  .catch(err => console.log(err))
}