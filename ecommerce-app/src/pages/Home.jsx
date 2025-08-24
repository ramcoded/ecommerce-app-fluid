import Featured from "../components/Featured";
import HomeCard from "../components/HomeCard";
import HomeShop from "../components/HomeShop";

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
          <HomeShop />
        </div>
      </div>
    </>
  );
}

export default Home;
