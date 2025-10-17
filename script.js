document.getElementById('fetchWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
        .then(response => {
            const weatherData = response.data;
            const result = `<h3>${weatherData.name}</h3>
                            <p>Temperature: ${weatherData.main.temp} °C</p>
                            <p>Weather: ${weatherData.weather[0].description}</p>`;
            document.getElementById('weatherResult').innerHTML = result;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = '<p>City not found</p>';
        });
});