import { useLoaderData } from "react-router-dom";
import "animate.css";

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

  return (
    <div className="animate__animated animate__zoomIn mt-12 mb-12 drop-shadow-xl ">
      <div className=" bg-base-200 lg:w-[90%] mx-auto rounded-xl flex items-center justify-center p-7 border border-green-400">
        <div className="lg:flex gap-5">
          <img src={photo} className="rounded-lg shadow-2xl lg:w-[50%]" />
          <div className="">
            <h1 className="text-5xl font-bold underline underline-offset-4">
              {tourists_spot_name}
            </h1>
            <p className="pt-2 text-xl">{description}</p>
            <p className="text-3xl font-semibold text-gray-600 pt-5">
              Average Cost :{" "}
              <span className="font-bold text-green-700">{average_cost}</span>
            </p>

            <div className="bg-white p-5 mt-10 rounded-xl grid md:grid-cols-2 gap-5">
              <p className="bg-green-600 p-3 text-white font-bold rounded-xl text-lg">
                Location : {location}
              </p>
              <p className="bg-green-600 p-3 text-white font-bold rounded-xl text-lg">
                Country : {country_name}
              </p>
              <p className="bg-green-600 p-3 text-white font-bold rounded-xl text-lg">
                Season : {season}
              </p>
              <p className="bg-green-600 p-3 text-white font-bold rounded-xl text-lg">
                Est. Travel Time : {travel_time}
              </p>
              <p className="bg-green-600 p-3 text-white font-bold rounded-xl text-lg">
                Approx. Visitors : {totalVisitors}
              </p>
            </div>
            <button className="btn w-full mt-5 bg-white text-lg hover:bg-green-500 hover:text-white font-bold animate__animated animate__heartBeat">Book a trip!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
