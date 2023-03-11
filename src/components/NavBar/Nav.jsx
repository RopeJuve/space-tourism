import icon from "../../assets/shared/logo.svg";
import "./Nav.scss";
export const Nav = () => {
  return (
    <div className="nav__container">
      <img src={icon} alt="" />
      <div className="nav__container-hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
