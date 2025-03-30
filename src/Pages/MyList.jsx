import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

const MyList = () => {
  const initialData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [dbData, setDbData] = useState(initialData);

  useEffect(() => {
    setDbData(initialData);
  }, [initialData]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spot/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.result.deletedCount > 0) {
              Swal.fire("Deleted");
            }
            setDbData(dbData.filter((item) => item._id !== id));
          });
      }
    });
  };

  return (
    <div className="mt-24 mb-12">
      <div className="mt-12 mb-12 text-center">
        <h1 className="text-4xl font-bold">My List</h1>
      </div>
      <div className="w-[80%] mx-auto">
        {/* head */}
        <div className="flex justify-evenly w-full mb-5">
          <thead className="w-full">
            <tr className="bg-green-500 w-full flex justify-center items-center rounded-xl *:flex-shrink-0">
              <th className="flex-1">Name</th>
              <th className="flex-1">Email</th>
              <th className="flex-1">Spot</th>
              <th className="flex-1">Location</th>
              <th className="flex-1">Country</th>
              <th className="w-16"></th>
            </tr>
          </thead>
        </div>
        {dbData.map((data) => (
          <div className="overflow-x-auto" key={data._id}>
            <table className="table">
              <tbody className="w-full flex items-center">
                {/* row 1 */}
                <tr className="w-full flex justify-center items-center text-center *:flex-shrink-0">
                  <td className="flex-1">{user.displayName}</td>
                  <td className="flex-1">{user.email}</td>
                  <td className="flex-1">{data.tourists_spot_name}</td>
                  <td className="flex-1">{data.location}</td>
                  <td className="flex-1">{data.country_name}</td>
                </tr>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="text-red-700 font-bold px-3 py-1 text-2xl rounded-lg hover:bg-rose-700 hover:text-white"
                >
                  <MdDelete />
                </button>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
