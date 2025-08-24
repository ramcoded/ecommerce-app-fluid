import "../css/styles.css";
import collageImg1 from "../assets/home-img/collage/c1.jpg";
import collageImg2 from "../assets/home-img/collage/c2.jpg";
import collageImg3 from "../assets/home-img/collage/c3.jpg";

function AboutWebsite() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-around flex-wrap items-start gap-50 mx-30">
        <div className="  flex flex-col justify-start items-start">
          <div className="text-3xl font-extrabold w-100">
            WHAT BLANK FLUID IS REALLY ABOUT
          </div>

          <div className=" items-center flex max-w-280">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-10">
        <div className="flex flex-row flex-wrap justify-around gap-2 items-center">
          <div>
            <img
              src={collageImg1}
              className="h-222 w-160 object-center rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-2">
            <img src={collageImg2} className="h-110 w-100 rounded-xl" />
            <img src={collageImg3} className="h-110 w-100 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWebsite;
