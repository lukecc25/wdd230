const LAT = 40.76088974595105;
const LON = -111.89578175770833;
const APIKEY = "4ebb1a1b87c7bdec14ea2f33276dce29";
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;


function showCurrentWeather(currentWeather) {
  const currentWeatherElt = document.querySelector("#current-weather");
  const temp = currentWeather.main.temp.toFixed(0);
  const description = currentWeather.weather[0].description;
  const humidity = currentWeather.main.humidity;

  const currentSection = document.createElement("section");
  currentSection.innerHTML = `
    <p>Current Temperature: ${temp}&deg;F</p>
    <p>Condition: ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
    <p>Humidity: ${humidity}%</p>
  `;
  currentWeatherElt.append(currentSection);
}

function show9amForecast(forecasts) {
  const weatherElt = document.querySelector("#forecast");

  let temps = forecasts.filter(x => x.dt_txt.indexOf("09:00:00") != -1);

  for (let i = 1; i <= 3; i++) {
    let newsection = document.createElement("section");
    let mydate = temps[i].dt_txt.slice(5, 10);
    let icon = temps[i].weather[0].icon;
    newsection.innerHTML = `<p>${mydate}</p>
      <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather"></p>
      <p>${temps[i].main.temp.toFixed(0)}&deg;F</p>`;
    weatherElt.append(newsection);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();

      showCurrentWeather(data.list[0]);

      show9amForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchForecast();
