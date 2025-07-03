import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import AOS from "aos";
import 'aos/dist/aos.css';

const slides = [
  {
    img: banner1,
    title: "Green Heaven",
    desc:
      "Breathe in the serenity of nature as you step into a realm untouched by time. The lush landscapes, rich in emerald hues and peaceful sounds, offer the perfect escape from chaos. Whether you're hiking the rolling hills or meditating beneath towering canopies, Green Heaven invites you to reconnect with your soul and find harmony in every breeze.",
    location: "Luzon Island, Philippines",
  },
  {
    img: banner2,
    title: "Caves of Paradise",
    desc:
      "Venture deep into the heart of earth where secrets sleep in stone. The Caves of Paradise are more than ancient formations—they are living cathedrals of silence and awe. As rays of light pierce through crevices, witness nature's artwork unfold before your eyes. It’s a journey of wonder, reflection, and spiritual awakening carved in rock.",
    location: "Batu Caves, Malaysia",
  },
  {
    img: banner3,
    title: "Place of Pleasure",
    desc:
      "Golden skies meet ancient silhouettes in this timeless sanctuary of tranquility. Here, temples whisper tales of devotion and the air is filled with a sense of peace. As the sun dips behind the pagodas, feel your senses ignite and your thoughts dissolve. This is a place where joy is slow, sacred, and deeply rooted in history.",
    location: "Old Bagan, Myanmar",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentSlide]);

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
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
        <div
          className="text-white px-4 w-full h-full flex flex-col justify-end gap-5 pb-10 lg:pb-32"
          key={currentSlide}
        >
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            data-aos="fade-in"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
          >
            {slides[currentSlide].title}
          </h1>
          <div
            className="flex items-center gap-2"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
          >
            <MapPin className="w-5 h-5 text-travel-amber" />
            <span className="text-lg font-medium text-travel-amber">
              {slides[currentSlide].location}
            </span>
          </div>
          <p
            className="md:text-lg leading-relaxed opacity-90 mt-5 max-w-7xl"
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
          >
            {slides[currentSlide].desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
