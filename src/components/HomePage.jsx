import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import pink from "./images/pink.png";
import yellowstripes from "./images/yellowstripes.png";
import darkblue from "./images/darkblue.png";
import violet from "./images/violet.png";
import salmon from "./images/salmon.png";
import green from "./images/green.png";
import black from "./images/black.png";
import Menu from "./Menu";

function HomePage() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <body className="site">
      <main className="main">
        <div className="container">
          <MediaQuery minWidth={800}>
            <div className="heading-desktop">
              <h1>Grow Native Nebraska</h1>
              <h2>Support your local environment. </h2>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={799}>
            <div className="heading-mobile">
              <h1>Grow Native Nebraska</h1>
              <h2>Support your local environment. </h2>
            </div>
          </MediaQuery>
          <div className="grid-container" aria-hidden="true">
            <div className="grid" aria-hidden="true">
              <div className="grid__item grid__item--pink">
                <img
                  src={pink}
                  alt="Pink Square"
                  style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                />
              </div>
              <div className="grid__item grid__item--ystripes">
                <img src={yellowstripes} alt="Yellow Stripes" />
              </div>
              <div className="grid__item grid__item--dblue">
                <img
                  src={darkblue}
                  alt="Dark Blue"
                  style={{ transform: `translateY(${offsetY * 0.4}px)` }}
                />
              </div>
              <div className="grid__item grid__item--violet">
                <img
                  src={violet}
                  alt="Violet Flower"
                  style={{ transform: `translateY(${offsetY * 0.2}px)` }}
                />
              </div>
              <div className="grid__item grid__item--salmon">
                <img
                  src={salmon}
                  alt="Salmon Flowers"
                  style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                />
              </div>
              <div className="grid__item grid__item--green">
                <img src={green} alt="Green Flowers" />
              </div>
              <div className="grid__item grid__item--black">
                <img
                  src={black}
                  alt="Flower with bee"
                  style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default HomePage;
