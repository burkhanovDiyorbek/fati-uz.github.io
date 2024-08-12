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
import { useEffect, useState } from "react";
import { SearchResult } from "./pages/SearchResult/SearchResult";
import { NotFound } from "./pages/NotFound/NotFound";
import { Contact } from "./pages/Contact/Contact";
import { TradeUnion } from "./pages/TradeUnion/TradeUnion";
import { OrganizationStructure } from "./pages/OrganizationStructure/OrganizationStructure";
import { DocAdmission } from "./pages/DocAdmission";
import { Doctaurants } from "./pages/Doctaurants";
import { DocExams } from "./pages/DocExams";
import { ScientificDegree } from "./pages/ScientificDegree";
import { ScYoung } from "./pages/ScYoung";
import { Journal } from "./pages/Journal";
import { EBooks } from "./pages/E-Books";
import { Sources } from "./pages/Sources";
import { Abstracts } from "./pages/Abstracts";
import { GlobalPartners } from "./pages/GlobalPartners";
import { GlobalResearchers } from "./pages/GlobalResearchers";
import { GlobalProjects } from "./pages/GlobalProjects";
import { Seminar } from "./pages/Seminar/Seminar";
import { ScCouncil } from "./pages/ScCouncil";
import axios from "axios";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    en: { translation: translationEn },
  },
  lng: localStorage.getItem("i18lng") || "uz",
  fallbackLng: localStorage.getItem("i18lng") || "uz",
});

axios.defaults.baseURL = "http://subdomain.uzfati.uz";

const App = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.body.classList.add("true");
    setTimeout(() => {
      document.body.classList.remove("true");
    }, 500);
  }, [pathname]);

  useEffect(() => {
    document.title =
      localStorage.getItem("i18lng") == "uz"
        ? "O'zbekiston fanlar akademiyasi Tarix instituti"
        : "Institute of History of the Academy of Sciences of Uzbekistan";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} />}>
        <Route
          index
          element={<Home setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="about"
          element={<About setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="centers-and-departments"
          element={
            <CentersAndDepartments setLoading={setLoading} loading={loading} />
          }
        />
        <Route
          path="news"
          element={<News setLoading={setLoading} loading={loading} />}
        ></Route>
        <Route
          path="news/:id"
          element={<NewsAbout setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="search/:value"
          element={<SearchResult setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="seminar"
          element={<Seminar setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="contact"
          element={<Contact setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="trade-union"
          element={<TradeUnion setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="organization-structure"
          element={
            <OrganizationStructure setLoading={setLoading} loading={loading} />
          }
        />
        <Route
          path="doc-admission"
          element={<DocAdmission setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="doctaurants"
          element={<Doctaurants setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="doc-exams"
          element={<DocExams setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="scientific-degree"
          element={
            <ScientificDegree setLoading={setLoading} loading={loading} />
          }
        />
        <Route
          path="sc-young"
          element={<ScYoung setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="sc-council"
          element={<ScCouncil setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="journal"
          element={<Journal setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="e-books"
          element={<EBooks setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="sources"
          element={<Sources setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="abstracts"
          element={<Abstracts setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="global-partners"
          element={<GlobalPartners setLoading={setLoading} loading={loading} />}
        />
        <Route
          path="global-researchers"
          element={
            <GlobalResearchers setLoading={setLoading} loading={loading} />
          }
        />
        <Route
          path="global-projects"
          element={<GlobalProjects setLoading={setLoading} loading={loading} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
