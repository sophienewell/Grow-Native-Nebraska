import React, { useState } from "react";
import PlantDisplay from "./PlantDisplay";

function PlantSearchPage() {
  //Plant data
  const plantList = [
    {
      name: "Wild Strawberry",
      bloomTime: "Spring",
      color: "White",
      height: "Ground cover",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Golden Alexanders",
      bloomTime: "Spring",
      color: "Yellow",
      height: "Short",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Blue Wild Indigo",
      bloomTime: "Spring",
      color: "Blue",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Early Sunflower",
      bloomTime: "Summer",
      color: "Yellow",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Swamp Milkweed",
      bloomTime: "Summer",
      color: "Pink",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Purple Coneflower",
      bloomTime: "Summer",
      color: "Purple",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Wild Bergamot",
      bloomTime: "Summer",
      color: "Pink",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Blue Vervain",
      bloomTime: "Common Ironweed",
      color: "Purple",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Common Ironweed",
      bloomTime: "Summer",
      color: "Purple",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Prairie Blazing Star",
      bloomTime: "Summer",
      color: "Purple",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Rose Mallow",
      bloomTime: "Summer",
      color: "White",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Cardinal Flower",
      bloomTime: "Summer",
      color: "Red",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Joe Pye Weed",
      bloomTime: "Summer",
      color: "Pink",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Stiff Goldenrod",
      bloomTime: "Fall",
      color: "Yellow",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "Sneezeweed",
      bloomTime: "Fall",
      color: "Yellow",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    {
      name: "New England Aster",
      bloomTime: "Fall",
      color: "Purple",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Wet",
    },
    //Full sun, medium soil
    {
      name: "Prairie Phlox",
      bloomTime: "Spring",
      color: "Pink",
      height: "Short",
      sun: "Full sun",
      soiltype: "Medium",
    },

    //Full sun, dry soil
    {
      name: "Prairie Pussytoes",
      bloomTime: "Spring",
      color: "White",
      height: "Ground cover",
      sun: "Full sun",
      soiltype: "Dry",
    },
    //Partial sun, Wet soil
    {
      name: "Calico Aster",
      bloomTime: "Fall",
      color: "White",
      height: "Medium",
      sun: "Partial sun",
      soiltype: "Wet",
    },
    //Partial sun, Medium soil
    {
      name: "Wild Geranium",
      bloomTime: "Spring",
      color: "Pink",
      height: "Short",
      sun: "Partial sun",
      soiltype: "Medium",
    },
    //Partial sun, Dry soil
    {
      name: "Columbine",
      bloomTime: "Spring",
      color: "Red",
      height: "Medium",
      sun: "Full sun",
      soiltype: "Dry",
    },
    //Full shade, Wet soil
    {
      name: "Virginia Bluebells",
      bloomTime: "Spring",
      color: "Blue",
      height: "Short",
      sun: "Full shade",
      soiltype: "Wet",
    },
    //Full shade, medium soil
    {
      name: "Hairy Beardtongue",
      bloomTime: "Spring",
      color: "White",
      height: "Medium",
      sun: "Full shade",
      soiltype: "Medium",
    },
    //Full shade, dry soil
    {
      name: "Jacob's Ladder",
      bloomTime: "Spring",
      color: "White",
      height: "Short",
      sun: "Full shade",
      soiltype: "dry",
    },
  ];

  const [sunAmount, setSunAmount] = useState("all");
  const [soilType, setSoilType] = useState("all");
  const [bloomTime, setBloomTime] = useState("all");
  const [color, setColor] = useState("all");
  const [height, setHeight] = useState("all");

  return (
    <div>
      <h5 className="center">
        Use the filters to find native plants that are suitable for your garden
      </h5>
      <form className="center margin-10">
        <div>
          <label htmlFor="sunAmount">Sun</label>
          <select
            id="sunAmount"
            value={sunAmount}
            onChange={(e) => setSunAmount(e.target.value)}
            className="margin-10"
          >
            <option value="all">All</option>
            <option value="fullSun">Full sun</option>
            <option value="partSun">Partial sun</option>
            <option value="fullShade">Full shade</option>
          </select>
          <br />
          <label htmlFor="soilType">Soil type</label>
          <select
            id="soilType"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            className="margin-10"
          >
            <option value="all">All</option>
            <option value="wet">Wet</option>
            <option value="medium">Medium</option>
            <option value="dry">Dry</option>
          </select>
          <br />
          <label htmlFor="bloomTime">Bloom Time</label>
          <select
            id="bloomTime"
            value={bloomTime}
            onChange={(e) => setBloomTime(e.target.value)}
            className="margin-10"
          >
            <option value="all">All</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
          </select>
          <br />
          <label htmlFor="color">Color</label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="margin-10"
          >
            <option value="all">All</option>
            <option value="yellow">Yellow</option>
            <option value="white">White</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
          <br />
          <label htmlFor="size">Height</label>
          <select
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="margin-10"
          >
            <option value="all">All</option>
            <option value="groundCover">Ground cover</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="tall">Tall</option>
          </select>
        </div>
      </form>
      <div className="flex-container">
        {plantList
          //filter by sun amount
          .filter((val) => {
            if (sunAmount === "fullSun") {
              return val.sun === "Full sun";
            } else if (sunAmount === "partSun") {
              return val.sun === "Partial sun";
            } else if (sunAmount === "fullShade") {
              return val.sun === "Full shade";
            } else return val;
          })
          //filter by soil type
          .filter((val) => {
            if (soilType === "wet") {
              return val.soiltype === "Wet";
            } else if (soilType === "medium") {
              return val.soiltype === "Medium";
            } else if (soilType === "dry") {
              return val.soiltype === "Dry";
            } else return val;
          })
          //filter by bloom time
          .filter((val) => {
            if (bloomTime === "spring") {
              return val.bloomTime === "Spring";
            } else if (bloomTime === "summer") {
              return val.bloomTime === "Summer";
            } else if (bloomTime === "fall") {
              return val.bloomTime === "Fall";
            } else return val;
          })
          //filter by flower color
          .filter((val) => {
            if (color === "yellow") {
              return val.color === "Yellow";
            } else if (color === "white") {
              return val.color === "White";
            } else if (color === "purple") {
              return val.color === "Purple";
            } else if (color === "red") {
              return val.color === "Red";
            } else if (color === "pink") {
              return val.color === "Pink";
            } else if (color === "blue") {
              return val.color === "Blue";
            } else return val;
          })
          //filter by height
          .filter((val) => {
            if (height === "groundCover") {
              return val.height === "Ground cover";
            } else if (height === "short") {
              return val.height === "Short";
            } else if (height === "medium") {
              return val.height === "Medium";
            } else if (height === "tall") {
              return val.height === "Tall";
            } else return val;
          })
          .map((val) => (
            <PlantDisplay key={val.name} plant={val} />
          ))}
      </div>
    </div>
  );
}

export default PlantSearchPage;
