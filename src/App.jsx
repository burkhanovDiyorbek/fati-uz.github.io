import translationUz from "./locales/translation-uz.json";
import translationEn from "./locales/translation-en.json";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home/Home";
import "./App.css";
import { About } from "./pages/About/About";
import { CentersAndDepartments } from "./pages/CentersAndDepartments/CentersAndDepartments";
import { News } from "./pages/News/News";
import { NewsAbout } from "./pages/NewsAbout/NewsAbout";
import { Library } from "./pages/Library/Library";
import { Seminar } from "./pages/Seminar/Seminar";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    en: { translation: translationEn },
  },
  lng: localStorage.getItem("i18lng") || "uz",
  fallbackLng: localStorage.getItem("i18lng") || "uz",
});

const App = () => {
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
        <Route path="/news/:id" element={<NewsAbout />} />
        <Route path="/library" element={<Library />} />
        <Route path="/seminar" element={<Seminar />} />
      </Route>
    </Routes>
  );
};

export default App;
