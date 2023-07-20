const currentWindChill = document.querySelector('#wind-chill');
const currentDesc = document.querySelector("#weather-description");
const weatherIcon = document.querySelector("#weather-icon");
const humidity = document.querySelector("#humidity");
const forecastFirst = document.querySelector("#forecast-first");
const forecastSecond = document.querySelector("#forecast-second");

const forecastThird = document.querySelector("#forecast-third");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-117.3506&units=imperial&appid=f39973082ab5286d5c823eb243fa4a43";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=f39973082ab5286d5c823eb243fa4a43";

async function apiFetchForecast() {
  try {
    const responseForecast = await fetch(forecastUrl);
    if (responseForecast.ok) {
      const dataForecast = await responseForecast.json();
const url = "https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=imperial&appid=f39973082ab5286d5c823eb243fa4a43";
      console.log(dataForecast); // this is for testing the call
      displayForecast(dataForecast);
    } else {
        throw Error(await responseForecast.text());
    }
  } catch (error) {
      console.log(error);
  }
}


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


function  displayResults(weatherData) {
    const temperature = weatherData.main.temp;
    const temperatureTag = document.getElementById("temperature");
    let forecastArray = [];

    const weatherDescription = `${weatherData.weather[0].description}`

    const capitalized = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

    weatherIcon.innerHTML = weatherData.weather[0].icon;
    temperatureTag.innerHTML = "Temperature: " + Math.round(temperature) + "°F";
    currentDesc.innerHTML = capitalized;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }


  const date = new Date();
  let day = date.getDay();


  function nextDays (currentDay) {
    futureDays = [currentDay + 1, currentDay + 2, currentDay + 3];
    weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (i = 0; i == 2; i++) {
      if (futureDays[i] > 6) {
        futureDays = futureDays - 6;
      }
    }


    futureDayNames = [weekdays[futureDays[0]], 
    weekdays[futureDays[1]], 
    weekdays[futureDays[2]]];

    return futureDayNames;
  }

  nextDays(day);

  function displayForecast (forecastData) {
    let forecastArray = [];
  
    

    forecastArray.push(`${nextDays(day)[0]}:  ${Math.round(forecastData.list[0].main.temp)} °F`);
    forecastArray.push(`${nextDays(day)[1]}:  ${Math.round(forecastData.list[6].main.temp)} °F`);
    forecastArray.push(`${nextDays(day)[2]}:  ${Math.round(forecastData.list[14].main.temp)} °F`);
    forecastFirst.innerHTML = forecastArray[0];
    forecastSecond.innerHTML = forecastArray[1];
    forecastThird.innerHTML = forecastArray[2];

  
  }

  
  apiFetch();
  apiFetchForecast();