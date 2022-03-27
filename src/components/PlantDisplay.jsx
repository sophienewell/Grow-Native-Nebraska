import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlantWilt } from "@fortawesome/free-solid-svg-icons";

function PlantDisplay({ plant }) {
  return (
    <div className="center margin-20 flex-item padding-20 margin-10 bg-violet">
      <h3>{plant.name}</h3>
      <FontAwesomeIcon
        icon={faPlantWilt}
        size="xl"
        style={{ color: `${plant.color}` }}
      />
      <h5>
        Color: {plant.color}
        <br />
        Height: {plant.height}
        <br />
        Bloom time: {plant.bloomTime}
        <br />
        Soil: {plant.soiltype}
        <br />
        Sun: {plant.sun}
      </h5>
    </div>
  );
}

export default PlantDisplay;
