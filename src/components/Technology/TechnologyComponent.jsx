import "./TechnologyComponent.css";
import { data } from "../../data";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const TechnologyComponent = () => {
  const [technology, setTechnology] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 62.5em)",
  });

  const currentTechnology = data.technology[technology];
  return (
    <div className="technologyComponent__container">
      <h2>
        <span>03 </span> SPACE LAUNCH 101
      </h2>
      <div className="technologyComponent__container-content">
        <img
          src={
            isDesktopOrLaptop
              ? currentTechnology.images.portrait
              : currentTechnology.images.landscape
          }
          alt=""
        />
        <div className="technologyComponent__container-content-description">
          <div className="content-buttons">
            {data.technology.map((_, i) => (
              <button
                className={technology == i ? "selected" : ""}
                key={i}
                onClick={() => setTechnology(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div className="content-text">
            <div className="content-heading">
              <h6>THE TERMINOLOGY...</h6>
              <h5>{currentTechnology.name.toUpperCase()}</h5>
            </div>
            <p>{currentTechnology.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyComponent;
