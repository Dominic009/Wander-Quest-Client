import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import animation from "../assets/Login.json";
import Lottie from "lottie-react";

const Login = () => {
  const { userLogIn, githubLogin, googleLogin, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    const loggedUSer = { email, password };
    console.log(loggedUSer);
    setEmailLoading(true);

    // User log in
    userLogIn(email, password)
      .then((res) => {
        if (res) {
          console.log(res)
          toast.success("Login successful");
          setLoading(false);
        } else return "There is something wrong";
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        setEmailLoading(false);
      })
      .catch((error) => toast.error(error.message));
  };

  //Google login
  const handleGoogle = () => {
    setGoogleLoading(true);
    googleLogin()
      .then((res) => {
        navigate("/");
        if (res.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setGoogleLoading(false);
        }
      })
      .catch((error) => console.log(error.message));
  };

  //Github login
  const handleGithub = () => {
    githubLogin();
    setGithubLoading(true)
      .then((res) => {
        navigate("/");
        if (res.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setGithubLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="bg-gray-900 px-2 py-1 flex items-center justify-between">
        <img src={logo} className="w-48 lg:w-64" />
        <button className="text-gray-700 font-bold bg-gray-200 w-[15%] lg:w-[5%] py-2 rounded-lg hover:bg-[#2d913c] hover:text-white active:scale-95">
          <Link to={"/"}>Home</Link>
        </button>
      </div>
      <div className="bg-gradient-to-tr from-green-800 via-green-600 to-green-900 flex flex-col items-center justify-center h-[100%]">
        <div className="bg-white w-[80%] mx-auto mt-12 mb-12 grid lg:grid-cols-2 text-center rounded-xl drop-shadow-xl">
          <div>
            <div className=" py-5">
              <div className="">
                <h1 className="animate__animated animate__fadeInDown text-3xl md:text-5xl font-bold">
                  Log In
                </h1>
              </div>
              <div className="shrink-0 ">
                <form onSubmit={handleLogin} className="card-body">
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6 w-full lg:w-[70%] mx-auto">
                    <button
                      type="submit"
                      className="px-6 py-2 rounded hover:rounded-xl font-bold bg-[#244128] text-white text-lg"
                    >
                      {emailLoading ? (
                        <span className="loading loading-dots loading-lg border"></span>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                </form>
                <hr className="w-[70%] mx-auto mb-5" />
                <div className="flex flex-col md:flex-row justify-center md:gap-5">
                  <div className="text-center mb-5">
                    <span
                      onClick={handleGoogle}
                      className="btn"
                      disabled={googleLoading}
                    >
                      <FcGoogle className="text-xl" />
                      {googleLoading ? (
                        <span className="loading loading-dots loading-lg border"></span>
                      ) : (
                        "Login with Google"
                      )}
                    </span>
                  </div>
                  <div className="text-center mb-5">
                    <span onClick={handleGithub} className="btn ">
                      <FaGithub className="text-xl" />
                      {githubLoading ? (
                        <span className="loading loading-dots loading-lg border"></span>
                      ) : (
                        "Login with Github"
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-7 text-center md:text-lg text-sm">
                <p>
                  Dont have an account?{" "}
                  <Link
                    to="/register"
                    className="text-[#457486] underline underline-offset-2 font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="scale-110 items-center justify-center hidden lg:flex">
            <Lottie animationData={animation}></Lottie>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Login;
