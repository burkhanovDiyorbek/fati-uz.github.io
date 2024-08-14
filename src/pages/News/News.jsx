import { useTranslation } from "react-i18next";
import styles from "./news.module.css";
import { FaRegNewspaper } from "react-icons/fa6";
import { useEffect, useState } from "react";
import PageTop from "../../components/PageTop/PageTop";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
export const month = {
  "01_uz": "Yanvar",
  "02_uz": "Fevral",
  "03_uz": "Mart",
  "04_uz": "Aprel",
  "05_uz": "May",
  "06_uz": "Iyun",
  "07_uz": "Iyul",
  "08_uz": "Avgust",
  "09_uz": "Sentabr",
  "10_uz": "Oktabr",
  "11_uz": "Noyabr",
  "12_uz": "Dekabr",
  "01_en": "January",
  "02_en": "February",
  "03_en": "March",
  "04_en": "Aprel",
  "05_en": "May",
  "06_en": "June",
  "07_en": "July",
  "08_en": "August",
  "09_en": "September",
  "10_en": "October",
  "11_en": "November",
  "12_en": "December",
};

export const News = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [sortVal, setSortVal] = useState("newest");
  const [data, setData] = useState([]);
  // const [change, setChange] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/qoshimcha-malumotlar/yangiliklar/")
          .then((req) => setData(req.data.results));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, []);

  // const sortData = (sortVal) => {
  //   if (sortVal == "newest") {
  //     setData((prev) => prev);
  //     console.log(change);
  //   } else if (sortVal == "oldest") {
  //     setData((prev) => prev.reverse());
  //   }
  // };
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section className={styles.section}>
      <PageTop data={{ h2: "news" }} />
      <div className="container">
        <div className="community">
          <ul className="news-sort">
            <li>{t("sort-by")}</li>
            <li
              className={sortVal == "newest" ? "active" : ""}
              onClick={() => setSortVal("newest")}
            >
              {t("published")} ({t("newest")})
            </li>
            <li
              className={sortVal == "oldest" ? "active" : ""}
              onClick={() => setSortVal("oldest")}
            >
              {t("published")} ({t("oldest")})
            </li>
            <li
              className={sortVal == "a-z" ? "active" : ""}
              onClick={() => setSortVal("a-z")}
            >
              A-Z
            </li>
            <li
              className={sortVal == "z-a" ? "active" : ""}
              onClick={() => setSortVal("z-a")}
            >
              Z-A
            </li>
          </ul>
          <div className="cards">
            {data?.map((item) => {
              return (
                <div className="card" key={item?.id}>
                  <div className="content">
                    <div className="news-title">
                      <FaRegNewspaper />
                      <p>{t("news")}</p>
                      <span>
                        {item?.created_at?.slice(8, 10) +
                          " " +
                          month[item?.created_at?.slice(5, 7) + "_" + lang] +
                          " " +
                          item?.created_at?.slice(0, 4)}
                      </span>
                    </div>
                    <Link to={"/news/" + item?.id}>
                      <h2>{item?.[`title_${lang}`]}</h2>
                    </Link>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.[`content_${lang}`].length > 200
                            ? item?.[`content_${lang}`].slice(0, 200) + "..."
                            : item?.[`content_${lang}`],
                      }}
                    />
                    <Link to={"/news/" + item?.id}>
                      <img
                        src="./assets/icons/arrow.svg"
                        alt="arrow"
                        className="arrow"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

News.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
