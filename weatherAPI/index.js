const API_KEY = "7e0d6928eed4d376da50312f8d85e6ca";
// Ask the user for permission to access their current position
navigator.geolocation.getCurrentPosition(success, error, {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
});

const coordsRef = document.getElementById("coords");
const cityRef = document.getElementById("city");
const weatherRef = document.getElementById("weather");

function success({ coords }) {
  console.log("Location obtained", coords);
  coordsRef.innerHTML = `<h1>Your location is lat: ${coords.latitude} & lon: ${coords.longitude}</h1>`;
  getApiData(coords);
}

function error({ message }) {
  coordsRef.innerHTML = `Location not available, reason: ${message}`;
}

//console.log(navigator);
async function getApiData(coords) {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`
    );

    if (data && data.city) {
      // Check if 'city' property is defined
      const cityName = data.city.name;
      cityRef.innerHTML = `<h2>Your location is ${cityName}</h2>`;
    } else {
      // Handle the case where 'city' property is not defined
      cityRef.innerHTML = `<h2>Location name not available</h2>`;
    }

    if (data && data.list && data.list.length >= 5) {
      const fiveDayWeather = data.list.slice(0, 5).map((item) => {
        const iconCode = item.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;
        return `${item.weather[0].description} (${item.weather[0].main})<img src="${iconURL}" alt="Weather Icon"/>`;
      });

      // Join the conditions into a single string with commas
      const weatherMain = fiveDayWeather.join(", ");
      weatherRef.innerHTML = `<h3>The weather is: ${weatherMain}</h3>`;
    } else {
      weatherRef.innerHTML = `<h3>Weather data not available</h3>`;
    }
  } catch (error) {
    console.error(error);
  }
}
