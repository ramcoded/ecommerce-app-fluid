import Featured from "../components/Featured";
import HomeCard from "../components/HomeCard";

function Home() {
  return (
    <>
      <div className="mb-50">
        <div className="mt-20">
          <HomeCard />
        </div>

        <div className="mt-50">
          <Featured />
        </div>
      </div>
    </>
  );
}

export default Home;
