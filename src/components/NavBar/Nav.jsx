import icon from "../../assets/shared/logo.svg";
import "./Nav.css";
import NavLinks from "./NavLinks/NavLinks";
export const Nav = () => {
  return (
    <div className="nav__container">
      <img src={icon} alt="" />
      <NavLinks />
      <div className="nav__container-hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
