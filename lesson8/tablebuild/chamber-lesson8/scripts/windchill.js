let mph = 14;
let temperature = 34;
let windChillNumber = Math.round(35.74 + 0.6215 * temperature - 35.74 * mph ** 0.16 + 0.4275 * temperature * mph ** 0.16);

//All instances of 74 are just a placeholder temperature I inserted. 
//All instances of 14 are a mph I inserted as well.


let windChill = document.getElementById("wind-chill");
let temperatureTag = document.getElementById("temperature");
let windSpeed = document.getElementById("mph");

temperatureTag.innerHTML = "Temperature: " + temperature + "°";
windSpeed.innerHTML = "Wind speed: " + mph;

if (temperature <= 50 && mph > 3) {

windChill.innerHTML = "Feels like " + windChillNumber + "°"

}
else {
    windChill.innerHTML = "Feels like " + temperature + "°";;
}

let windChillSpotlight = document.getElementById("wind-chill-spotlight");
let temperatureTagSpotlight = document.getElementById("temperature-spotlight");
let windSpeedSpotlight = document.getElementById("mph-spotlight");

temperatureTagSpotlight.innerHTML = "Temperature: " + temperature + "°";
windSpeedSpotlight.innerHTML = "Wind speed: " + mph;

if (temperature <= 50 && mph > 3) {

    windChillSpotlight.innerHTML = "Feels like " + windChillNumber + "°"

}
else {
    windChillSpotlight.innerHTML = "Feels like " + temperature + "°";;
}


/*Convert the logo to webmp
convert hero images using the <source> and <picture> tag
(optional) add a favicon
*/