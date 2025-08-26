import("../css/styles.css");
import { useEffect, useState } from "react";

const productIds = [77, 78, 79];

function Featured() {
  const [featuredImages, setFeaturedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const featuredList = [];
      setLoading(true);
      try {
        for (let id of productIds) {
          const result = await fetch(
            `https://api.escuelajs.co/api/v1/products/${id}`
          );
          if (!result.ok)
            throw new Error(`Could not fetch featured product: ${id}`);
          const json = await result.json();
          featuredList.push(json);
        }
        setFeaturedImages(featuredList);
      } catch (error) {
        console.error("Could not fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col w-full max-w-6xl">
        <h1 className="text-3xl font-extrabold mb-2">FEATURED ITEMS</h1>
        <p className="text-sm text-gray-600 mb-8 max-w-xl">
          Handpicked favorites that blend quality, style, and everyday comfort.
          These featured pieces are loved by our community and curated to
          inspire your next look.
        </p>

        {loading ? (
          <p className="text-lg font-medium text-gray-500">
            Loading featured products...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredImages.map((featured) => (
              <div
                key={featured.id}
                className="border border-gray-200 p-4 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="w-full aspect-square overflow-hidden rounded-md">
                  <img
                    src={featured.images[0]}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center">
                  {featured.title}
                </h3>
                <h4 className="text-base text-gray-700 mt-1 text-center">
                  ${featured.price}
                </h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Featured;
