import("../css/styles.css");

function HomeCard() {
  return (
    <div className="flex justify-center items-center mt-10 flex-wrap">
      <div className="bg-[url('../assets/home-img/woman.jpg')] mx-20 object-center flex flex-col justify-end p-20 bg-cover w-250 h-150 bg-center rounded-xl flex-wrap">
        <div className="text-white text-5xl font-extrabold">
          SIMPLE ELEGANT CULTURE
        </div>
        <div className="tracking-tighter text-gray-200 text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <div>
          <button className="bg-black text-white px-10 py-2 font-extrabold rounded-full mt-4">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
