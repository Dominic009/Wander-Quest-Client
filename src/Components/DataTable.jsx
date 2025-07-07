import { Edit, Trash2 } from "lucide-react";
import PropTypes from "prop-types";

const ResponsiveTable = ({
    currentData,
    currentPage,
    itemsPerPage,
    user,
    handleEditData,
    handleDelete,
}) => {
    return (
        <div className="w-full max-w-7xl lg:max-w-max mx-auto px-4">
            {/* Desktop Table */}
            <div className="block overflow-x-auto">
                <table className="w-full border-collapse bg-table-row rounded-lg overflow-hidden shadow-sm">
                    <thead>
                        <tr className="bg-green-200">
                            <th className="px-4 py-3 text-left font-semibold">SL</th>
                            <th className="px-4 py-3 text-left font-semibold">Name</th>
                            <th className="px-4 py-3 text-left font-semibold">Email</th>
                            <th className="px-4 py-3 text-left font-semibold">Spot</th>
                            <th className="px-4 py-3 text-left font-semibold">Location</th>
                            <th className="px-4 py-3 text-left font-semibold">Country</th>
                            <th className="px-4 py-3 text-center font-semibold sticky right-0">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {currentData.map((data, idx) => (
                            <tr
                                key={data._id}
                                className={`border-b hover:bg-muted/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                            >
                                <td className="px-4 py-3 text-table-row-foreground">
                                    {(currentPage - 1) * itemsPerPage + idx + 1}
                                </td>
                                <td className="px-4 py-3 text-table-row-foreground font-medium">
                                    {user.displayName}
                                </td>
                                <td className="px-4 py-3 text-table-row-foreground">
                                    {user.email}
                                </td>
                                <td className="px-4 py-3 text-table-row-foreground text-nowrap">
                                    {data.tourists_spot_name}
                                </td>
                                <td className="px-4 py-3 text-table-row-foreground text-nowrap">
                                    {data.location}
                                </td>
                                <td className="px-4 py-3 text-table-row-foreground">
                                    {data.country_name}
                                </td>
                                <td className="px-4 py-3 sticky left-0 flex items-center justify-center mt-1">
                                    <div className="flex justify-center gap-2 *:flex *:items-center *:justify-center">
                                        <button
                                            onClick={() => handleEditData(data._id)}
                                            size=""
                                            className="h-12 w-12 p-3 group hover:bg-green-600 transition-all duration-300 ease-in-out rounded"
                                        >
                                            <Edit className="h-6 w-6 text-green-600 group-hover:text-white group-hover:scale-105 " />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(data._id)}

                                            size="sm"
                                            className="h-12 w-12 p-3 group hover:bg-red-600 transition-all duration-300 ease-in-out rounded"
                                        >
                                            <Trash2 className="h-6 w-6 text-red-600 group-hover:text-white group-hover:scale-105 " />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            {/* Empty State */}
            {currentData.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No data available</p>
                </div>
            )}
        </div>
    );
};
ResponsiveTable.propTypes = {
    currentData: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    handleEditData: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default ResponsiveTable;
