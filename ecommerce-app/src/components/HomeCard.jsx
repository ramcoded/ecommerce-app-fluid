import("../css/styles.css");

function HomeCard() {
  return (
    <div className="flex justify-center items-center mt-10 flex-wrap">
      <div className="bg-[url('../assets/home-img/woman.jpg')] mx-20 object-center flex flex-col justify-end p-20 bg-cover w-250 h-150 bg-center rounded-xl flex-wrap">
        <div className="text-white text-5xl font-extrabold">
          Effortless Style, Timeless Grace
        </div>
        <div className="tracking-tighter text-gray-200 text-lg mt-2">
          Discover curated fashion that blends simplicity with bold elegance.
          Designed for women who move with confidence and live with intention.
        </div>
        <div>
          <button className="bg-black text-white px-10 py-2 font-extrabold rounded-full mt-4">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
