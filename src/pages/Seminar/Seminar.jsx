import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PageTop from "../../components/PageTop/PageTop";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
export const Seminar = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { search } = useLocation();
  let id = search.at(-1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get(`/seminar/seminar/${id}/`)
          .then((req) => setData(req.data));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading("show-p");
      }
    };
    fetchData();
  }, [id]);
  console.log(data);
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section>
      <PageTop data={{ h2: "seminar" + id }} />
      <div className="container">
        <div className="seminar">
          <h2>{data?.[`title_${lang}`]}</h2>
          <ul
            dangerouslySetInnerHTML={{ __html: data?.[`subcontent_${lang}`] }}
          />
        </div>
      </div>
    </section>
  );
};

Seminar.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.bool,
};
