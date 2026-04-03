import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      <Header title="Code and Coffee's Library" />
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
