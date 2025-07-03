/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "animate.css";
import countries from "../assets/datas/locationData";

const TouristSpots = ({ spotData }) => {
  const [modal, setModal] = useState(false);
  const [spot, setSpot] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleDetails = (country) => {
    if (user) {
      setModal(true);
      const placeName = spotData.filter(
        (spot) => spot.country_name === country
      );
      setSpot(placeName);
    } else {
      navigate("/login");
      Swal.fire({ title: "Please log in first!", icon: "error" });
    }
  };

  return (
    <div className="space-y-10">
      {countries.map(({ name, description, img }) => (
        <div
          key={name}
          className="rounded-xl shadow-2xl h-[400px] lg:w-[70%] mx-auto relative overflow-hidden group transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="h-full rounded-xl bg-gradient-to-t from-gray-900 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left text-gray-200 rounded-xl transition-all duration-700 ease-in-out pl-12 gap-10">
            <h1 className="drop-shadow-2xl font-bold text-5xl md:text-7xl lg:text-8xl group-hover:text-green-500 transition-colors duration-700">
              {name}
            </h1>
            <div className="w-full md:w-[50%] opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-700 ease-in-out bg-gradient-to-l from-white/90 to-transparent text-gray-800 p-6 md:h-full rounded-tr-xl rounded-br-xl shadow-lg">
              <p className="text-sm md:text-base">{description}</p>
              <div className="mt-6">
                <button
                  onClick={() => handleDetails(name)}
                  className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-xl active:scale-95 w-full md:w-[60%] transition-transform duration-300"
                >
                  View Places
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm "></div>

          <div className="relative z-10 w-[90%] max-w-6xl p-6 md:p-10 bg-white rounded-xl shadow-2xl animate__animated animate__fadeInUp">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-4xl font-bold text-green-800">
                Places in {spot[0]?.country_name}
              </h2>
              <button
                onClick={() => setModal(false)}
                className="text-xl bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-all duration-300"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-transparent pr-2">
              {spot.map((spot) => (
                <Link
                  key={spot._id}
                  to={`/details/${spot._id}`}
                  className="block bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <img
                    src={spot.photo}
                    alt={spot.tourists_spot_name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                      {spot.tourists_spot_name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TouristSpots;
