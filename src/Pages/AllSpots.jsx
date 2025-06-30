import { Link, useLoaderData } from "react-router-dom";
import "animate.css";
import { PiGlobeHemisphereWestBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const AllSpots = () => {
  const allSpot = useLoaderData();

  return (
    <div className="mb-24">
      <div className="mt-12 mb-12 text-center">
        <h1 className="text-5xl font-bold">Spots You Can Visit</h1>
        <p className="mt-5 text-lg font-semibold text-gray-500">
          This spots are form the around of the world. Added by many people for
          you to explore!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 animate__animated animate__slideInLeft">
        {allSpot.map((spot) => (
          <div key={spot._id}>
            <div className="rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 p-4 hover:border-2 border-opacity-60 border-green-700  lg:h-[650px]">
              <img
                src={spot.photo}
                alt=""
                className="object-cover object-center rounded-md h-72 bg-gray-500 dark:bg-gray-500 w-[100%]"
              />
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-5">
                  <h2 className="text-3xl font-bold">
                    {spot.tourists_spot_name}
                  </h2>
                  <p className="text-gray-500 font-semibold">
                    {spot.description}
                  </p>

                  <div className="space-y-3">
                    <p className="flex items-center justify-start gap-2 text-xl text-gray-600">
                      <PiGlobeHemisphereWestBold className="text-2xl" />{" "}
                      {spot.country_name}
                    </p>
                    <p className="flex items-center justify-start gap-2 text-xl text-gray-600">
                      <IoLocationOutline className="text-2xl" /> {spot.location}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/details/${spot._id}`}
                  className="flex items-center justify-center p-3 font-semibold tracking-wide rounded-md bg-green-400 dark:bg-green-700 hover:bg-green-900 text-gray-900 dark:text-gray-50 text-lg w-full"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSpots;
