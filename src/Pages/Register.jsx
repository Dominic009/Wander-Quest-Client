import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  //loader
  // if (loading === true) {
  //   return (
  //     <div className="w-full h-[100vh] flex justify-center items-center">
  //       <span className="loading loading-dots loading-lg border"></span>
  //     </div>
  //   );
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("displayName");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    const conPass = form.get("confirmPassword");

    const regUSer = { email, password, name, photo };
    console.log(regUSer);

    if (password.length < 6) {
      return toast.error("Password needs to be at least 6 charaters");
    } else if (!/([A-Z])/.test(password)) {
      toast.error("Password needs at least one uppercase letter");
      return;
    } else if (!/([a-z])/.test(password)) {
      toast.error("Password needs at least one lowercase letter");
      return;
    }
    // else if (error) {
    //   toast.error(error);
    //   return;
    // }
    else if (password !== conPass) {
      toast.error("Password does not match");
      return;
    }

    // Creating user
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/login");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);

        //Update
        updateProfile(res.user, {
          displayName: name,
          photoURL:
            photo ||
            "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=",
        });

        form.rest();
      })
      .catch((error) => console.log(error));
  };

  const pass = `
      Minimum charaters 6
      You need at least one Uppercase letter
      You need at least one Lowercase letter`;

  return (
    <div className="bg-gradient-to-tr from-green-800 via-green-600 to-green-900 h-[100vh] overflow-hidden">
      <div>
        <div className="bg-gray-900 px-2 py-1 flex items-center justify-between">
          <img src={logo} className="w-48 lg:w-64" />
          <button className="text-gray-700 font-bold bg-gray-200 w-[15%] lg:w-[5%] py-2 rounded-lg hover:bg-[#2d913c] hover:text-white active:scale-95">
            <Link to={"/"}>Home</Link>
          </button>
        </div>

        {/* ----------------- */}
        <div>
          <div className=" w-[80%] mx-auto mt-12 mb-12 grid md:grid-cols-2 text-center py-6 rounded-xl drop-shadow-xl font-rajdhani">
            <div className="">
              <div className="">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Register now!
                </h1>
              </div>
              <div className="">
                <form onSubmit={handleSubmit} className="card-body bg-gray-100">
                  {/* Name */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/* Photo */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      className="input input-bordered"
                    />
                  </div>
                  {/* Password */}
                  <div title={pass} className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="form-control relative">
                      <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="input input-bordered"
                        required
                      />
                      <div
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-3 top-4 cursor-pointer text-xl text-gray-400"
                      >
                        {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                      </div>
                    </div>
                  </div>
                  {/* Confirm Password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <div className="form-control relative">
                      <input
                        type={showPass ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6 w-[70%] mx-auto">
                    <button className="px-6 py-2 rounded hover:rounded-xl font-bold bg-[#244128] text-white text-lg">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-7 text-center md:text-lg text-sm">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#457486] underline underline-offset-2 font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Register;
