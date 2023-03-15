import "./NavLinks.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NavLinks = ({ navigation }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [selected, setSelected] = useState("/home");

  useEffect(() => {
    if (selected != "/") {
      if (pathname === "/") {
        setSelected("/home");
      } else {
        setSelected(pathname);
      }
    }
  }, [pathname]);

  const handelSelected = (e) => {
    setSelected(e.target.getAttribute("data-selected"));
  };


  return (
    <div className="navLinks__container">
      <div className="navLinks__container-wrapper">
        {navigation.map((link, index) => (
          <Link
            className={selected === `/${link}` && "active"}
            key={index}
            data-selected={link}
            to={link === "home" ? `/` : `/${link}`}
            onClick={handelSelected}
          >
            <p data-selected={link === "home" ? `/` : `/${link}`}>
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
