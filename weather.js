
class Weather {

  constructor(city, country) {
    this.city = city;
    this.country = country;
    this.apiKeys = '3d816518f38540aaf29177fc01b81650';
  }

  async getWeather() {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKeys}&units=metric`)

   const responseData = await response.json();

   return responseData;


  }

  // change location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }







}