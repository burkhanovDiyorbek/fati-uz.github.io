import { useTranslation } from "react-i18next";
import PageTop from "../components/PageTop/PageTop";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const ScientificDegree = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [data, setData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios.get("/kengashlar/azolar/").then((req) => setData(req.data));
        await axios
          .get("/kengashlar/institut-ken-azolari/")
          .then((req) => setHeaderData(req.data.results));
        setLoading(false);
      } catch {
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
    <section>
      <PageTop data={{ h2: "scientific-degree" }} />
      <div className="aside red">
        <div className="aside-container">
          <div className="aside-img">
            <img src={headerData?.[0]?.file} alt="jpg" />
          </div>
          <div
            className="aside-content"
            dangerouslySetInnerHTML={{
              __html: headerData?.[0]?.[`title_${lang}`],
            }}
          />
        </div>
      </div>
      <div className="container">
        <ul className="councils">
          {data.map((item) => {
            return (
              <li key={item?.id}>
                <span>{item?.shifr}</span>
                <h2>{item?.[`name_${lang}`]}</h2>
                <ol>
                  <li>
                    <b>{t("workplace")}: </b> {item?.[`ish_joy_${lang}`]}
                  </li>
                  <li>
                    <b>{t("position")}: </b> {item?.[`lavozim_${lang}`]}
                  </li>
                  <li>
                    <b>{t("academic_degree")}: </b>{" "}
                    {item?.[`ilmiy_darajasi_${lang}`]}
                  </li>
                  <li>
                    <b>{t("academic_title")}: </b>{" "}
                    {item?.[`ilmiy_unvoni_${lang}`]}
                  </li>
                </ol>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

ScientificDegree.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.bool,
};
