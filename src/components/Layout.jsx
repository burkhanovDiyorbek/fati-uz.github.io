import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  console.log(window.location);
  return (
    <>
      {window.location.pathname !== "/" && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};
