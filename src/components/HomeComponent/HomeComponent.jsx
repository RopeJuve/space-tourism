import "./HomeComponent.css";

const HomeComponent = ({ title, subtitle, description, btnName }) => {
  return (
    <div className="homeComponent__container">
      <div className="homeComponent__container-text-wrapper">
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="homeComponent__container-btn-wrapper">
        <button>{btnName}</button>
      </div>
    </div>
  );
};

export default HomeComponent;
