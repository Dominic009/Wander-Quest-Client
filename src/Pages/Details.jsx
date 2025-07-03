import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import "animate.css";
import { useEffect } from "react";

const Details = () => {
  const spotDetails = useLoaderData();
  const {
    travel_time,
    location,
    country_name,
    description,
    average_cost,
    season,
    tourists_spot_name,
    totalVisitors,
    photo,
  } = spotDetails;

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  return (
    <section className="animate__animated animate__fadeIn px-4 md:px-10 lg:px-20 min-h-screen flex items-center justify-center bg-gradient-to-t from-green-500 to-black py-32 md:py-0">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-8 items-center">
        <div className="w-full h-full">
          <img
            src={photo}
            alt={tourists_spot_name}
            className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
          />
        </div>

        <div className="p-6 md:p-10 space-y-6 text-gray-800 dark:text-gray-200">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-2">
              {tourists_spot_name}
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-green-100 dark:border-green-700">
            <InfoCard label="Location" value={location} />
            <InfoCard label="Country" value={country_name} />
            <InfoCard label="Season" value={season} />
            <InfoCard label="Travel Time" value={travel_time} />
            <InfoCard label="Visitors" value={totalVisitors} />
            <InfoCard label="Avg. Cost" value={average_cost} />
          </div>

          <button className="w-full py-3 rounded-xl bg-green-700 hover:bg-green-900 transition text-white font-bold text-lg shadow-md hover:shadow-lg animate__animated animate__pulse">
            Book a Trip!
          </button>
        </div>
      </div>
    </section>
  );
};

// Reusable info card component
const InfoCard = ({ label, value }) => (
  <div className="bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 font-semibold p-3 rounded-lg text-center">
    <span className="block text-sm opacity-80">{label}</span>
    <span className="text-lg">{value}</span>
  </div>
);

export default Details;

InfoCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}
