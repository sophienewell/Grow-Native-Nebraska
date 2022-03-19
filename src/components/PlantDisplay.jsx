import React from "react";

function PlantDisplay({ plant }) {
  return (
    <div className="center border margin-20 flex-item padding-20 margin-10">
      <h3>{plant.name}</h3>
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
