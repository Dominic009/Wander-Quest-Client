import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoLocationSharp } from "react-icons/io5";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
const Banner = () => {
  return (
    <div>
      <div>
        <Swiper
          className="rounded-xl"
          spaceBetween={100}
          speed={2500}
          centeredSlides={true}
          loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
          navigation={false}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide className="shadow-lg">
            <div className="lg:h-[600px]">
              <div className="absolute bg-gradient-to-r from-gray-900 to-transparent h-full w-[70%]">
                <p className="mt-[10%] lg:mt-[20%] px-4 md:px-12 md:text-3xl lg:text-6xl text-white text-opacity-80 font-bold mb-5 font-lobster">
                  How Much Green <br /> Your Eyes Can Handle?
                </p>
                <p className="text-gray-200 px-4 w-[70%] md:px-12 lg:text-lg text-sm font-rajdhani leading-0 text-opacity-70">
                  Our eyes are naturally drawn to the lush greenery of forests,
                  meadows, and gardens, which not only captivates our attention
                  but also has a soothing and rejuvenating effect on our minds
                  and bodies. Studies have shown that exposure to green spaces
                  can reduce stress, improve mood, and enhance cognitive
                  function.
                </p>
              </div>
              <img
                src={banner1}
                className="h-[400px] lg:h-[700px] w-full rounded-e-xl"
              />
            </div>
            <div className="text-gray-300 z-50 text-2xl flex justify-end items-center font-bold mb-5 mr-5">
              <IoLocationSharp></IoLocationSharp>
              <p>Luzos Island, Philippines</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-lg">
            <div className="lg:h-[600px]">
              <div className="absolute bg-gradient-to-r from-gray-900 to-transparent h-full w-[70%]">
                <p className="mt-[10%] lg:mt-[20%] px-4 md:px-12 md:text-3xl lg:text-6xl text-white font-bold mb-5 font-lobster  text-opacity-80">
                  Into The Caves <br /> of Paradise
                </p>
                <p className="text-gray-200 px-4 w-[70%] md:px-12 lg:text-lg text-sm font-rajdhani leading-0 text-opacity-70">
                Into the Caves of Paradise beckons a journey into the hidden wonders of natures sanctuaries. These caverns, veiled in mystery and ancient tales, offer a glimpse into a world untouched by time. As stalactites drip like liquid crystal and stalagmites rise like silent sentinels, each chamber tells a story of geological marvels forged over millennia.
                </p>
              </div>
              <img
                src={banner2}
                className="h-[400px] lg:h-[700px] w-full rounded-e-xl"
              />
            </div>
            <div className="text-gray-300 z-50 text-2xl flex justify-end items-center font-bold mb-5 mr-5">
              <IoLocationSharp></IoLocationSharp>
              <p>Batu Caves, Malaysia</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-lg">
            <div className="lg:h-[600px]">
              <div className="absolute bg-gradient-to-r from-gray-900 to-transparent h-full w-[70%] text-opacity-75">
                <p className="mt-[10%] lg:mt-[20%] px-4 md:px-12 md:text-3xl lg:text-6xl text-white font-bold mb-5 font-lobster text-opacity-80">
                  Place of Pleasure
                </p>
                <p className="text-gray-200 px-4 w-[70%] md:px-12 lg:text-lg text-sm font-rajdhani leading-0 text-opacity-">
                  Step into a world of sophistication and style with our
                  luxurious accommodations, <br /> where impeccable design,
                  luxurious amenities, and unparalleled service come together{" "}
                  <br /> to create an unforgettable stay.
                </p>
              </div>
              <img
                src={banner3}
                className="h-[400px] lg:h-[700px] w-full rounded-e-xl"
              />
            </div>
            <div className="text-gray-300 z-50 text-2xl flex justify-end items-center font-bold mb-5 mr-5">
              <IoLocationSharp></IoLocationSharp>
              <p>Old Bagan, Myanmar</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
