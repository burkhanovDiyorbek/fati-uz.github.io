import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import PageTop from "../../components/PageTop/PageTop";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const SearchResult = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const [newsData, setNewsData] = useState([]);
  const { value } = useParams();
  const lang = i18n.language;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/qoshimcha-malumotlar/yangiliklar/")
          .then((req) =>
            setNewsData(
              req.data.results.filter((item) =>
                item?.[`title_${lang}`]
                  ?.toLowerCase()
                  ?.includes(value?.toLowerCase())
              )
            )
          );
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, [value]);

  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section>
      <PageTop data={{ h2: "search-results" }} />
      <div className="container">
        <div className="img-cards">
          <h2 style={{ fontSize: "32px", fontWeight: 400 }}>
            {t("search-results")}
            <q style={{ fontWeight: 600, marginLeft: "40px" }}>{value}</q>
          </h2>
          <div className="cards">
            {newsData.length > 0 ? (
              newsData?.map((item) => {
                return (
                  <Link
                    to={"/news/" + item?.id}
                    className="card"
                    key={item?.id}
                  >
                    <h3>{item?.[`title_${lang}`]}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item?.[`content_${lang}`].slice(0, 300) + "...",
                      }}
                    />
                    <img
                      src="/assets/icons/arrow.svg"
                      alt="arrow"
                      className="arrow"
                    />
                  </Link>
                );
              })
            ) : (
              <p>{t("no-search-result")}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

SearchResult.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
