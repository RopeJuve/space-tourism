import HomeComponent from "../../components/HomeComponent/HomeComponent";
import Layout from "../../Layout/Layout";
import "./Home.scss";

const Home = () => {
  const { title, subtitle, description, btnName } = {
    title: "SPACE",
    subtitle: "SO, YOU WANT TO TRAVEL TO",
    description:
      "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
    btnName: "EXPLORE",
  };
  return (
    <div className="container">
      <Layout>
        <HomeComponent
          title={title}
          subtitle={subtitle}
          description={description}
          btnName={btnName}
        />
      </Layout>
    </div>
  );
};

export default Home;
