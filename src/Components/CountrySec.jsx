import BD from "../assets/BD map.jpg";
import TH from "../assets/Thailand.jpg";
import IN from "../assets/Indonasia.jpg";
import MA from "../assets/Mal.jpg";
import VN from "../assets/Vietnam.jpg";
import CB from "../assets/Cambodia.jpg";    
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TouristSpots = () => {

  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const handleDetails = () => {
    if(user){
      navigate('/allspots')
    }else{
      navigate('/login')
      Swal.fire({
        title: 'Please log in first!',
        icon: 'error',
      })
    }
  }

  return (
    <div className="mt-4 space-y-10">
      {/* Bangladesh */}
      <div
        className="rounded-xl shadow-2xl h-[400px] relative "
        style={{
          backgroundImage: `url(${BD})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full rounded-xl bg-gradient-to-t from-gray-900 to-transparent "></div>

        <div className="absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex lg:flex-row flex-col items-center justify-center hover:justify-between lg:text-[200px] md:text-[100px] lg:hover:text-[100px] md:hover:text-[50px] hover:text-green-600 text-gray-200 rounded-xl group gap-10 transition-all ease-in-out">
          <h1 className="drop-shadow-2xl font-bold ">Bangladesh</h1>
          <div className="lg:w-[50%] hidden group-hover:flex flex-col justify-end md:justify-center transition-all ease-in-out  text-gray-600 md:text-xl text-right bg-gradient-to-l from-white from-60% to-transparent px-6 py-2 md:h-full rounded-tr-xl rounded-br-xl ">
            <h1 className="text-xl md:text-3xl font-bold text-gray-600 mb-4">
              Tourist Spot
            </h1>
            <p className="">
              Bangladesh, nestled in the lush greenery of the Indian
              subcontinent, offers a captivating blend of natural beauty,
              vibrant culture, and rich history. From the bustling streets of
              Dhaka to the tranquil countryside dotted with serene rivers and
              verdant rice paddies, Bangladesh is a land of contrasts waiting to
              be explored.
            </p>
            <div className="mt-3 md:mt-12">
              <button onClick={handleDetails}
               className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl active:scale-90 w-[50%]">
                View Places
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Thailand */}
      <div
        className="rounded-xl shadow-2xl h-[400px] relative "
        style={{
          backgroundImage: `url(${TH})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full rounded-xl bg-gradient-to-t from-gray-900 to-transparent "></div>

        <div className="absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex lg:flex-row flex-col items-center justify-center hover:justify-between lg:text-[200px] md:text-[100px] lg:hover:text-[100px] md:hover:text-[50px] hover:text-green-600 text-gray-200 rounded-xl group gap-10 transition-all ease-in-out">
          <h1 className="drop-shadow-2xl font-bold ">Thailand</h1>
          <div className="lg:w-[50%] hidden group-hover:flex flex-col justify-end md:justify-center transition-all ease-in-out  text-gray-600 md:text-xl text-right bg-gradient-to-l from-white from-60% to-transparent px-6 py-2 md:h-full rounded-tr-xl rounded-br-xl ">
            <h1 className="text-xl md:text-3xl font-bold text-gray-600 mb-4">
              Tourist Spot
            </h1>
            <p className="">
              Thailand, a tropical paradise in Southeast Asia, enchants with its
              diverse landscapes, bustling cities, and serene beaches. From
              vibrant Bangkok to lush jungles and ancient temples, its a land of
              endless discovery.
            </p>
            <div className="mt-3 md:mt-12">
              <button onClick={handleDetails}
               className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl active:scale-90 w-[50%]">
                View Places
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Indonasia */}
      <div
        className="rounded-xl shadow-2xl h-[400px] relative "
        style={{
          backgroundImage: `url(${IN})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full rounded-xl bg-gradient-to-t from-gray-900 to-transparent "></div>

        <div className="absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex lg:flex-row flex-col items-center justify-center hover:justify-between lg:text-[200px] md:text-[100px] lg:hover:text-[100px] md:hover:text-[50px] hover:text-green-600 text-gray-200 rounded-xl group gap-10 transition-all ease-in-out">
          <h1 className="drop-shadow-2xl font-bold ">Indonasia</h1>
          <div className="lg:w-[50%] hidden group-hover:flex flex-col justify-end md:justify-center transition-all ease-in-out  text-gray-600 md:text-xl text-right bg-gradient-to-l from-white from-60% to-transparent px-6 py-2 md:h-full rounded-tr-xl rounded-br-xl ">
            <h1 className="text-xl md:text-3xl font-bold text-gray-600 mb-4">
              Tourist Spot
            </h1>
            <p className="">
              With its stunning islands, lush rainforests, and vibrant culture,
              Indonesia beckons travelers with adventures in Balis beaches,
              Komodos dragons, and the lush landscapes of Java and Sumatra.
            </p>
            <div className="mt-3 md:mt-12">
              <button onClick={handleDetails}
               className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl active:scale-90 w-[50%]">
                View Places
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Malaysia */}
      <div
        className="rounded-xl shadow-2xl h-[400px] relative "
        style={{
          backgroundImage: `url(${MA})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full rounded-xl bg-gradient-to-t from-gray-900 to-transparent "></div>

        <div className="absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex lg:flex-row flex-col items-center justify-center hover:justify-between lg:text-[200px] md:text-[100px] lg:hover:text-[100px] md:hover:text-[50px] hover:text-green-600 text-gray-200 rounded-xl group gap-10 transition-all ease-in-out">
          <h1 className="drop-shadow-2xl font-bold ">Malaysia</h1>
          <div className="lg:w-[50%] hidden group-hover:flex flex-col justify-end md:justify-center transition-all ease-in-out  text-gray-600 md:text-xl text-right bg-gradient-to-l from-white from-60% to-transparent px-6 py-2 md:h-full rounded-tr-xl rounded-br-xl ">
            <h1 className="text-xl md:text-3xl font-bold text-gray-600 mb-4">
              Tourist Spot
            </h1>
            <p className="">
              Malaysia offers a tapestry of experiences, from the bustling
              streets of Kuala Lumpur to the tranquil tea plantations of Cameron
              Highlands and the pristine beaches of Langkawi and Penang.
            </p>
            <div className="mt-3 md:mt-12">
              <button onClick={handleDetails}
               className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl active:scale-90 w-[50%]">
                View Places
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Vietnam */}
      <div
        className="rounded-xl shadow-2xl h-[400px] relative "
        style={{
          backgroundImage: `url(${VN})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full rounded-xl bg-gradient-to-t from-gray-900 to-transparent "></div>

        <div className="absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex lg:flex-row flex-col items-center justify-center hover:justify-between lg:text-[200px] md:text-[100px] lg:hover:text-[100px] md:hover:text-[50px] hover:text-green-600 text-gray-200 rounded-xl group gap-10 transition-all ease-in-out">
          <h1 className="drop-shadow-2xl font-bold ">Vietnam</h1>
          <div className="lg:w-[50%] hidden group-hover:flex flex-col justify-end md:justify-center transition-all ease-in-out  text-gray-600 md:text-xl text-right bg-gradient-to-l from-white from-60% to-transparent px-6 py-2 md:h-full rounded-tr-xl rounded-br-xl ">
            <h1 className="text-xl md:text-3xl font-bold text-gray-600 mb-4">
              Tourist Spot
            </h1>
            <p className="">
              Vietnams charm lies in its bustling cities, picturesque
              landscapes, and rich history. Explore Hanois ancient streets, sail
              through Halong Bays limestone karsts, and delve into the Mekong
              Deltas lush waterways.
            </p>
            <div className="mt-3 md:mt-12">
              <button onClick={handleDetails}
               className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl active:scale-90 w-[50%]">
                View Places
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Cambodia */}
      <div
        className="rounded-xl shadow-2xl h-[400px] relative "
        style={{
          backgroundImage: `url(${CB})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full rounded-xl bg-gradient-to-t from-gray-900 to-transparent "></div>

        <div className="absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex lg:flex-row flex-col items-center justify-center hover:justify-between lg:text-[200px] md:text-[100px] lg:hover:text-[100px] md:hover:text-[50px] hover:text-green-600 text-gray-200 rounded-xl group gap-10 transition-all ease-in-out">
          <h1 className="drop-shadow-2xl font-bold ">Cambodia</h1>
          <div className="lg:w-[50%] hidden group-hover:flex flex-col justify-end md:justify-center transition-all ease-in-out  text-gray-600 md:text-xl text-right bg-gradient-to-l from-white from-60% to-transparent px-6 py-2 md:h-full rounded-tr-xl rounded-br-xl ">
            <h1 className="text-xl md:text-3xl font-bold text-gray-600 mb-4">
              Tourist Spot
            </h1>
            <p className="">
              Cambodias allure is rooted in its ancient temples, including the
              iconic Angkor Wat, as well as its vibrant markets, lush
              countryside, and warm hospitality, inviting travelers to explore
              its rich history and culture.
            </p>
            <div className="mt-3 md:mt-12">
              <button onClick={handleDetails}
               className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl active:scale-90 w-[50%]">
                View Places
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpots;
