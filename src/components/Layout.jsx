import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import PropTypes from "prop-types";

export const Layout = () => {
  return (
    <>
      {window.location.pathname !== "/" && <Navbar />}

      <Outlet />

      <Footer />
    </>
  );
};

Layout.propTypes = {
  loading: PropTypes.any,
  setLoading: PropTypes.func,
};
