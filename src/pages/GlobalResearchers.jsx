import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import axios from "axios";

export const GlobalResearchers = ({ setLoading, loading }) => {
  const [year, setYear] = useState(2016);
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/xalqaro-aloqalar/xalqaro-tadqiqot/")
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
    <section>
      <PageTop data={{ h2: "global-researchers" }} />
      <div className="aside green">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="header" />
          </div>
          <div className="aside-content">
            <h2>{t("global-researchers")}</h2>
            <p style={{ marginBottom: "30px" }}>
              O&rsquo;zR FA Tarix institutiga kelgan chet ellik mutaxassislar
              (2016-2020)
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="global-researchers">
          <div className="top">
            <ul>
              {Array(6)
                .fill(2016)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => setYear(2016 + index)}
                      className={2016 + index == year ? "active" : ""}
                    >
                      {2016 + index}
                    </li>
                  );
                })}
            </ul>
          </div>
          <ul>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

GlobalResearchers.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.bool,
};
