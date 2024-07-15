import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";

export const Layout = () => {
  const scrollbar = useRef(null);

  return (
    <>
      <Scrollbar
        ref={scrollbar}
        plugins={{
          overscroll: {
            effect: "bounce",
          },
        }}
      >
        {window.location.href !== "https://fati-uz.vercel.app" ||
          (window.location.href !== "http://localhost:5173/" && <Navbar />)}
        <Outlet />
        <Footer />
      </Scrollbar>
    </>
  );
};
