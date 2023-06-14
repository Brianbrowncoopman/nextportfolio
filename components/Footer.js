import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import LocationInfo from "./footer/Location";

const Footer = () => {
  const [time, setTime] = useState("");

  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    // Obtener la hora actual
    const getCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setTime(`${hours}:${minutes}`);
    };

    // Obtener la ubicación del usuario

    // Obtener la temperatura y el clima actual
    const getWeather = () => {
      // Implementa aquí la lógica para obtener la temperatura y el clima actual.
      // Puedes almacenar la temperatura en el estado setTemperature y el clima en el estado setWeather.
    };

    getCurrentTime();

    getWeather();
  }, []);

  return (
    <div className="container py-3">
      <div>
        <h3>&copy; Brian Brown</h3>
        <p>2022-{new Date().getFullYear()}</p>
        <p>Todos los derechos reservados</p>
      </div>
      <div className="row">
        <div className="col">
          <p>
            <FaClock /> Hora: {time}
          </p>
        </div>
        <div className="col">
          <LocationInfo />
        </div>
        <div className="col">
          <p>
            Temperatura: {temperature} °C - Clima: {weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
