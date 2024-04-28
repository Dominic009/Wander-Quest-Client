import { useContext, useEffect, useState } from "react";
import Banner from "../Components/Banner";
import CountrySec from "../Components/CountrySec";
import { AuthContext } from "../Context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] =useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localtheme)
  }, [theme]);

  const handleToggle = (e) => {
    if(e.target.checked){
        setTheme("coffee");
    }else{
        setTheme("light")
    }
  }

  return (
    <div className="mt-16">
        {/* Theme-Trigger */}
      <div className="flex justify-end">
        {user ? (
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
              onChange={handleToggle}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        ) : (
          ""
        )}
      </div>

      <section className="mb-64">
        <Banner />
      </section>

      <section className="mb-16 text-center">
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
      </section>

      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold font-lobster">Places You Can Be</h1>
        <p className="mt-5 mb-5">
          Southeast Asia is a tapestry of diverse landscapes and vibrant
          cultures, offering a wealth of destinations to explore. From the
          bustling streets of Bangkok to the tranquil beaches of Bali, the lush
          jungles of Borneo to the ancient temples of Angkor Wat, theres
          something enchanting for every traveler.
        </p>
        <CountrySec />
      </section>
    </div>
  );
};

export default Home;
