import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

const MyList = () => {
  const initialData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [dbData, setDbData] = useState(initialData);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Calculate sliced data
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = dbData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(dbData.length / itemsPerPage);

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
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spot/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.result.deletedCount > 0) {
              Swal.fire("Deleted");
              const updated = dbData.filter((item) => item._id !== id);
              setDbData(updated);
              if ((currentPage - 1) * itemsPerPage >= updated.length) {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
              }
            }
          });
      }
    });
  };

  return (
    <div className="mt-24 mb-12 min-h-screen py-14">
      <div className="mt-12 mb-12 text-center">
        <h1 className="text-4xl font-bold">My List</h1>
      </div>

      <div className="w-[80%] mx-auto">
        {/* Page size selector */}
        <div className="flex items-center justify-end gap-3 mb-4">
          <label className="font-semibold">Show :</label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border px-2 py-1 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={dbData.length}>All</option>
          </select>
        </div>

        {/* Table Head */}
        <div className="flex justify-evenly w-full mb-5">
          <thead className="w-full">
            <tr className="bg-green-500 w-full flex justify-center items-center rounded-xl *:flex-shrink-0">
              <th className="flex-1">SL</th>
              <th className="flex-1">Name</th>
              <th className="flex-1">Email</th>
              <th className="flex-1">Spot</th>
              <th className="flex-1">Location</th>
              <th className="flex-1">Country</th>
              <th className="w-16"></th>
            </tr>
          </thead>
        </div>

        {/* Table Data */}
        {currentData.map((data, idx) => (
          <div className="overflow-x-auto" key={data._id}>
            <table className="table">
              <tbody className="w-full flex items-center gap-8">
                <tr className="w-full flex justify-center items-center gap-5 text-center *:flex-shrink-0">
                  <td className="flex-1 py-5">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>
                  <td className="flex-1 py-5">{user.displayName}</td>
                  <td className="flex-1 py-5">{user.email}</td>
                  <td className="flex-1 py-5">{data.tourists_spot_name}</td>
                  <td className="flex-1 py-5">{data.location}</td>
                  <td className="flex-1 py-5">{data.country_name}</td>
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

        {/* Pagination Buttons */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-20 gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-green-100 rounded hover:bg-green-200 disabled:opacity-40"
            >
              Previous
            </button>

            <span className="font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-green-100 rounded hover:bg-green-200 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
