import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlantWilt } from "@fortawesome/free-solid-svg-icons";

function PlantDisplay({ plant }) {
  return (
    <div className="center padding-20 margin-10 bg-violet flex-item-box font-karla shadow">
      <h3>{plant.name}</h3>
      <FontAwesomeIcon
        icon={faPlantWilt}
        size="xl"
        style={{ color: `${plant.color}` }}
      />
      <br />
      <br />
      <b>Color:</b> {plant.color}
      <br />
      <b>Height:</b> {plant.height}
      <br />
      <b>Bloom time:</b> {plant.bloomTime}
      <br />
      <b>Soil:</b> {plant.soiltype}
      <br />
      <b>Sun:</b> {plant.sun}
    </div>
  );
}

export default PlantDisplay;
