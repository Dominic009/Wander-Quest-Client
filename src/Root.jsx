import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import RouteLoader from "./Components/loader/RouteLoader";

const Root = () => {
  // document.body.style.backgroundColor = "#f7f0e3";
  const navigation = useNavigation()

  return (
    <div>
      <Nav></Nav>

      {navigation.state === "loading" && <RouteLoader />}

      <div className="">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
