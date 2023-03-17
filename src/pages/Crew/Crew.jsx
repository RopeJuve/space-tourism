import "./Crew.css";
import Layout from "../../Layout/Layout";
import CrewComponent from "../../components/Crew/CrewComponent";

const Crew = () => {
  return (
    <div className="crew__container">
      <Layout>
        <CrewComponent />
      </Layout>
    </div>
  );
};

export default Crew;
