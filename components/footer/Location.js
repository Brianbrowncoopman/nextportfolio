import { useState } from "react";

const LocationInfo = () => {
  const [location, setLocation] = useState("");

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=API_KEY`
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
    <div>
      <button onClick={handleLocationClick}>Obtener Ubicación</button>
      <p>Ubicación: {location}</p>
    </div>
  );
};

export default LocationInfo;
