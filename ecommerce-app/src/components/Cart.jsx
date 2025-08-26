import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="absolute top-12 right-0 bg-white border border-gray-300 shadow-lg rounded-md w-72 p-4 z-50">
      <h2 className="text-lg font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-sm text-gray-600">No items yet.</p>
      ) : (
        <>
          <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center border border-gray-200 rounded-md p-2"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded mr-3"
                />
                <div className="flex flex-col text-sm">
                  <span className="font-medium line-clamp-1">{item.title}</span>
                  <span className="font-bold">${item.price}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-3 flex justify-between items-center text-sm">
            <span className="font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
