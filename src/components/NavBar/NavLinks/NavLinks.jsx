import "./NavLinks.css";
import { useLocation, Link } from "react-router-dom";

const NavLinks = ({display, navLinksDisplay}) => {
  let location = useLocation();
  console.log(location.pathname);
  const classN = location.pathname === `/crew` ? "active" : "";
  console.log(navLinksDisplay);
  return (
    <div className={navLinksDisplay ? "navLinks__container active-navLinks": 'navLinks__container'} >
      <div className="navLinks__container-wrapper">
        {["home", "destinations", "crew", "technology"].map((link, index) => (
          <Link
            className={"active"}
            key={index}
            to={link === "home" ? `/` : `/${link}`}
          >
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

export default NavLinks;