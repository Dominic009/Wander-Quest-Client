import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-green-700 text-white">
        <aside className="flex flex-col justify-center items-center">
          <div className="w-[50%] bg-white rounded-lg p-2">
            <img src={logo} alt="" />
          </div>
          <p className="text-2xl">Discover Your Path</p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Hotels</a>
          <a className="link link-hover">Transportation</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to='/aboutus' className="link link-hover">About us</Link>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
