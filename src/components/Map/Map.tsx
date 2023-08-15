import React from "react";
import "./Map.css";
import mapImage from "../../images/map.png";

export default function Map() {
  return (
    <section className="map">
      <h2 className="section-title">
        You can use our services anywhere in the world
      </h2>
      <p className="map__text">
        Withdraw and transfer money online through our application
      </p>
      <img className="map__img" src={mapImage} alt="map image" />
    </section>
  );
}
