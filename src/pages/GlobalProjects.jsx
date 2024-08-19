import PropTypes from "prop-types";
import PageTop from "../components/PageTop/PageTop";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export const GlobalProjects = ({ setLoading, loading }) => {
  const [data, setData] = useState([]);
  const [isCompleted, setIsCompleted] = useState(true);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/xalqaro-aloqalar/xamkor-loihalar/")
          .then((req) => setData(req.data));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, []);
  console.log(data);

  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section>
      <PageTop data={{ h2: "global-projects" }} />
      <div className="container">
        <div className="section-slice">
          <div className="row1 column">
            <h2>{data?.[0]?.[`title_${lang}`]}</h2>
            <img src={data?.[0]?.img_file} />
          </div>
          <div className="row2">
            <p
              dangerouslySetInnerHTML={{
                __html: data?.[0]?.[`content_${lang}`],
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="global-researchers">
          <div className="top">
            <ul>
              <li
                onClick={() => setIsCompleted(true)}
                className={true === isCompleted ? "active" : ""}
              >
                {t("completed_projects")}
              </li>
              <li
                onClick={() => setIsCompleted(false)}
                className={false === isCompleted ? "active" : ""}
              >
                {t("active_projects")}
              </li>
            </ul>
          </div>
          <ul>
            {data?.[0]?.xamkor_loiha
              ?.filter((item) => item?.isCompleted === isCompleted)
              ?.map((item) => {
                return (
                  <li key={item?.id}>
                    <h2>{item?.[`title_${lang}`]}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item?.[`content_${lang}`],
                      }}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

GlobalProjects.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
