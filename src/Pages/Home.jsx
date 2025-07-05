import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import DestinationSection from "../Components/DestinationSection";
import CountrySection from "../Components/CountrySection";
import { Link } from "react-router-dom";

const Home = () => {
  const [spots, setSpots] = useState([]);
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  // ✅ Fetch and Cache Data
  useEffect(() => {
    const cached = localStorage.getItem("spots");
    const cachedTime = localStorage.getItem("spots-time");
    const isExpired = !cachedTime || Date.now() - cachedTime > 1000 * 60 * 10; // 10 min

    if (cached && !isExpired) {
      const parsed = JSON.parse(cached);
      setSpots(parsed);
      setItems(parsed.sort(() => Math.random() - 0.5).slice(0, 6));
      setLoading(false);
    } else {
      fetch("https://wander-quest-server-side.vercel.app/spot")
        .then((res) => res.json())
        .then((data) => {
          setSpots(data);
          setItems(data.sort(() => Math.random() - 0.5).slice(0, 6));
          localStorage.setItem("spots", JSON.stringify(data));
          localStorage.setItem("spots-time", Date.now());
          setLoading(false);
        });
    }
  }, []);

  console.log(items)

  return (
    <div className="bg-gradient-to-br from-slate-50 to-teal-50">
      <Banner />
      <DestinationSection spots={items} />
      <CountrySection spotData={spots} />

      <section>
        {/* Review section */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center font-poppins mb-24 w-[95%] mx-auto mt-48">
          {/* Feedback */}
          <div className="flex md:flex-row flex-col-reverse justify-center md:gap-8 gap-5 items-center w-[90%] mx-auto lg:w-[50%] bg-green-600 p-4 rounded-xl">
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
          <div className="w-[90%] mx-auto lg:w-[50%] h-full justify-evenly gap-5 items-center bg-[#14213D] md:h-[530px] rounded-xl drop-shadow-xl p-8">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-7xl font-poppins font-bold text-white">
                Want to Talk <br /> About Your Next Trip
                <span className="text-green-700">?</span>
              </h1>
              <div className="bg-white rounded-xl transition-all ease-in-out duration-300 hover:bg-green-500 w-full flex justify-center items-center mt-5">
                <Link
                  to="/aboutus"
                  className="text-green-500 font-bold text-2xl lg:text-[100px] transition-all ease-in-out duration-300 hover:text-white text-center w-full"
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
