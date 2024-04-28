import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { createUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  //loader
  if (loading) {
    return (
      <span className="loading loading-bars bg-transparent flex justify-center items-center h-[100vh] mx-auto"></span>
    );
  }


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
      return(toast.error("Password needs to be at least 6 charaters"))
    }
    else if (!/([A-Z])/.test(password)) {
    ( toast.error("Password needs at least one uppercase letter"))
      return; 
      
    }
    else if (!/([a-z])/.test(password)) {
      toast.error("Password needs at least one lowercase letter");
      return; 
      
    }
    // else if (error) {
    //   toast.error(error);
    //   return; 
    // }
    else if(password !== conPass){
      toast.error("Password does not match")
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

        //Update
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        });

        form.rest();
      })
      .catch((error) => toast.error(error.message));
  };

  const pass = `
      Minimum charaters 6
      You need at least one Uppercase letter
      You need at least one Lowercase letter`;

  return (
    <div className="bg-[#204426]">
      <div>
        <div className="bg-gradient-to-l from-[#088a1c] to-black to-20% backdrop-blur-xl px-5 py-2 drop-shadow-xl flex justify-between">
          <div className="w-[40%] md:w-[20%]">
            <img src={logo} />
          </div>
          <div className="flex items-center">
            <Link to="/" className="btn">
              Home
            </Link>
          </div>
        </div>

        {/* ----------------- */}
        <div>
          <div className="bg-[#E5DCCA] w-[80%] mx-auto mt-12 mb-12 grid md:grid-cols-2 text-center py-6 rounded-xl drop-shadow-xl font-rajdhani">
            <div className="">
              <div className="">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Register now!
                </h1>
              </div>
              <div className="">
                <form onSubmit={handleSubmit} className="card-body">
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
                        type=""
                        name="password"
                        placeholder="Password"
                        className="input input-bordered"
                        required
                      />
                      <div className="absolute right-3 top-4 cursor-pointer text-xl text-gray-400"></div>
                    </div>
                  </div>
                  {/* Confirm Password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <div className="form-control relative">
                      <input
                        type=""
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="input input-bordered"
                        required
                      />
                      <div className="absolute right-3 top-4 cursor-pointer text-xl text-gray-400"></div>
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

            <div>Register image</div>
          </div>
        </div>
          <Toaster></Toaster>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Register;
