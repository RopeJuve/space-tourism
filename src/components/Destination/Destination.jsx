import { useState } from "react";
import "./Destination.css";
import { data } from "../../data";

const Destination = () => {
  const [destination, setDestination] = useState(0);

  return (
    <div className="destinationComponent__container">
      <h2>
        <strong>01 </strong>Pick your destination
      </h2>
      <img src={data.destinations[destination].images.png} alt="" />
    </div>
  );
};

export default Destination;
