import { useState } from "react";
import "../css/styles.css";
import cartIcon from "../assets/navbar-img/cart.png";
import fluidIcon from "../assets/navbar-img/logo.png";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex flex-row justify-around items-center py-4 px-20 flex-wrap">
      <Link
        to="/"
        className="text-3xl font-extrabold flex flex-row items-center gap-2"
      >
        <img src={fluidIcon} className="h-5" alt="Logo" />_ __Fluid
      </Link>

      <div className="relative flex flex-row justify-center items-center font-semibold gap-5 tracking-tighter flex-wrap">
        <Link to="/" className="hover:text-gray-500">
          SHOP
        </Link>
        <Link to="/men" className="hover:text-gray-500">
          MEN
        </Link>
        <Link to="/women" className="hover:text-gray-500">
          WOMEN
        </Link>
        <Link to="/contact" className="hover:text-gray-500">
          CONTACT
        </Link>

        <img
          className="h-7 ml-5 cursor-pointer"
          src={cartIcon}
          alt="Cart"
          onClick={toggleCart}
        />

        {showCart && <Cart />}
      </div>
    </div>
  );
}

export default Navbar;
