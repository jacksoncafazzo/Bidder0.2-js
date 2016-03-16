var apiKey = require('./../.env').apiKey;
var map = require('./../js/map.js')

$(document).ready(function() {
  map.initialize();
  $('#weatherLocation').click(function() {
    event.preventDefault();
    var city = $('#location').val();
    $('#location').val('');
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(response) {
      console.log(response);
      $('.showWeather').append('<li><h2>' + response.name + '</h2></li>');
      $('.showWeather').append("<li>The humidity in " + response.name + " is " + response.main.humidity + "%</li>");
      $('.showWeather').append("<li>and the pressure is: " + response.main.pressure + '</li>');
      $('.showWeather').append('<li>The temperature is: ' + response.main.temp + 'degrees Farenheit');
      $('.showWeather').append('<li>This is the weather description: ' + response.weather[0].description + '</li>');
      console.log();
      map.setMapLocation(response.coord)
      map.addClouds();
      map.addPrecipitation();
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});
