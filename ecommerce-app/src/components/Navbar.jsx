import "../css/styles.css";
import cartIcon from "../assets/navbar-img/cart.png";
import fluidIcon from "../assets/navbar-img/logo.png";

function Navbar() {
  return (
    <div className="flex flex-row justify-around items-center mt-10 mx-20 flex-wrap">
      <div className="text-3xl font-extrabold flex flex-row flex-wrap items-center">
        <img src={fluidIcon} className="h-5" />_ __Fluid
      </div>
      <div className="flex flex-row justify-center items-center font-semibold gap-5 tracking-tighter flex-wrap">
        <div>SHOP</div>
        <div>MEN</div>
        <div>WOMEN</div>
        <div>CONTACT</div>
        <img className="h-7 ml-5" src={cartIcon} />
      </div>
    </div>
  );
}

export default Navbar;
