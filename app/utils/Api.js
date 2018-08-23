const api_key = '3b6381de8a2843eb90d69240dc9a8cc7';

async function getCurrentWeather(city) {
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=accurate&APPID=${api_key}`;
	const response = await fetch(url).catch(handleError);
	return response.json();
}

export async function getWeatherData(city) {
	const response = await getCurrentWeather(city);
	return {
		temp: {
			min_temp: response.main.temp_min,
			max_temp: response.main.temp_max,
			humidity: response.main.humidity,
			desc: 		response.weather[0].main,
		},
		icon: response.weather[0].icon
	}
}

const handleError = (error) => {
	console.warn(error)
	return null;
}