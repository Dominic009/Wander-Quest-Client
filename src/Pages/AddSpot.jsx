import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const AddSpot = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const tourists_spot_name = form.spotName.value;
    const location = form.location.value;
    const country_name = form.country_name.value;
    const description = form.description.value;
    const average_cost = form.cost.value;
    const season = form.season.value;
    const travel_time = form.travelTime.value;
    const totalVisitors = form.totalVisitors.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const name = form.name.value;

    const newSpot = {travel_time, location, country_name, description, average_cost, season, tourists_spot_name, totalVisitors, photo, email, name}
    console.log(newSpot)

    // sending data to server side
    fetch('http://localhost:5000/spot', {
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newSpot)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
        }
    })
  };

  return (
    <div className="mb-24">
      <div className="text-center mt-24 mb-12">
        <h1 className="text-5xl font-bold font-lobster underline underline-offset-2 text-green-700">Add a Tourist Spot</h1>
        <p></p>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-5 p-6">
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              className="input input-bordered bg-green-100 font-semibold cursor-not-allowed"
            />
          </div>

          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">Name</span>
            </label>
            <input
              type="name"
              name="name"
              value={user.displayName}
              className="input input-bordered bg-green-100 font-semibold cursor-not-allowed"
            />
          </div>

          {/* Spot Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">
                Spot Name
              </span>
            </label>
            <input
              type="text font-bold text-lg text-green-900"
              name="spotName"
              placeholder="Enter spot name"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter the location"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Country */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">
                Country Name
              </span>
            </label>
            <input
              type="text"
              name="country_name"
              placeholder="Name of the country"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">
                Description
              </span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter a short description about the place"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Cost */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">Cost</span>
            </label>
            <input
              type="text"
              name="cost"
              placeholder="What could be the average cost?"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Season */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">Season</span>
            </label>
            <input
              type="text"
              name="season"
              placeholder="Season (EX - Winter, Summer)"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Travel Time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">
                Travel Time
              </span>
            </label>
            <input
              type="text"
              name="travelTime"
              placeholder="Travel time"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Total Visitors */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">
                Total visitors
              </span>
            </label>
            <input
              type="number"
              name="totalVisitors"
              placeholder=""
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          {/* Photo */}
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text font-bold text-lg text-green-900">Photo</span>
            </label>
            <input
            type="url"
              name="photo"
              placeholder="Enter photo url"
              className="input input-bordered bg-green-100 font-semibold"
            />
          </div>

          <div className="flex justify-end col-span-2">
            <input
              type="submit"
              value="Add this spot"
              className="bg-gradient-to-r from-green-700 to-black md:text-xl text-white font-bold px-6 py-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-black hover:to-green-800 hover:drop-shadow-md active:scale-90 md:w-[30%] mt-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpot;
