// components/DestinationSection.jsx
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SpotCard from "./SpotCard";


const DestinationSection = ({ spots }) => (
    <section className="mb-36 text-center px-8 py-24 rounded-xl bg-sky-100 relative">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute -top-72 w-full -ml-8 -z-3"
        >
            <path
                fill="#e0f2fe"
                fillOpacity="1"
                d="M0,160L60,170C120,180,240,200,360,205.3C480,211,600,192,720,181.3C840,171,960,165,1080,170.7C1200,176,1320,192,1380,197.3L1440,203L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
        </svg>
        <div className="relative py-16">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins z-50">
                Choose your next destination!
            </h1>
            <p className="mt-5 mb-10 text-gray-700">
                Your choices will take you anywhere you’d like to go. Explore from a variety of places,
                leave the daily hassle behind and live a little.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {spots.slice(0, 12).map((spot) => (
                    <SpotCard key={spot._id} spot={spot} />
                ))}
            </div>

            <div className="mt-12">
                <Link
                    to="/allspots"
                    className="bg-green-800 text-white font-bold px-8 py-4 rounded-xl hover:rounded-full hover:bg-gray-100 hover:text-green-800 transition-all ease-linear text-lg"
                >
                    See All Spots
                </Link>
            </div>
        </div>
    </section>
);
DestinationSection.propTypes = {
    spots: PropTypes.array.isRequired,
};

export default DestinationSection;


