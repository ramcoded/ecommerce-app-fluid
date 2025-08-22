import("../css/styles.css");
import { useEffect, useState } from "react";

const productIds = [76, 78, 79];

function Featured() {
  const [featuredImages, setFeaturedImages] = useState([]);

  useEffect(() => {
    const fetchFeaturedImg = async () => {
      try {
        const featuredList = [];
        for (let id of productIds) {
          const result = await fetch(
            `https://api.escuelajs.co/api/v1/products/${id}`
          );
          if (!result.ok) throw new Error(`Failed to fetch product ${id}`);
          const json = await result.json();
          featuredList.push(json);
        }
        setFeaturedImages(featuredList);
      } catch (error) {
        console.error("Could not fetch FeaturedImg", error.message);
      }
    };
    fetchFeaturedImg();
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
                <img
                  src={featured.images[0]}
                  className="h-auto w-70 object-center"
                />
                <h3 className="text-lg font-semibold w-80 justify-center flex">
                  {featured.title}
                </h3>
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
