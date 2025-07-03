import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { PiGlobeHemisphereWestBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const ITEMS_PER_LOAD = 1; // how many to show per scroll

const AllSpots = () => {
  const allSpot = useLoaderData(); // full data from loader
  const [visibleSpots, setVisibleSpots] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0 });

  // Load initial spots
  useEffect(() => {
    setVisibleSpots(allSpot.slice(0, ITEMS_PER_LOAD));
    setLoadedCount(ITEMS_PER_LOAD);
  }, [allSpot]);

  // Load more when inView
  useEffect(() => {
    if (inView && loadedCount < allSpot.length) {
      const nextCount = loadedCount + ITEMS_PER_LOAD;
      setVisibleSpots(allSpot.slice(0, nextCount));
      setLoadedCount(nextCount);
    }
  }, [inView, allSpot, loadedCount]);

  return (
    <div className="mb-24 py-32 md:py-48 bg-gradient-to-t from-green-500 to-black">
      <div className="text-center mb-20">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-200">Spots You Can Visit</h1>
        <p className="mt-5  md:text-lg text-gray-400">
          These spots are from around the world. Added by many people for you to explore!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-[90%] md:max-w-7xl mx-auto">
        {visibleSpots.map((spot) => (
          <div
            key={spot._id}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image + overlay */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={spot.photo}
                alt={spot.tourists_spot_name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <Link
                  to={`/details/${spot._id}`}
                  className="block bg-white text-center text-black py-2 rounded-full font-medium hover:bg-green-700 hover:text-white transition"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Textual content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">{spot.tourists_spot_name}</h3>
              <p className="text-gray-600 leading-relaxed">{spot.description}</p>

              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2 text-base font-medium">
                  <PiGlobeHemisphereWestBold className="text-xl text-green-600" />
                  {spot.country_name}
                </p>
                <p className="flex items-center gap-2 text-base font-medium">
                  <IoLocationOutline className="text-xl text-green-600" />
                  {spot.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Observer Element */}
      <div ref={ref} className="text-center mt-10">
        {loadedCount < allSpot.length && (
          <span className="text-green-700 font-semibold">Loading more...</span>
        )}
        {loadedCount >= allSpot.length && (
          <span className="text-gray-500 font-medium">No more spots to show.</span>
        )}
      </div>
    </div>
  );
};

export default AllSpots;
