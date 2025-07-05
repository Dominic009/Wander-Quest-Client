import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { apiUrl } from "../utils/api/api";

const EditSpot = () => {
    const { user } = useContext(AuthContext);
    const spotData = useLoaderData()
    console.log(spotData)

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

        const updatedSpot = {
            travel_time,
            location,
            country_name,
            description,
            average_cost,
            season,
            tourists_spot_name,
            totalVisitors,
            photo,
            email,
            name,
        };

        // sending data to server side
        fetch(apiUrl(`/spot/edit/${spotData._id}`), {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSpot),
        })
            .then(async (res) => {
                const data = await res.json();

                if (!res.ok) {
                    // Backend returned an error status (like 404 or 500)
                    throw new Error(data.message || "Unknown error");
                }

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Updated successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

                return data;
            })
            .catch((err) => {
                // Show the backend message or a fallback
                Swal.fire({
                    icon: "info",
                    title: "No Changes Made",
                    text: err.message || "Nothing was updated.",
                });
            });

    };

    if (user)
        return (
            <div className="mb-24">
                <div className="text-center mt-24 mb-12">
                    <h1 className="text-5xl font-bold underline underline-offset-2 text-green-700">
                        Edit Spot
                    </h1>
                </div>

                <div>
                    <form
                        onSubmit={handleSubmit}
                        className="md:grid md:grid-cols-2 md:gap-x-24 md:gap-y-5 p-6"
                    >
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg text-green-900">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={spotData?.email}
                                readOnly
                                className="input input-bordered bg-green-100 font-semibold cursor-not-allowed"
                            />
                        </div>

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg text-green-900">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={spotData?.name}
                                readOnly
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
                                type="text"
                                name="spotName"
                                defaultValue={spotData?.tourists_spot_name}
                                className="input input-bordered bg-green-100 font-semibold"
                            />
                        </div>

                        {/* Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg text-green-900">
                                    Location
                                </span>
                            </label>
                            <input
                                type="text"
                                name="location"
                                defaultValue={spotData?.location}
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
                                defaultValue={spotData?.country_name}
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
                                defaultValue={spotData?.description}
                                className="input input-bordered bg-green-100 font-semibold"
                            />
                        </div>

                        {/* Cost */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg text-green-900">
                                    Cost
                                </span>
                            </label>
                            <input
                                type="text"
                                name="cost"
                                defaultValue={spotData?.average_cost}
                                className="input input-bordered bg-green-100 font-semibold"
                            />
                        </div>

                        {/* Season */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg text-green-900">
                                    Season
                                </span>
                            </label>
                            <input
                                type="text"
                                name="season"
                                defaultValue={spotData?.season}
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
                                defaultValue={spotData?.travel_time}
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
                                defaultValue={spotData?.totalVisitors}
                                className="input input-bordered bg-green-100 font-semibold"
                            />
                        </div>

                        {/* Photo */}
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text font-bold text-lg text-green-900">
                                    Photo
                                </span>
                            </label>
                            <input
                                type="url"
                                name="photo"
                                defaultValue={spotData?.photo}
                                className="input input-bordered bg-green-100 font-semibold"
                            />
                        </div>

                        <div className="flex justify-end col-span-2">
                            <input
                                type="submit"
                                value="Update Spot"
                                className="bg-gradient-to-r from-green-700 to-black md:text-xl text-white font-bold px-6 py-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-black hover:to-green-800 hover:drop-shadow-md active:scale-90 md:w-[30%] mt-5"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
};

export default EditSpot;