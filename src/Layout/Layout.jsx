import { Nav } from "../components/NavBar/Nav";
import "./Layout.scss";

const Layout = ({ children }) => {
  return <div className="layout__container">
    <Nav />
    {children}
  </div>;
};

export default Layout;
