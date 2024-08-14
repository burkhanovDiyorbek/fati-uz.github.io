import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const DocExams = ({ setLoading, loading }) => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/doktarantura/malakaviy-imtihon/")
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
  console.log(data);

  return (
    <section>
      <PageTop data={{ h2: "doc-exams" }} />
      <div className="container">
        <div className="section-slice">
          <div className="row1 column">
            <h2>{data?.[0]?.[`title_${lang}`]}</h2>
            <img src="./assets/about-header.jpg" alt="img" />
          </div>
          <div className="row2">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.[0]?.[`content_${lang}`],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

DocExams.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
