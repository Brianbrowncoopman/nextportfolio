import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import LocationInfo from "./footer/Location";
import Hours from "./footer/Hours";

const Footer = () => {
  /*useEffect(() => {
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
  }, []);*/

  return (
    <div className="container py-1">
      <div className="row justify-content-center text-center">
        <div className="col-md-12">
          <h3>&copy; Brian Brown</h3>
          <p>2022-{new Date().getFullYear()}</p>
          <p>Todos los derechos reservados</p>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-2">
        <div className="col-md-12">
          <LocationInfo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
