import { FaRegNewspaper } from "react-icons/fa6";
import styles from "./newsabout.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { month } from "../News/News";
import PropTypes from "prop-types";

export const NewsAbout = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState({});
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();
  const lang = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/qoshimcha-malumotlar/yangiliklar/" + id)
          .then((req) => setData(req.data));
        await axios
          .get("/qoshimcha-malumotlar/yangiliklar/")
          .then((req) => setNewsData(req.data.results));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, [id]);
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles["news-title"]}>
            <div>
              <FaRegNewspaper />
              <p>{t("news")}</p>
            </div>
          </div>
          <h2>{data?.[`title_${lang}`]}</h2>
          <span>
            {data?.created_at?.slice(8, 10) +
              " " +
              month[data?.created_at?.slice(5, 7) + "_" + lang] +
              " " +
              data?.created_at?.slice(0, 4)}
          </span>
          <div className={styles.img}>
            <img src={data?.file} alt="im g" />
          </div>
          <ul dangerouslySetInnerHTML={{ __html: data?.[`content_${lang}`] }} />
        </div>
      </div>
      <div className="container">
        <div className="img-cards">
          <h2>{t("latest_news")}</h2>
          <div className="cards">
            {newsData?.reverse()?.map((item, index) => {
              if (index < 3 && item?.id != id) {
                return (
                  <Link
                    to={"/news/" + item?.id}
                    className="card"
                    key={item?.id}
                  >
                    <img src={item?.file} alt="book" />
                    <h3>{item?.[`title_${lang}`]}</h3>
                    <br />
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.[`content_${lang}`]?.slice(0, 250) + "...",
                      }}
                    />
                    <img
                      src="/assets/icons/arrow.svg "
                      alt="arrow img"
                      className="arrow"
                    />
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

NewsAbout.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
