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
    <div className="w-[90%] h-[80vh] mx-auto relative overflow-hidden drop-shadow-2xl">
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
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <img src={slide.img} className="h-full w-full object-cover" />

            {/* Text & Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 lg:px-20 z-10">
              {/* Title with BG Clip */}
              <h2
                className="text-4xl lg:text-7xl font-extrabold uppercase bg-center bg-cover"
        
              >
                {slide.title}
              </h2>

              {/* Description with Glass Effect */}
              <p className="mt-5 text-sm lg:text-lg text-gray-200 rounded-lg shadow-lg max-w-5xl text-left">
                {slide.desc}
              </p>

              {/* Location */}
              <div className="mt-8 flex items-center gap-2 text-lg font-semibold">
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
