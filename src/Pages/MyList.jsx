import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import ResponsiveTable from "../Components/DataTable";

const MyList = () => {
  const initialData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [dbData, setDbData] = useState(initialData);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setDbData(initialData);
  }, [initialData]);

  // Reset to page 1 on search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const navigate = useNavigate();

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

  const handleEditData = (id) => {
    navigate(`/editspot/${id}`);
  };

  // ✅ Filtered data
  const filteredData = searchQuery
    ? dbData.filter((item) =>
      item.tourists_spot_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.country_name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : dbData;

  // ✅ Sliced data for current page
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="mt-24 mb-12 min-h-screen py-14">
      <div className="mt-12 mb-12 text-center">
        <h1 className="text-4xl font-bold">My List</h1>
      </div>

      {/* Page size selector and Search bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-4 max-w-6xl mx-auto">
        <div>
          <label className="font-semibold">Show :</label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="border px-2 py-1 rounded ml-2"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={dbData.length}>All</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-semibold">Search:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Spot or Country"
            className="border px-3 py-1 rounded w-64"
          />
        </div>
      </div>

      <ResponsiveTable
        currentData={currentData}
        handleDelete={handleDelete}
        currentPage={currentPage}
        handleEditData={handleEditData}
        user={user}
        itemsPerPage={itemsPerPage}
      />

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
  );
};

export default MyList;
