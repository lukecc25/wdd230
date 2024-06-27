const fetchWeather = async () => {
    try {
        const locationInput = "Eikelandsosen, Norway"; 
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=ba538f3aec9d44ad9a6213010241305&q=${encodeURIComponent(locationInput)}`;
        console.log("API URL:", apiUrl); 
        const response = await fetch(apiUrl);
        console.log("API Response Status:", response.status); 
        const data = await response.json();
        console.log("API Response Data:", data); 

        if (response.ok) {
            updateWeatherInfo(data);
        } else {
            console.error("API Error:", data.error.message); 
            throw new Error(data.error.message);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
    }
};

const updateWeatherInfo = (data) => {
    console.log("Weather Data:", data); 
    const weatherInfo = document.querySelector(".weatherInfo");
    weatherInfo.innerHTML = `
        <div class="weather-box">
            <h3>Temperature:</h3>
            <input type="text" id="temperature" name="temperature" value="${data.current.temp_f}°F" disabled>
        </div>
        <div class="weather-box">
            <h3>Weather:</h3>
            <input type="text" id="weatherCondition" name="weatherCondition" value="${data.current.condition.text}" disabled>
        </div>
        <div class="weather-box">
            <h3>Wind Speed:</h3>
            <input type="text" id="windSpeed" name="windSpeed" value="${data.current.wind_mph} mph" disabled>
        </div>
        <div class="weather-box">
            <h3>Wind Chill:</h3>
            <input type="text" id="windSpeed" name="windSpeed" value="${data.current.wind_mph} mph" disabled>
        </div>
    `;
};

fetchWeather(); 





