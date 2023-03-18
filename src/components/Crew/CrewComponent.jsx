import "./CrewComponent.css";
import { data } from "../../data";
import { useState } from "react";

const CrewComponent = () => {
  const [crew, setCrew] = useState(0);

  const crewMember = data.crew[crew];

  return (
    <div className="crewComponent__container">
      <h2>
        <span>02 </span> MEET YOUR CREW
      </h2>
      <div className="crewComponent__content">
        <div className="crewComponent__content-crew-img">
          <img src={crewMember.images.png} alt="" />
        </div>
        <div className="crewComponent__content-crew-description">
          <div className="dots">
            {data.crew.map((_, i) => (
              <button
                className={crew == i ? "selected" : ""}
                key={i}
                data-crew={i}
                onClick={(e) => setCrew(e.target.getAttribute("data-crew"))}
              />
            ))}
          </div>
          <div className="crew-description">
            <div className="heading">
              <h6>{crewMember.role.toUpperCase()}</h6>
              <h5>{crewMember.name.toUpperCase()}</h5>
            </div>
            <p>{crewMember.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewComponent;
