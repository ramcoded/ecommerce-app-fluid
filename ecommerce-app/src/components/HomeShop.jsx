import { useState, useEffect } from "react";
import "../css/styles.css";

function HomeShop() {
  const AllProductsUrl = "https://api.escuelajs.co/api/v1/products";
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProduct = async () => {
      setLoading(true);

      try {
        const result = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const json = await result.json();
        console.log(json);
        setAllProducts(json);
      } catch (error) {
        console.error("Could not fetch product", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProduct();
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-center items-center mb-10 mx-40">
        <h1 className="text-3xl font-extrabold">BROWSE PRODUCTS</h1>
      </div>
      {loading ? (
        <p>Loading all products...</p>
      ) : (
        <div className="flex flex-row flex-wrap mx-40 gap-20 justify-center items-start">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-start items-evenly"
            >
              <img
                src={product.images[0]}
                className="h-50 w-50 rounded-lg object-center max-w-60 max-h-60"
              />
              <div className="max-w-50">{product.title}</div>
              <div>${product.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeShop;
