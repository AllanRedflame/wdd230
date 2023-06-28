const currentMph = document.querySelector('#mph');
const currentWindChill = document.querySelector('#wind-chill');
const currentDesc = document.querySelector("#weather-description");
const weatherIcon = document.querySelector("#weather-icon");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&units=imperial&appid=f39973082ab5286d5c823eb243fa4a43';

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

  apiFetch();

function  displayResults(weatherData) {
    const temperature = weatherData.main.temp;
    const mph = weatherData.wind.speed;

    const temperatureTag = document.getElementById("temperature");
    const windSpeed = document.getElementById("mph");

    weatherIcon.innerHTML = weatherData.weather[0].icon;
    temperatureTag.innerHTML = "Temperature: " + temperature + "°";
    windSpeed.innerHTML = "Wind speed: " + mph;
    currentDesc.innerHTML = `${weatherData.weather[0].description}`;
    currentMph.innerHTML = `Wind Speed: ${mph} mph`;




    windChill = Math.round(35.74 + 0.6215 * temperature - 35.74 * mph ** 0.16 + 0.4275 * temperature * mph ** 0.16);

    if (temperature <= 50 && mph > 3) {

        currentWindChill.innerHTML = "Feels like: " + windChill + "°"

    }
    else {
        currentWindChill.innerHTML = "Wind chill: N/A";
    }

    const windChillSpotlight = document.getElementById("wind-chill-spotlight");
    const temperatureTagSpotlight = document.getElementById("temperature-spotlight");
    const windSpeedSpotlight = document.getElementById("mph-spotlight");
    const currentDescSpotlight = document.getElementById("weather-description-spotlight");
    const iconSpotlight = document.getElementById("weather-icon-spotlight");

    iconSpotlight.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
    currentDescSpotlight.innerHTML = `${weatherData.weather[0].description}`;
    temperatureTagSpotlight.innerHTML = "Temperature: " + temperature + "°";
    windSpeedSpotlight.innerHTML = "Wind speed: " + mph;

    if (temperature <= 50 && mph > 3) {

        windChillSpotlight.innerHTML = "Feels like " + windChill + "°"

    }
    else {
        windChillSpotlight.innerHTML = "Wind chill: N/A";
    }



    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }





/*





*/




