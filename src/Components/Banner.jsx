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
    <div className="w-[90%] h-[80vh] mx-auto relative overflow-hidden drop-shadow-2xl border border-green-700 rounded-lg p-3">
      <Swiper
        className="h-full rounded-lg"
        spaceBetween={20}
        speed={2000}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
      >
        {[
          {
            img: banner1,
            title: "Green Heaven",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore id deserunt molestiae recusandae ipsum non porro dolore! Totam reiciendis perferendis velit distinctio cum sit itaque, necessitatibus sapiente repudiandae nisi nobis sunt, voluptas dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore id deserunt molestiae recusandae ipsum non porro dolore! Totam reiciendis perferendis velit distinctio cum sit itaque, necessitatibus sapiente repudiandae nisi nobis sunt, voluptas dolorum.",
            location: "Luzon Island, Philippines",
          },
          {
            img: banner2,
            title: "Into The Caves of Paradise",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore id deserunt molestiae recusandae ipsum non porro dolore! Totam reiciendis perferendis velit distinctio cum sit itaque, necessitatibus sapiente repudiandae nisi nobis sunt, voluptas dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore id deserunt molestiae recusandae ipsum non porro dolore! Totam reiciendis perferendis velit distinctio cum sit itaque, necessitatibus sapiente repudiandae nisi nobis sunt, voluptas dolorum.",
            location: "Batu Caves, Malaysia",
          },
          {
            img: banner3,
            title: "Place of Pleasure",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore id deserunt molestiae recusandae ipsum non porro dolore! Totam reiciendis perferendis velit distinctio cum sit itaque, necessitatibus sapiente repudiandae nisi nobis sunt, voluptas dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore id deserunt molestiae recusandae ipsum non porro dolore! Totam reiciendis perferendis velit distinctio cum sit itaque, necessitatibus sapiente repudiandae nisi nobis sunt, voluptas dolorum.",
            location: "Old Bagan, Myanmar",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image with Dark Overlay */}
            <img src={slide.img} className="h-full w-full object-cover relative" />

            {/* Text & Overlay */}
            <div className="absolute top-0 bottom-0 flex flex-col justify-center items-center text-white bg-gradient-to-r from-gray-950/70 from-70% to-transparent lg:w-[60%] p-4">
              {/* Title */}
              <h2 className="text-4xl lg:text-7xl text-left font-extrabold uppercase w-full">
                {slide.title}
              </h2>

              {/* Description with Glass Effect */}
              <p className="mt-5 text-sm lg:text-lg font-semibold text-gray-400 text-left pr-48">
                {slide.desc}
              </p>

              {/* Location */}
              <div className="mt-8 flex items-center gap-2 text-lg font-semibold w-full">
                <IoLocationSharp className="text-red-400 text-2xl" />
                <p>{slide.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
