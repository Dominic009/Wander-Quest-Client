import { FcGoogle } from "react-icons/fc";
import Footer from "../Components/Footer";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { userLogIn, githubLogin, googleLogin, loading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    <div className="w-full h-[100vh] flex justify-center items-center">
      <span className="loading loading-dots loading-lg border"></span>
    </div>;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    const loggedUSer = { email, password };
    console.log(loggedUSer);

    // User log in
    userLogIn(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Login successful")
        navigate(location?.state ? location.state : "/");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  //Google login
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  //Github login
  const handleGithub = () => {
    githubLogin()
      .then((res) => {
        console.log(res);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-[#204426]">
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

      <div className="bg-[#E5DCCA] w-[80%] mx-auto mt-12 mb-12 grid md:grid-cols-2 text-center p-6 rounded-xl drop-shadow-xl font-rajdhani">
        <div>
          <div className="">
            <div className="">
              <h1 className="animate__animated animate__fadeInDown text-3xl md:text-5xl font-bold font-lobster">
                Log In
              </h1>
            </div>
            <div className="shrink-0 ">
              <form onClick={handleLogin} className="card-body">
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
                <div className="form-control mt-6 w-[70%] mx-auto">
                  <button className="px-6 py-2 rounded hover:rounded-xl font-bold bg-[#244128] text-white text-lg">
                    Login
                  </button>
                </div>
              </form>
              <hr className="w-[70%] mx-auto mb-5" />
              <div className="flex flex-col md:flex-row justify-center md:gap-5">
                <div className="text-center mb-5">
                  <button onClick={handleGoogle} className="btn ">
                    <FcGoogle className="text-xl" />
                    Login with Google
                  </button>
                </div>
                <div className="text-center mb-5">
                  <button onClick={handleGithub} className="btn ">
                    <FaGithub className="text-xl" />
                    Login with Github
                  </button>
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

        <div>Login image</div>
      </div>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
};

export default Login;
