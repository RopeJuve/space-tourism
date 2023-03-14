import { Link } from "react-router-dom";
import "./NavModal.css";

const NavModal = ({ display }) => {
  return (
    <div
      className={
        display ? "navModal__container-visible" : "navModal__container"
      }
    >
      <div className="navModal__container-wrapper">
        {["home", "destinations", "crew", "technology"].map((link, index) => (
          <Link key={index} to={link === "home" ? `/` : `/${link}`}>
            <p>
              <strong>0{index + 1} </strong>
              {link.toUpperCase()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavModal;
