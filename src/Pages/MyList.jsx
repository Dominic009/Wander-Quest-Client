import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const dbData = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://wander-quest-server-side.vercel.app/spot/${id}`, {
            method: "DELETE"})
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
              }
            })
      }
    });
  }


  return (
    <div className="mt-12 mb-12">
      <div className="mt-12 mb-12 text-center">
        <h1 className="text-4xl font-bold font-lobster">My List</h1>
      </div>
      <div>
        <div className="flex justify-evenly w-full">
          {/* head */}
          <thead className="w-full border">
            <tr className="bg-green-500 w-full flex justify-around rounded-xl">
              <th>Name</th>
              <th>Email</th>
              <th>Spot</th>
              <th>Location</th>
              <th>Country</th>
            </tr>
          </thead>
        </div>
        {dbData.map((data) => (
          <div className="overflow-x-auto" key={data._id}>
            <table className="table">
              <tbody className="w-full">
                {/* row 1 */}
                <tr className="w-full flex justify-center text-center">
                  <td className="flex-1 mb-5">{user.displayName}</td>
                  <td className="flex-1 mb-5">{user.email}</td>
                  <td className="flex-1 mb-5">{data.tourists_spot_name}</td>
                  <td className="flex-1 mb-5">{data.location}</td>
                  <td className="flex-1">{data.country_name}</td>
                  <button onClick={() => handleDelete(data._id)} className="h-[40px] bg-green-700 text-white font-bold px-3 rounded-lg">Delete</button>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
