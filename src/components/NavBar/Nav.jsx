import { useState } from "react";
import icon from "../../assets/shared/logo.svg";
import "./Nav.css";
import NavLinks from "./NavLinks/NavLinks";
import NavModal from "./NavModal/NavModal";

export const Nav = () => {
  const navigation = ["home", "destinations", "crew", "technology"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav__container">
      <img src={icon} alt="" />
      <NavLinks navigation={navigation} />
      <div
        className="nav__container-hamburger"
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
