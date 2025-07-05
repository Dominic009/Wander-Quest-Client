import { MapPin } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => (
    <div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
    >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
            <img
                src={spot.photo || "No image available"}
                alt={spot.tourists_spot_name || "Tourist Spot"}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Category Badge */}
            {/* <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-travel-teal px-3 py-1 rounded-full text-sm font-medium">
                    {spot.category}
                </span>
            </div> */}

            {/* Hover Content */}
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <button className="bg-travel-teal hover:bg-travel-teal/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                    <Link to={`/details/${spot._id}`} className="bg-white text-black py-1 px-3 rounded-md text-center">
                        View Details
                    </Link>
                </button>
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-travel-teal" />
                <span className="text-sm font-medium text-gray-500">{spot.location}, {spot.country_name}</span>
            </div>
            <h3 className="text-xl text-left font-bold text-gray-900 mb-3 group-hover:text- transition-colors duration-200">
                {spot.tourists_spot_name}
            </h3>
            <p className="text-gray-600 text-left leading-relaxed">
                {spot.description}
            </p>
        </div>
    </div>
);
SpotCard.propTypes = {
    spot: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        tourists_spot_name: PropTypes.string.isRequired,
        description: PropTypes.string,
        country_name: PropTypes.string,
        location: PropTypes.string,
        _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default SpotCard;
