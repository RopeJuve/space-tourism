import { useState } from "react";
import "./DestinationComponent.css";
import { data } from "../../data";
import DestinationNav from "./DestinationNav";

const Destination = () => {
  const destinations = ["moon", "mars", "europa", "titan"];
  const [destination, setDestination] = useState(0);
  const planet = data.destinations[destination];

  const handelDestination = (d) => setDestination(d);

  return (
    <div className="destinationComponent__container">
      <div>
        <h2>
          <strong>01 </strong>PICK YOUR DESTINATION
        </h2>
        <img src={planet.images.png} alt="" />
      </div>
      <div className="section-destination">
        <DestinationNav
          links={destinations}
          selected={destination}
          handelDestination={handelDestination}
        />
        <div className="destinationComponent__description">
          <h4>{planet.name.toUpperCase()}</h4>
          <p>{planet.description}</p>
        </div>
        <div className="destinationComponent__distance-travel">
          <div className="distance">
            <h2>AVG. DISTANCE</h2>
            <h3>{planet.distance.toUpperCase()}</h3>
          </div>
          <div className="travel">
            <h2>EST. TRAVEL TIME</h2>
            <h3>{planet.travel.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
