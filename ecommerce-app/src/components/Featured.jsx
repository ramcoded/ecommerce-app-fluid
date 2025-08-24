import("../css/styles.css");
import { useEffect, useState } from "react";

const productIds = [77, 78, 79];

function Featured() {
  const [featuredImages, setFeaturedImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const featuredList = [];
      try {
        for (let id of productIds) {
          const result = await fetch(
            `https://api.escuelajs.co/api/v1/products/${id}`
          );
          if (!result.ok)
            throw new Error(`Could not fetch featured item: ${id}`);
          const json = await result.json();
          featuredList.push(json);
        }
        setFeaturedImages(featuredList);
      } catch (error) {
        console.error("Could not fetch data", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-row justify-center items-start mx-50">
      <div className="flex flex-col">
        <div className="text-3xl font-extrabold">FEATURED ITEMS</div>
        <div className="mb-10">
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center">
          {featuredImages.map((featured, index) => (
            <div
              key={featured.id}
              className="flex flex-row flex-wrap justify-center"
            >
              <div className="flex flex-col justify-center items-center mb-20">
                <div>
                  <img
                    src={featured.images[0]}
                    className="h-80 w-80 object-center rounded-xl mx-5 max-w-60 max-h-60"
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <h3 className="text-lg font-semibold w-80 flex mt-5 ">
                    {featured.title}
                  </h3>
                  <h4 className="text-base w-80">${featured.price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Featured;
