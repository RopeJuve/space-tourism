import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../../public/assets/shared/logo.svg";
import "./Nav.css";
import NavLinks from "./NavLinks/NavLinks";
import NavModal from "./NavModal/NavModal";

export const Nav = () => {
  const navigation = ["home", "destinations", "crew", "technology"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav__container">
      <Link to="/">
        <img src={icon} alt="" />
      </Link>
      <div className="line"></div>
      <NavLinks navigation={navigation} />
      <div
        className={
          isOpen ? "nav__container-hamburger open" : "nav__container-hamburger"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavModal display={isOpen} />
    </div>
  );
};
