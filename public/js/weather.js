$.getJSON("https://api.open-meteo.com/v1/forecast?latitude=9.9325&longitude=-84.08&hourly=temperature_2m&current_weather=true", function(data) {

console.log(data.current_weather.temperature);

let temp = data.current_weather.temperature;

$(".temp").append(temp);

});