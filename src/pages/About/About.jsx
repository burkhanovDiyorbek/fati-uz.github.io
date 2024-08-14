import { useTranslation } from "react-i18next";
import styles from "./about.module.css";
import PageTop from "../../components/PageTop/PageTop";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const About = ({ loading, setLoading }) => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const lang = i18n.language;
  console.log(loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/qoshimcha-malumotlar/institut-tarixi/")
          .then((req) => setData(req.data.results));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, []);
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section className={styles.section}>
      <PageTop data={{ h2: "about" }} />
      <div className={styles.desc}>
        <h2>
          <q>
            {t("footer_title_b")}
            {t("footer_title_p")}
          </q>
        </h2>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("history_title")}</h2>
          </div>
          <div className="row2">
            <p
              className="his_desc"
              dangerouslySetInnerHTML={{
                __html: data[0]?.[`subcontent_${lang}`],
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("rectors")}</h2>
          </div>
          <div className="row2">
            <ul
              dangerouslySetInnerHTML={{ __html: data[0]?.[`content_${lang}`] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
