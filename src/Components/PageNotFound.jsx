import { Link } from 'react-router-dom';
import image from '../assets/Page-Error.jpg'
import logo from "../assets/Logo.png";

const PageNotFound = () => {
    return (
        <div className='bg-[#1E1E1E] h-[100vh]'>
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

            <img src={image} alt="" className='w-[70%] mx-auto'/>
        </div>
    );
};

export default PageNotFound;