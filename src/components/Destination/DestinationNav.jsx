import "./DestinationComponent.css";

const DestinationNav = ({ links, selected, handelDestination }) => {
  return (
    <div className="destinationNav__container">
      {links.map((link, index) => (
        <div
          key={index}
          className={
            selected == index
              ? "destinationNav__link active-link"
              : "destinationNav__link"
          }
          data-destination={index}
          onClick={(e) =>
            handelDestination(e.target.getAttribute("data-destination"))
          }
        >
          {link.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default DestinationNav;
