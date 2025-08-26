import { useState, useEffect, useRef, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Toast from "../components/Toast";
import "../css/styles.css";

function WomenPage() {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const itemsPerPage = 30;

  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const result = await fetch("https://api.escuelajs.co/api/v1/products");
        const json = await result.json();
        setProducts(json);
      } catch (error) {
        console.error("Could not fetch products", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="flex justify-center px-4 pt-24">
      <div className="flex flex-col w-full max-w-6xl">
        <h1 ref={sectionRef} className="text-3xl font-extrabold mb-2">
          WOMEN'S SECTION
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Explore our curated selection of products for women.
        </p>

        {loading ? (
          <p className="text-lg font-medium text-gray-500">
            Loading products...
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
              {currentItems.map((product) => (
                <div
                  key={product.id}
                  className="group relative border border-gray-200 p-2 flex flex-col items-center hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-md group">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 text-sm font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="mt-2 text-sm text-center font-medium line-clamp-2">
                    {product.title}
                  </div>
                  <div className="font-bold text-sm mt-1">${product.price}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}

        {showToast && <Toast message="Added to cart successfully!" />}
      </div>
    </div>
  );
}

export default WomenPage;
