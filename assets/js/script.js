
var submit = document.querySelector('.submitBtn');
inputValue = document.querySelector('.searchText');
cityName = document.querySelector('.cityName');
description = document.querySelector('.description');
temp = document.querySelector('.temp');
details = document.querySelector('.weatherDetails')


submit.addEventListener('click',function(e) {
e.preventDefault();
var url = 'http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=69f3d90604d875cc332d666091618bc7'

fetch(url)
.then(function(response) {return response.json()})
.then(function(data) 
{
var nameValue = data['name'],
  weather_data= data['weather'][0]['main'],
  temp_data = data['main']['temp'],
  temp_data_C = (temp_data - 273.15).toFixed(0),
  weather_desc = data['weather'][0]['description'],
  color = change_background(weather_data);

cityName.innerHTML = "City Name : " + nameValue ;
description.innerHTML = "Climate : " + weather_desc ;
temp.innerHTML = "Temperature : " + temp_data_C + "&deg; C";
document.body.style.backgroundColor = color;
})

//  .catch(function(error) { return alert('Invalid Data/Data Not Found!') });
.catch(function(error) { 
return details.innerHTML="Invalid Data/Data Not Found!" })
})


//  function to change the background color depending on climate  

function change_background(weather_data) {
if(weather_data === 'Thunderstorm')
return '#717a7d';
if(weather_data === 'Rain') 
return '#3C424C';
if(weather_data === 'Drizzle')
return '#5d6470';
if(weather_data === 'Smoke' || weather_data === 'Ash')
return '#D3D2D3';
if(weather_data === 'Clouds')
return '#c9caca';
if(weather_data === 'Clear') 
return '#87ceeb';
if(weather_data === 'Fog' || weather_data === 'Squall' || weather_data === 'Tornado' || weather_data === 'Haze')
return '#D3D2D3';
if(weather_data === 'Snow' || weather_data === 'Mist')
return '#EDEFF3';
}










































