// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { IoLocationSharp } from "react-icons/io5";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const slides = [
  {
    img: banner1,
    title: "Green Heaven",
    desc: "Breathe in the serenity of nature. Unwind in the lush greens and let your spirit roam free.",
    location: "Luzon Island, Philippines",
  },
  {
    img: banner2,
    title: "Caves of Paradise",
    desc: "Venture deep into hidden worlds where light dances on stone. Discover timeless mysteries.",
    location: "Batu Caves, Malaysia",
  },
  {
    img: banner3,
    title: "Place of Pleasure",
    desc: "Golden skies and timeless temples—immerse yourself in a land of spiritual beauty and peace.",
    location: "Old Bagan, Myanmar",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="hero-overlay absolute inset-0"></div>
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            {slides[currentSlide].description}
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="w-5 h-5 text-travel-amber" />
            <span className="text-lg font-medium text-travel-amber">
              {slides[currentSlide].location}
            </span>
          </div>
          <button className="bg-travel-teal hover:bg-travel-teal/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default Banner;
