import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);
  console.log(user);

  const updateInfo = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("displayName");
    const photoURL = form.get("photoURL");

    try {
      await updateUserProfile(name, photoURL).then(() => {
        toast.success("Profile updated successfully!");
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] pt-20 flex flex-col items-center justify-center">
      <div className="w-[80%] mx-auto flex items-center gap-4 border rounded-lg p-4">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <img src={user?.photoURL || "N/A"} alt="" className="w-48 border" />
        )}
        <div className="w-full">
          <form onSubmit={updateInfo} className="flex flex-col gap-5">
            {/* User name */}
            <div className="relative">
              <label className="absolute left-2 -top-1 bg-white text-gray-400 text-sm">
                Name
              </label>
              <input
                type="text"
                name="displayName"
                defaultValue={user?.displayName}
                className="font-semibold w-full outline-none mt-2 border px-2 py-2 rounded-lg"
              />
            </div>

            {/* User image */}
            <div className="relative">
              <label className="absolute left-2 -top-1 bg-white text-gray-400 text-sm">
                Image
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={user?.photoURL}
                className="font-semibold w-full outline-none mt-2 border px-2 py-2 rounded-lg"
              />
            </div>
            <button className="btn" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Profile;
