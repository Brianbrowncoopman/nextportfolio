import { useState, useEffect } from "react";

const LocationInfo = () => {
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = "aff5876d996c97c8262158e9c76ec99e";
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(weatherApiUrl);
      const data = await response.json();

      if (response.ok) {
        const temp = data.main.temp;
        const weatherDescription = data.weather[0].description;

        setTemperature(temp);
        setWeather(weatherDescription);
      } else {
        console.error("Error fetching weather data:", data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          fetchWeatherData(latitude, longitude);

          fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=aff5876d996c97c8262158e9c76ec99e`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data && data[0] && data[0].name) {
                const city = data[0].name;
                setLocation(city);
              } else {
                console.error("Invalid location data:", data);
              }
            })
            .catch((error) => {
              console.error("Error fetching location:", error);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div>
        <button
          onClick={handleLocationClick}
          className=" btn btn-outline-light mb-1"
        >
          Ubicación
        </button>
        {location} {temperature}°C {weather}
      </div>
    </>
  );
};

export default LocationInfo;
