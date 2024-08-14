import { useEffect, useState } from "react";
import PageTop from "../../components/PageTop/PageTop";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PropTypes from "prop-types";

export const TradeUnion = ({ setLoading, loading }) => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const lang = i18n.language;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/qoshimcha-malumotlar/rahbariyat/")
          .then((req) => setData(req.data.results));
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
      <PageTop data={{ h2: "trade-union" }} />
      <div className="container">
        <div className="community">
          <h2 className="title">{t("trade-union")}</h2>
          <div className="cards">
            {data?.map((item) => {
              return (
                <div className="card" key={item?.id}>
                  <div className="content">
                    <p>{item?.position}</p>
                    <h2>{item?.[`title_${lang}`]}</h2>
                    <span>{item?.degree}</span>
                    <ul dangerouslySetInnerHTML={{ __html: item?.contact }} />
                  </div>
                  <div className="picture">
                    <img src={item?.image} alt="user" />
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

TradeUnion.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
