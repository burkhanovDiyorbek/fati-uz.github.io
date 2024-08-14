import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const GlobalPartners = ({ setLoading, loading }) => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/xalqaro-aloqalar/xamkor-tashkilot/")
          .then((req) => setData(req.data.results));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
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
      <PageTop data={{ h2: "global-partners" }} />
      {data?.map((item) => {
        return (
          <div className="container" key={item.id}>
            <div className="section-slice">
              <div className="row1 column">
                <h2>{item?.[`title_${lang}`]}</h2>
                <img src={item?.file} alt="header" />
              </div>
              <div className="row2 inter-row">
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
    </section>
  );
};

GlobalPartners.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
