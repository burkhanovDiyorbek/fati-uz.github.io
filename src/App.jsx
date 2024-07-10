import translationUz from "./locales/translation-uz.json";
import translationEn from "./locales/translation-en.json";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import "./App.css";
import { About } from "./pages/About/About";
import { CentersAndDepartments } from "./pages/CentersAndDepartments/CentersAndDepartments";
import { News } from "./pages/News/News";
import { NewsAbout } from "./pages/NewsAbout/NewsAbout";
import { Library } from "./pages/Library/Library";
import { Seminar } from "./pages/Seminar/Seminar";
import { Internationals } from "./pages/Internationals/Internationals";
import { Doctoral } from "./pages/Doctoral/Doctoral";
import { useEffect } from "react";
import { Councils } from "./pages/Councils/Councils";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    en: { translation: translationEn },
  },
  lng: localStorage.getItem("i18lng") || "uz",
  fallbackLng: localStorage.getItem("i18lng") || "uz",
});

const App = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    document.body.classList.add("true");
    setTimeout(() => {
      document.body.classList.remove("true");
    }, 500);
  }, [pathname]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="centers-and-departments"
          element={<CentersAndDepartments />}
        />
        <Route path="news" element={<News />}></Route>
        <Route path="news/:id" element={<NewsAbout />} />
        <Route path="library" element={<Library />} />
        <Route path="seminar" element={<Seminar />} />
        <Route path="internationals" element={<Internationals />} />
        <Route path="doctorals" element={<Doctoral />} />
        <Route path="councils" element={<Councils />} />
      </Route>
    </Routes>
  );
};

export default App;
