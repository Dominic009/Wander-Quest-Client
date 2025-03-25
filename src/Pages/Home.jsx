/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import CountrySec from "../Components/CountrySec";
import { Link, useLoaderData } from "react-router-dom";
import "animate.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const spotData = useLoaderData();

  // Showing random places in UI from DB
  useEffect(() => {
    const originalItems = spotData;
    const selectedItems = originalItems
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
    setItems(selectedItems);
  }, [spotData]);

  return (
    <div className="mt-16">
      <section className="mb-36">
        <Banner />
      </section>

      <section className="mb-52 text-center px-8 py-24 rounded-xl border bg-gray-200">
        <h1 className="text-5xl font-bold font-lobster">
          Choose your next destination!
        </h1>
        <p className="mt-5 mb-5">
          Your choices will take you any where you would like to go. There are
          many places to choose from. Your choices will take you any where you
          would like to go. You can select form the variety and the feel of
          place and the feel you want to feel. Get out from the daily hassle and
          live a little. Your choices will take you any where you would like to
          go.{" "}
        </p>

        <div className="grid lg:grid-cols-3 gap-7 md:p-6 p-4">
          {spotData
            .map((spot) => (
              <div
                key={spot._id}
                className="rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 animate__animated animate__zoomIn p-4 hover:scale-105 transition-all duration-500 ease-in"
              >
                <img
                  src={spot.photo}
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-bold font-lobster mb-5">
                      {spot.tourists_spot_name}
                    </h2>
                    <p className="text-gray-100 dark:text-gray-800 text-left font-semibold">
                      {spot.description}
                    </p>

                    <div className="text-left">
                      <p className="mb-1 mt-5 text-lg font-semibold text-gray-400">
                        Country : {spot.country_name}
                      </p>
                      <p className="mb-1 text-lg font-semibold text-gray-400">
                        Location : {spot.location}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Link
                      to={`/details/${spot._id}`}
                      type="button"
                      className="flex items-center justify-center p-3 font-semibold tracking-wide rounded-md bg-green-400 dark:bg-green-700 hover:bg-green-900 text-gray-900 dark:text-gray-50 text-lg w-full"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
            .slice(0, 6)}
        </div>
        <div className="mt-12">
          <Link
            to="/allspots"
            className="bg-green-800 text-white font-bold px-8 py-4 rounded-xl hover:rounded-full hover:bg-gray-100 hover:text-green-800 hover:border border-green-800 transition-all ease-linear text-lg w-[60%] "
          >
            See All Spots
          </Link>
        </div>
      </section>

      <section className="mb-16 text-center w-[90%] mx-auto">
        <h1 className="text-5xl font-bold font-lobster">Places You Can Be</h1>
        <p className="mt-5 mb-5">
          Southeast Asia is a tapestry of diverse landscapes and vibrant
          cultures, offering a wealth of destinations to explore. From the
          bustling streets of Bangkok to the tranquil beaches of Bali, the lush
          jungles of Borneo to the ancient temples of Angkor Wat, theres
          something enchanting for every traveler.
        </p>
        <CountrySec spotData={spotData} />
      </section>

      <section>
        {/* Review section */}
        <div className="flex gap-12 justify-between items-center font-poppins mb-24">
          {/* Feedback */}
          <div className="flex md:flex-row flex-col-reverse justify-center md:gap-8 gap-5 items-center w-[50%] bg-green-600 p-4 rounded-xl">
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 w-full md:w-[50%]">
              <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">
                  Your opinion matters!
                </h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      title="Rate 1 stars"
                      aria-label="Rate 1 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 2 stars"
                      aria-label="Rate 2 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 3 stars"
                      aria-label="Rate 3 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 4 stars"
                      aria-label="Rate 4 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500 dark:text-yellow-700"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      title="Rate 5 stars"
                      aria-label="Rate 5 stars"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-10 h-10 text-gray-600 dark:text-gray-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <textarea
                    rows="3"
                    placeholder="Message..."
                    className="p-4 rounded-md resize-none text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-50"
                  ></textarea>
                  <button
                    type="button"
                    className="py-4 my-8 font-semibold rounded-md bg-[#14213D] text-[#FCA311]"
                  >
                    Leave feedback
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm text-gray-400 dark:text-gray-600"
                >
                  Maybe later
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-7xl font-poppins font-bold text-white">
                Have <br />
                Something <br /> To Share
                <span className="text-[#14213D]">?</span>
              </h1>
            </div>
          </div>

          {/* Reviews */}
          <div className="w-[50%] h-full justify-evenly gap-5 items-center bg-[#14213D] md:h-[530px] rounded-xl drop-shadow-xl p-8">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-7xl font-poppins font-bold text-white">
                Want to Talk <br /> About Your Next Trip
                <span className="text-green-700">?</span>
              </h1>
              <div className="bg-white rounded-xl transition-all ease-in-out duration-300 hover:bg-green-500">
                <Link
                  to="/aboutus"
                  className="text-green-500 font-bold text-[100px] mt-5 transition-all ease-in-out duration-300 hover:text-white"
                >
                  Contact Us!
                </Link>
              </div>
            </div>
            <div className="w-[100%] md:w-[50%]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
