import React, { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Journal = ({ setLoading, loading }) => {
  const [archiveYearVal, setArchiveYear] = useState("2005");
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [tahrirchilarData, setTahrirchilarData] = useState([]);
  const [archiveData, setArchiveData] = useState([]);
  const [archiveMenuData, setArchiveMenuData] = useState([]);
  const [talablarData, setTalablarData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/kutobxona/tahrirchilar/")
          .then((req) => setTahrirchilarData(req.data.results));
        await axios
          .get("/kutobxona/arxivmenu/")
          .then((req) => setArchiveData(req.data.results));
        await axios
          .get("/kutobxona/arxiv/")
          .then((req) => setArchiveMenuData(req.data.results));
        await axios
          .get("/kutobxona/talablar/")
          .then((req) => setTalablarData(req.data.json()));
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
      <PageTop data={{ h2: "journal" }} />
      <div className="container">
        <h2>{t("journal")}</h2>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1 column">
            <h2>{t("authors")}</h2>
            <img src="./assets/journal.jpg" alt="book jpg" />
          </div>
          <div className="row2">
            <ul>
              {tahrirchilarData?.map((item) => {
                return (
                  <li key={item?.id}>
                    <span>{item?.[`ish_joyi`]}</span>
                    <h4>{item?.[`title_${lang}`]}</h4>
                    <p style={{ maxWidth: "100%" }}>{item?.lavozimi}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {talablarData?.map((item) => {
        return (
          <React.Fragment key={item?.id}>
            <div className="aside blue">
              <div className="aside-container">
                <div className="aside-img">
                  <img src={item?.file} alt="journal" />
                </div>
                <div className="aside-content">
                  <h2>{item?.[`title_${lang}`]}</h2>
                  <p
                    style={{ marginBottom: "40px" }}
                    dangerouslySetInnerHTML={{
                      __html: item?.[`content_${lang}`],
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="container">
              1
              <div
                className="requirements"
                dangerouslySetInnerHTML={{
                  __html: item?.[`subcontent_${lang}`],
                }}
              />
            </div>
          </React.Fragment>
        );
      })}

      <div className="container">
        <h2 style={{ marginBottom: "20px" }}>
          <q>{t("journal")}</q> {t("archives")}
        </h2>
      </div>
      <div className="container" style={{ flexDirection: "column" }}>
        <div className="archive">
          <div className="left">
            <h2>{t("archive")}</h2>
            <ul>
              {archiveMenuData?.map((item) => {
                const { id, davr_oraligi } = item;
                return (
                  <li
                    key={id}
                    onClick={() => setArchiveYear(davr_oraligi)}
                    className={davr_oraligi == archiveYearVal ? "active" : ""}
                  >
                    <b
                      dangerouslySetInnerHTML={{
                        __html: item?.[`content_${lang}`],
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right">
            <ul>
              {archiveData
                ?.filter(
                  (item) =>
                    item.yil <= archiveYearVal && item.yil >= archiveYearVal - 5
                )
                ?.map((item) => {
                  console.log(item);

                  return (
                    <li key={item?.id}>
                      <Link to={item?.file_url} target="_blank">
                        {item?.yil}-yil {item?.nashr_raqami}-son
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Journal.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
