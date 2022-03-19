import React, { useState } from "react";

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
  ];

  const [sunAmount, setSunAmount] = useState("all");
  const [soilType, setSoilType] = useState("all");
  const [bloomTime, setBloomTime] = useState("all");
  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");

  return (
    <div>
      <h5>
        Use the filters to find native plants that are suitable for your garden
      </h5>
      <form>
        <div>
          <label htmlFor="sunAmount">Sun</label>
          <select
            id="sunAmount"
            value={sunAmount}
            onChange={(e) => setSunAmount(e.target.value)}
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
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="all">All</option>
            <option value="groundCover">Ground cover</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="tall">Tall</option>
          </select>
        </div>
      </form>
      {plantList
        .filter((val) => {
          if (sunAmount === "fullSun") {
            return val.sun === "Full sun";
          } else if (sunAmount === "partSun") {
            return val.sun === "Part sun";
          } else if (sunAmount === "fullShade") {
            return val.sun === "Full shade";
          } else return val;
        })
        .map((val) => {
          console.log(val.name);
        })}
    </div>
  );
}

export default PlantSearchPage;
