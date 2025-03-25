import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Root = () => {
  // document.body.style.backgroundColor = "#f7f0e3";

  return (
    <div>
      <Nav></Nav>

      <div className="">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
