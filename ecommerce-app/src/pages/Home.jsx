import Featured from "../components/Featured";
import HomeCard from "../components/HomeCard";
import AboutWebsite from "../components/AboutWebsite";

function Home() {
  return (
    <>
      <div className="mb-50">
        <div className="mt-20">
          <HomeCard />
        </div>

        <div className="mt-30">
          <Featured />
        </div>

        <div className="mt-20">
          <AboutWebsite />
        </div>
      </div>
    </>
  );
}

export default Home;
