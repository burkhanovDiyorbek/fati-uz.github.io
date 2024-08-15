import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import axios from "axios";

export const GlobalResearchers = ({ setLoading, loading }) => {
  const [years, setYears] = useState([]);
  const [year, setYear] = useState("2000");
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [kelganlarData, setKelganlarData] = useState([]);
  const lang = i18n.language;
  useEffect(() => {
    setYear(years[0]);
  }, [years]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/xalqaro-aloqalar/tadqiqot/")
          .then((req) => setData(req.data.results));
        await axios
          .get("/xalqaro-aloqalar/Kelganlar/")
          .then((req) => setKelganlarData(req.data.results));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, []);
  kelganlarData?.map((item) =>
    years.includes(item.kelgan_yil)
      ? ""
      : setYears((prev) => [...prev, item.kelgan_yil])
  );
  console.log(data);

  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section>
      <PageTop data={{ h2: "global-researchers" }} />
      {data.map((item) => {
        return (
          <div className="container" key={item?.id}>
            <div className="section-slice">
              <div className="row-1">
                <h2>{item?.[`title_${lang}`]}</h2>
                <img src={item?.file} alt="" />
              </div>
              <div className="row-2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: item?.[`content_${lang}`],
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="container">
        <div className="global-researchers">
          <div className="top">
            <ul>
              {years.map((item) => {
                return (
                  <li
                    key={item}
                    onClick={() => setYear(item)}
                    className={item == year ? "active" : ""}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <ul>
            {kelganlarData
              ?.filter((item) => item.kelgan_yil == year)
              ?.map((item) => {
                return (
                  <li key={item?.id}>
                    <h2>{item?.[`ism_${lang}`]}</h2>
                    <p>{item?.[`ish_joy_${lang}`]}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

GlobalResearchers.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
